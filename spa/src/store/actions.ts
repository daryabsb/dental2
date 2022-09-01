import getJobs from "@/api/getJobs";
import { Commit, Dispatch } from "vuex";
import filterJobs from "@/api/filterJobs";
import { GlobalState } from "@/store/types";
interface Context {
    state: Partial<GlobalState>,
    commit: Commit,
    dispatch: Dispatch,
}
import {
    FETCH_JOBS,
    FILTER_JOBS,
    RECEIVE_JOBS,
    FILTER_JOBS_IN_STATE,
} from "@/store/constants";

const actions = {
    [FETCH_JOBS]: async (context: Context) => {
        try {
            const jobListings = await getJobs();
            context.commit(RECEIVE_JOBS, jobListings);
        } catch (error) {
            console.log("from fetch job error", error)
        }
    },
    [FILTER_JOBS]: async (context: Context) => {
        let input: string[] = [];
        const selOrgs = context.state.selectedOrganizations;
        const selJobTypes = context.state.selectedJobTypes;
        const payloadInput = input.concat(
            selOrgs ? selOrgs : "",
            selJobTypes ? selJobTypes : ""
        ).join(",");
        const filteredJobsResponse = await filterJobs(payloadInput)

        await context.commit(FILTER_JOBS_IN_STATE, filteredJobsResponse);
    },
};
export default actions;