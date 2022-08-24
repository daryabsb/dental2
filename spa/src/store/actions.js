import getJobs from "@/api/getJobs";
import filterJobs from "@/api/filterJobs";

import {
    FETCH_JOBS,
    FILTER_JOBS,
    RECEIVE_JOBS,
    FILTER_JOBS_IN_STATE,
    UNIQUE_ORGANIZATIONS,
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

    [FILTER_JOBS]: async(context, payload) => {
        const selectedjobTypes = ["Intern", "Part-time"]
        const selectedOrganizationsKeywords =
            Array.from(context.state.selectedOrganizations).join(",");
        const selectedJobTypesKeywords =
            Array.from(selectedjobTypes).join(",")
        console.log(selectedJobTypesKeywords);

        const filteredJobKeywordsObject = {
            organization: selectedOrganizationsKeywords,
            jobType: selectedJobTypesKeywords,
        }
        const filteredJobsResponse = await filterJobs(filteredJobKeywordsObject)
            // console.log("action filter", filteredJobs);
        await context.commit(FILTER_JOBS_IN_STATE, filteredJobsResponse);

    },
    // [FILTER_JOBS]: async(context, payload) => {
    //     // console.log("from Actions: ", payload);
    //     const filteredJobsResponse = await filterJobs([payload])
    //         // console.log("action filter", filteredJobs);
    //     await context.commit(FILTER_JOBS_IN_STATE, filteredJobsResponse);

    // },

};

export default actions;