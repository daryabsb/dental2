import axios from "axios";
jest.mock("axios");

import filterJobs from "@/api/filterJobs";

describe("filterJobs", () => {
    // beforeEach(() => {
    axios.get.mockResolvedValue({
        data: [
            { "jobType": "Part-time", "organization": "Microsoft" },
            { "jobType": "Intern", "organization": "Amazon" }
        ]
    });
    // });
    describe("creates url based on given payload", () => {

        // it("returns base url", async() => {
        //     await filterJobs();
        //     expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs/");
        // });
        it("returns base url + payload", async() => {
            await filterJobs("Microsoft,Intern");
            expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs/?input=Microsoft,Intern");
        });
    });
    it("when payload is none, returned value will be empty", async() => {
        const data = await filterJobs("");
        console.log("CHECK DATA:_", data);
        expect(data).toEqual([]);
    });
    it("when payload is a string, returned value will be filtered", async() => {

        const payload = "Microsoft,Intern";
        const data = await filterJobs(payload);
        console.log("filterJobs response data", data)
        expect(data).toEqual([{
                organization: "Microsoft",
                jobType: "Part-time",
            },
            {
                organization: "Amazon",
                jobType: "Intern",
            }
        ]);
    });

});