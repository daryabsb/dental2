import { Job } from "@/api/types"
export interface GlobalState {
    isLoggedIn: boolean;
    jobs: Job[];
    filteredJobs: Job[];
    selectedOrganizations: string[];
    selectedJobTypes: string[];
};