import axios from "axios";
jest.mock("axios");

import filterJobs from "@/api/filterJobs";

describe("filterJobs", () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: [{
                    id: 1,
                    title: "Java Engineer",
                    organization: "Microsoft",
                },

            ],
        })
    });
    describe("creates url based on given payload", () => {
        it("returns base url", async() => {
            await filterJobs();
            expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs/");
        });
        it("returns base url + payload", async() => {
            await filterJobs("google");
            expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs/?organization=google");
        });
    });
    it("extract jobs from response", async() => {
        const data = await filterJobs("Microsoft");
        expect(data).toEqual([{
            id: 1,
            title: "Java Engineer",
            organization: "Microsoft",
        }]);
    });

});