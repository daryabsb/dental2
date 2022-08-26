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
    describe("FILTER_JOBS", () => {

        beforeEach(() => {
            filterJobs.mockResolvedValue([{
                    id: 1,
                    title: "Software Developer",
                    organization: "Microsoft",
                    jobType: "Intern"
                },
                {
                    id: 2,
                    title: "Python Developer",
                    organization: "Google",
                    jobType: "Part-time"
                },
                {
                    id: 3,
                    title: "Vue Developer",
                    organization: "Amazon",
                    jobType: "Intern"
                },
                {
                    id: 4,
                    title: "Java Developer",
                    organization: "Microsoft",
                    jobType: "Part-time"
                },
            ]);
        });

        it("makes request to filter jobs", async() => {
            const commit = jest.fn();
            const dispatch = jest.fn();
            const context = {
                commit,
                dispatch,
                state: {
                    selectedOrganizations: ["Microsoft"],
                    selectedJobTypes: ["Intern"],
                },
            };
            const payload = "Microsoft,Intern";
            await filterJobs(payload);
            expect(filterJobs).toHaveBeenCalledWith("Microsoft,Intern")
        });
        // it("makes request to fetch jobs", () => {});
    });
});