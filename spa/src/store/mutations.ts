import { GlobalState } from "@/store/types";
import { Job } from "@/api/types";
import {
    LOGIN_USER,
    RECEIVE_JOBS,
    ADD_SELECTED_ORGANIZATIONS,
    FILTER_JOBS_IN_STATE,
    ADD_SELECTED_JOB_TYPES,
} from "@/store/constants";

const mutations = {
    [LOGIN_USER](state: GlobalState) {
        state.isLoggedIn = !state.isLoggedIn;
    },

    [RECEIVE_JOBS](state: GlobalState, payload: Job[]) {
        state.jobs = payload;
    },

    [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, payload: string[]) {
        state.selectedOrganizations = payload;
    },

    [ADD_SELECTED_JOB_TYPES](state: GlobalState, payload: string[]) {
        state.selectedJobTypes = payload;
    },
    [FILTER_JOBS_IN_STATE](state: GlobalState, payload: Job[]) {
        // console.log(payload);
        state.filteredJobs = payload;
    },
};
export default mutations;