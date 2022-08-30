import getJobs from "@/api/getJobs";
import filterJobs from "@/api/filterJobs";

import {
    FETCH_JOBS,
    FILTER_JOBS,
    RECEIVE_JOBS,
    FILTER_JOBS_IN_STATE,
} from "@/store/constants";

const actions = {
    [FETCH_JOBS]: async(context) => {
        try {
            const jobListings = await getJobs();
            await context.commit(RECEIVE_JOBS, jobListings);
            // await context.commit(MAX_JOBS, jobListings.length);

        } catch (error) {
            console.log("from fetch job error", error)
        }
    },

    [FILTER_JOBS]: async(context) => {
        let input = [];
        const selOrgs = context.state.selectedOrganizations;
        const selJobTypes = context.state.selectedJobTypes;
        const payloadInput = input.concat(
            selOrgs ? selOrgs : "",
            selJobTypes ? selJobTypes : ""
        ).join(",");
        // console.log("payloadInput", payloadInput)
        // console.log(payloadInput);
        const filteredJobsResponse = await filterJobs(payloadInput)

        await context.commit(FILTER_JOBS_IN_STATE, filteredJobsResponse);
    },

};

export default actions;