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
            }]);
        });

        it("makes request to filter jobs", async() => {
            const context = { commit: jest.fn() };
            const organization = "Microsoft";
            await actions.FILTER_JOBS(context, organization);
            expect(filterJobs).toHaveBeenCalledWith([organization])
        });
        // it("makes request to fetch jobs", () => {});
    });
});