import { state, mutations, actions, getters } from "@/store";
import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");

describe("state", () => {
    it("keeps track wether user is logged in", () => {
        const startingState = state();
        expect(startingState.isLoggedIn).toBe(false);
    });
    it("stores jobListings", () => {
        const startingState = state();
        expect(startingState.jobs).toEqual([]);
    });
});
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

});

describe("actions", () => {
    describe("FETCH_JOBS", () => {

        beforeEach(() => {
            getJobs.mockResolvedValue([{
                id: 1,
                title: "Software Developer"
            }]);
        });

        it("makes request to fetch jobs", async() => {
            const context = { commit: jest.fn() };
            await actions.FETCH_JOBS(context);
            expect(getJobs).toHaveBeenCalled()
        });
        // it("makes request to fetch jobs", () => {});
    });
});

describe("getters", () => {
    describe("UNIQUE_ORGANIZATIONS", () => {
        it("finds unique organization from jobs", async() => {
            const state = {
                jobs: [
                    { organization: "Google" },
                    { organization: "Amazon" },
                    { organization: "Google" },
                ]
            };
            const result = getters.UNIQUE_ORGANIZATIONS(state);
            expect(result).toEqual(new Set(["Google", "Amazon"]));

        });

    });
});