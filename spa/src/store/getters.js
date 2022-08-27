import {
    UNIQUE_ORGANIZATIONS,
    UNIQUE_JOB_TYPES,
    FILTERED_JOBS,
    FILTERED_JOBS_BY_ORGANIZATIONS,
    FILTERED_JOBS_BY_JOB_TYPES,
    INCLUDE_JOB_BY_ORGANIZATION,
    INCLUDE_JOB_BY_JOB_TYPE
} from "@/store/constants";

const getters = {
    [UNIQUE_ORGANIZATIONS](state) {
        const uniqueOrganizations = new Set();
        state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
        return uniqueOrganizations;
    },
    [UNIQUE_JOB_TYPES](state) {
        const uniqueJobTypes = new Set();
        state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
        return uniqueJobTypes;
    },
    [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
        if (state.selectedOrganizations.length != 0) {
            return state.filteredJobs
        }
        return state.jobs
        // return state.jobs.filter((job) => state.selectedOrganizations.includes(job.organization))
        // return state.filteredJobs;
    },
    [FILTERED_JOBS_BY_JOB_TYPES](state) {

        if (state.selectedJobTypes.length != 0) {
            return state.filteredJobs;
        }
        return state.jobs
    },
    [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
        if (state.selectedOrganizations.length === 0) return true;
        return state.selectedOrganizations.includes(job.organization);
    },
    [INCLUDE_JOB_BY_JOB_TYPE]: (state) => (job) => {
        if (state.selectedJobTypes.length === 0) return true;
        return state.selectedJobTypes.includes(job.jobType);
    },
    [FILTERED_JOBS](state) {
        const selectedOrganizations = state.selectedOrganizations.length != 0;
        const selectedJobTypes = state.selectedJobTypes.length != 0;

        if (selectedOrganizations || selectedJobTypes) {
            return state.filteredJobs
        }
        return state.jobs;
    },


};

export default getters;