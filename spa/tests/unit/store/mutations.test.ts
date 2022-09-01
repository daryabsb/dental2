import mutations from "@/store/mutations";
import { createJob, createState } from "./utils"

describe("mutations", () => {
    describe("LOGIN_USER", () => {
        it("logs the user in", () => {
            // const state = { isLoggedIn: false } as GlobalState;
            // const startingState = state();
            const startingState = createState({ isLoggedIn: false });
            mutations.LOGIN_USER(startingState);
            expect(startingState.isLoggedIn).toBe(true);
        });
    });
    describe("RECEIVE_JOBS", () => {
        it("receives jobs from api response", () => {
            const startingState = createState({ jobs: [] });
            const jobOne = createJob();
            const jobTwo = createJob();
            mutations.RECEIVE_JOBS(startingState, [jobOne, jobTwo]);
            expect(startingState.jobs).toEqual([jobOne, jobTwo]);
        });
    });
    describe("ADD_SELECTED_ORGANIZATIONS", () => {
        it("updates organizations that the user selected", () => {
            const startingState = createState({ selectedOrganizations: [] });
            mutations.ADD_SELECTED_ORGANIZATIONS(startingState, ["Google", "Amazon"]);
            expect(startingState.selectedOrganizations).toEqual(["Google", "Amazon"]);
        });
    });
    describe("FILTER_JOBS_IN_STATE", () => {
        it("updates filtered jobs from api", () => {
            const startingState = createState({ filteredJobs: [] });
            const jobOne = createJob();
            const jobTwo = createJob();
            mutations.FILTER_JOBS_IN_STATE(startingState, [jobOne, jobTwo]);
            expect(startingState.filteredJobs).toEqual([jobOne, jobTwo]);
        });
    });
    describe("ADD_SELECTED_JOB_TYPES", () => {
        it("updates job types that the user selected", () => {
            const startingState = createState({ selectedJobTypes: [] });
            mutations.ADD_SELECTED_JOB_TYPES(startingState, [
                "Full Time",
                "Part Time",
            ]);
            expect(startingState.selectedJobTypes).toEqual([
                "Full Time",
                "Part Time",
            ]);
        });
    });
});
