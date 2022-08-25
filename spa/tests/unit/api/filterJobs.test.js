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
            await filterJobs({ organization: ["Google", "Microsoft"], jobType: ["Intern", "Part-time"] });
            expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs/?organization=Google,Microsoft&job-type=Intern,Part-time");
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