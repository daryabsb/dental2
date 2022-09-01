import {
    UNIQUE_ORGANIZATIONS,
    UNIQUE_JOB_TYPES,
    FILTERED_JOBS,
} from "@/store/constants";

import { GlobalState } from "@/store/types";
// import { Job } from "@/api/types";

const getters = {
    [UNIQUE_ORGANIZATIONS](state: GlobalState) {
        const uniqueOrganizations = new Set<string>();
        state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
        return uniqueOrganizations;
    },
    [UNIQUE_JOB_TYPES](state: GlobalState) {
        const uniqueJobTypes = new Set<string>();
        state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
        return uniqueJobTypes;
    },
    [FILTERED_JOBS](state: GlobalState) {
        const noSelectedOrganizations = state.selectedOrganizations.length === 0;
        const noSelectedJobTypes = state.selectedJobTypes.length === 0;

        if (noSelectedOrganizations && noSelectedJobTypes) {
            return state.jobs;
        }
        return state.filteredJobs
    },
};

export default getters;