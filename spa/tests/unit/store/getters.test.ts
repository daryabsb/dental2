import getters from "@/store/getters";
import { createJob, createState } from "./utils";

jest.mock("@/api/filterJobs");

describe("getters", () => {
    describe("UNIQUE_ORGANIZATIONS", () => {
        it("finds unique organization from jobs", async () => {
            const jobs = [
                createJob({ organization: "Google" }),
                createJob({ organization: "Amazon" }),
                createJob({ organization: "Google" }),
            ];
            const state = createState({ jobs });
            const result = getters.UNIQUE_ORGANIZATIONS(state);
            expect(result).toEqual(new Set(["Google", "Amazon"]));
        });
    });
    describe("UNIQUE_JOB_TYPES", () => {
        it("finds unique job types from jobs", async () => {
            const jobs = [
                createJob({ jobType: "Intern" }),
                createJob({ jobType: "Part-time" }),
                createJob({ jobType: "Intern" }),
            ];
            const state = createState({ jobs });
            const result = getters.UNIQUE_JOB_TYPES(state);
            expect(result).toEqual(new Set(["Intern", "Part-time"]));
        });
    });

    describe("FILTERED_JOB", () => {
        it("filters jobs by organization and job type", () => {
            const state = createState({
                selectedOrganizations: ["Google"],
                selectedJobTypes: ["Intern"],
                filteredJobs: [
                    createJob({ organization: "Google", jobType: "Part-time" }),
                    createJob({ organization: "Microsoft", jobType: "Intern" }),
                ],
            });
            const result = getters.FILTERED_JOBS(state);
            expect(result).toEqual([
                createJob({ organization: "Google", jobType: "Part-time" }),
                createJob({ organization: "Microsoft", jobType: "Intern" }),
            ]);
        });
        it("filters jobs by job type", () => {
            const state = createState({
                selectedJobTypes: ["Intern"],
                filteredJobs: [
                    createJob({ organization: "Microsoft", jobType: "Intern" }),
                ],
            });
            const result = getters.FILTERED_JOBS(state);
            expect(result).toEqual([
                createJob({ organization: "Microsoft", jobType: "Intern" }),
            ]);
        });
        it("filters jobs by organization", () => {
            const state = createState({
                selectedOrganizations: ["Google"],
                filteredJobs: [
                    createJob({ organization: "Google", jobType: "Part-time" }),
                ],
            });
            const result = getters.FILTERED_JOBS(state);
            expect(result).toEqual([
                createJob({ organization: "Google", jobType: "Part-time" }),
            ]);
        });
        it("when user does not select organization nor job type, returns all jobs", () => {
            const state = createState({
                jobs: [createJob({ organization: "Google", jobType: "Part-time" })],
                selectedOrganizations: [],
                selectedJobTypes: [],
                filteredJobs: [],
            });
            const result = getters.FILTERED_JOBS(state);
            expect(result).toEqual([
                createJob({ organization: "Google", jobType: "Part-time" }),
            ]);
        });
    });
});
