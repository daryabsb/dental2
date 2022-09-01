import state from "@/store/state";


describe("state", () => {
    it("keeps track wether user is logged in", () => {
        const startingState = state();
        expect(startingState.isLoggedIn).toBe(false);
    });
    it("stores jobListings", () => {
        const startingState = state();
        expect(startingState.jobs).toEqual([]);
    });

    it("store organization that user likes to filter jobs", () => {
        const startingState = state();
        expect(startingState.selectedOrganizations).toEqual([]);
    });
    it("store job types that user likes to filter jobs", () => {
        const startingState = state();
        expect(startingState.selectedJobTypes).toEqual([]);
    });
});