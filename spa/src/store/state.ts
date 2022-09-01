import { GlobalState } from "@/store/types";
const state = (): GlobalState => {
    return {
        isLoggedIn: false,
        jobs: [],
        selectedOrganizations: [],
        selectedJobTypes: [],
        filteredJobs: [],
    };
};

// console.log(typeof(state))

export default state;