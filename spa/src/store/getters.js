import {
    UNIQUE_ORGANIZATIONS,
    UNIQUE_JOB_TYPES,
    FILTERED_JOBS_BY_ORGANIZATIONS,
    MAX_JOBS,
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
        if (state.selectedOrganizations.length === 0) {
            return state.jobs
        } else {
            return state.filteredJobs
        }
        // return state.jobs.filter((job) => state.selectedOrganizations.includes(job.organization))
        // return state.filteredJobs;
    },
    [MAX_JOBS](state) {
        if (state.selectedOrganizations.length === 0) {
            return state.jobs.length
        } else {
            return state.filteredJobs.length
        }
    },
};

export default getters;