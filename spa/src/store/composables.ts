import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import { FETCH_JOBS, FILTERED_JOBS, UNIQUE_JOB_TYPES, UNIQUE_ORGANIZATIONS } from "@/store/constants";

import { Job } from "@/api/types"

/* GETTERS */
export const useFilteredJobs = () => {
    const store = useStore(key);
    return computed<Job[]>(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueOrganizations = () => {
    const store = useStore(key);
    return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useUniqueJobTypes = () => {
    const store = useStore(key);
    return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]);
};

/* ACTIONS */
export const useFetchJobsDispatch = () => {
    const store = useStore(key);
    store.dispatch(FETCH_JOBS);
};