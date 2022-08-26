import {
    LOGIN_USER,
    RECEIVE_JOBS,
    ADD_SELECTED_ORGANIZATIONS,
    FILTER_JOBS_IN_STATE,
    ADD_SELECTED_JOB_TYPES,
} from "@/store/constants";

const mutations = {
    [LOGIN_USER](state) {
        state.isLoggedIn = !state.isLoggedIn;
    },

    [RECEIVE_JOBS](state, payload) {
        state.jobs = payload;
    },

    [ADD_SELECTED_ORGANIZATIONS](state, payload) {
        state.selectedOrganizations = payload;
    },

    [ADD_SELECTED_JOB_TYPES](state, payload) {
        state.selectedJobTypes = payload;
    },
    [FILTER_JOBS_IN_STATE](state, payload) {
        // console.log(payload);
        state.filteredJobs = payload;
    },


};

export default mutations;