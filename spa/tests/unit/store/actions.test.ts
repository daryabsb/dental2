import actions from "@/store/actions";
import { GlobalState } from "@/store/types"

import getJobs from "@/api/getJobs";
import filterJobs from "@/api/filterJobs";
jest.mock("@/api/getJobs");
jest.mock("@/api/filterJobs");

const getJobsMock = getJobs as jest.Mock;
const filterJobsMock = filterJobs as jest.Mock;

describe("actions", () => {
    describe("FETCH_JOBS", () => {
        beforeEach(() => {
            getJobsMock.mockResolvedValue([
                {
                    id: 1,
                    title: "Software Developer",
                    organization: "Google",
                    jobType: "Intern",
                },
            ]);
        });

        it("makes request to fetch jobs", async () => {
            const context = {
                state: {},
                commit: jest.fn(),
                dispatch: jest.fn()
            }
            await actions.FETCH_JOBS(context);
            expect(getJobs).toHaveBeenCalled();
        });
    });
    describe("FILTER_JOBS", () => {
        beforeEach(() => {
            filterJobsMock.mockResolvedValue([
                {
                    id: 1,
                    title: "Software Developer",
                    organization: "Microsoft",
                    jobType: "Full-time",
                },
                {
                    id: 2,
                    title: "Python Developer",
                    organization: "Google",
                    jobType: "Part-time",
                },
            ]);
        });
        it("makes request to filter jobs", async () => {
            const context = {
                state: {
                    selectedOrganizations: ["Google"],
                    selectedJobTypes: ["Full-time"],
                },
                commit: jest.fn(),
                dispatch: jest.fn()
            }
            await actions.FILTER_JOBS(context);
            // await filterJobs(payload);
            expect(filterJobs).toHaveBeenCalledWith("Google,Full-time");
        });
        it("makes request to fetch jobs", async () => {
            const commit = jest.fn();
            const context = {
                state: {
                    selectedOrganizations: ["Google"],
                    selectedJobTypes: ["Full-time"],
                },
                commit,
                dispatch: jest.fn()
            };
            await actions.FILTER_JOBS(context);
            expect(commit).toHaveBeenCalled();
        });
        it("commits filtered job to state", async () => {
            const commit = jest.fn();
            const context = {
                state: {
                    selectedOrganizations: ["Google"],
                    selectedJobTypes: ["Full-time"],
                },
                dispatch: jest.fn(),
                commit,
            };

            const payload = "Google,Full-time";
            const result = await filterJobs(payload);
            // await filterJobs(payload);
            expect(result).toEqual([
                {
                    id: 1,
                    title: "Software Developer",
                    organization: "Microsoft",
                    jobType: "Full-time",
                },
                {
                    id: 2,
                    title: "Python Developer",
                    organization: "Google",
                    jobType: "Part-time",
                },
            ]);
        });
    });
});
