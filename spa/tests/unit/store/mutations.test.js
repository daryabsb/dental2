import mutations from "@/store/mutations";


describe("mutations", () => {
    describe("LOGIN_USER", () => {
        it("logs the user in", () => {
            const state = { isLoggedIn: false };
            mutations.LOGIN_USER(state);
            expect(state).toEqual({ isLoggedIn: true });
        });
    });
    describe("RECEIVE_JOBS", () => {
        it("receives jobs from api response", () => {
            const state = { jobs: [] };
            mutations.RECEIVE_JOBS(state, ["job 1", "job 2"]);
            expect(state).toEqual({ jobs: ["job 1", "job 2"] })
        });
    });
    describe("ADD_SELECTED_ORGANIZATIONS", () => {
        it("updates organizations that the user selected", () => {
            const state = { selectedOrganizations: [] };
            mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Google", "Amazon"]);
            expect(state).toEqual({ selectedOrganizations: ["Google", "Amazon"] });
        });
    });
    describe("FILTER_JOBS_IN_STATE", () => {
        it("updates filtered jobs from api", () => {
            const state = { filteredJobs: [] };
            mutations.FILTER_JOBS_IN_STATE(state, ["job 1", "job 2"]);
            expect(state).toEqual({ filteredJobs: ["job 1", "job 2"] });
        });
    });
    describe("ADD_SELECTED_JOB_TYPES", () => {
        it("updates job types that the user selected", () => {
            const state = { selectedJobTypes: [] };
            mutations.ADD_SELECTED_JOB_TYPES(state, ["Full Time", "Part Time"]);
            expect(state).toEqual({ selectedJobTypes: ["Full Time", "Part Time"] });
        });
    });

});