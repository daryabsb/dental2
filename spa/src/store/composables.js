import { computed } from "vue";
import { useStore } from "vuex";

import { FETCH_JOBS, FILTERED_JOBS, UNIQUE_JOB_TYPES, UNIQUE_ORGANIZATIONS } from "@/store/constants";

/* GETTERS */

export const useFilteredJobs = () => {
    const store = useStore();
    return computed(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueOrganizations = () => {
    const store = useStore();
    return computed(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useUniqueJobTypes = () => {
    const store = useStore();
    return computed(() => store.getters[UNIQUE_JOB_TYPES]);
};

/* ACTIONS */
export const useFetchJobsDispatch = () => {


    // try {
    const store = useStore();
    store.dispatch(FETCH_JOBS);
    // } catch (error) {
    //     console.log("From store/composables/useFetchJobsDispatch:- ", error);
    // }
};