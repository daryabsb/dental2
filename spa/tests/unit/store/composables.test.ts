import { useStore } from "vuex";
jest.mock("vuex");

import { useFetchJobsDispatch, useFilteredJobs, useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";

const useStoreMock = useStore as jest.Mock;

describe("composables", () => {

    describe("useFilteredJobs", () => {
        it("retreives filtered jobs from store", () => {
            useStoreMock.mockReturnValue({
                getters: {
                    FILTERED_JOBS: [{ id: 1 }]
                }
            });
            const result = useFilteredJobs();
            expect(result.value).toEqual([{ id: 1 }]);
        });
    });
    describe("useUniqueJobTypes", () => {
        it("retreives unique job types from store", () => {
            useStoreMock.mockReturnValue({
                getters: {
                    UNIQUE_JOB_TYPES: new Set(["Intern"]),
                },
            });
            const result = useUniqueJobTypes();
            expect(result.value).toEqual(new Set(["Intern"]));
        });
    });
    describe("useUniqueOrganizations", () => {
        it("retreives unique organizations from store", () => {
            useStoreMock.mockReturnValue({
                getters: {
                    UNIQUE_ORGANIZATIONS: new Set(["Google"]),
                },
            });
            const result = useUniqueOrganizations();
            expect(result.value).toEqual(new Set(["Google"]));
        });
    });
    describe("useFetchJobsDispatch", () => {
        it("sends call to fetch jobs from API", () => {
            const dispatch = jest.fn();
            useStoreMock.mockReturnValue({
                dispatch,
            });
            useFetchJobsDispatch();
            expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
        });
    });
});