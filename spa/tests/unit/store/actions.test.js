import actions from "@/store/actions";

import getJobs from "@/api/getJobs";
import filterJobs from "@/api/filterJobs";
jest.mock("@/api/getJobs");
jest.mock("@/api/filterJobs");


describe("actions", () => {
    describe("FETCH_JOBS", () => {

        beforeEach(() => {
            getJobs.mockResolvedValue([{
                id: 1,
                title: "Software Developer",
                organization: "Google",
                jobType: "Intern"
            }]);
        });

        it("makes request to fetch jobs", async () => {
            const context = { commit: jest.fn() };
            await actions.FETCH_JOBS(context);
            expect(getJobs).toHaveBeenCalled()
        });

    });
    describe("FILTER_JOBS", () => {

        beforeEach(() => {
            filterJobs.mockResolvedValue([{
                id: 1,
                title: "Software Developer",
                organization: "Microsoft",
                jobType: "Full-time"
            },
            {
                id: 2,
                title: "Python Developer",
                organization: "Google",
                jobType: "Part-time"
            },

            ]);
        });
        it("makes request to filter jobs", async () => {
            const context = {
                state: {
                    selectedOrganizations: ["Google"],
                    selectedJobTypes: ["Full-time"],
                },
                dispatch: jest.fn(),
                commit: jest.fn(),
            };

            // const payload = ["Google,Full-time"];
            await actions.FILTER_JOBS(context);
            // await filterJobs(payload);
            expect(filterJobs).toHaveBeenCalledWith("Google,Full-time")
        });
        it("makes request to fetch jobs", async () => {

            const commit = jest.fn()
            const context = {
                state: {
                    selectedOrganizations: ["Google"],
                    selectedJobTypes: ["Full-time"],
                },
                commit,
            };
            await actions.FILTER_JOBS(context);
            expect(commit).toHaveBeenCalled()
        });
        it("commits filtered job to state", async () => {
            const commit = jest.fn()
            const context = {
                state: {
                    selectedOrganizations: ["Google"],
                    selectedJobTypes: ["Full-time"],
                },
                dispatch: jest.fn(),
                commit,
            };

            // const payload = ["Google,Full-time"];
            const result = await filterJobs(context);
            // await filterJobs(payload);
            expect(result).toEqual([{
                id: 1,
                title: "Software Developer",
                organization: "Microsoft",
                jobType: "Full-time"
            },
            {
                id: 2,
                title: "Python Developer",
                organization: "Google",
                jobType: "Part-time"
            },

            ])
        });

    });
});