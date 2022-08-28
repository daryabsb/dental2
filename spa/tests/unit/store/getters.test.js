import getters from "@/store/getters";

import filterJobs from "@/api/filterJobs";

jest.mock("@/api/filterJobs");

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
    describe("UNIQUE_JOB_TYPES", () => {
        it("finds unique job types from jobs", async() => {
            const state = {
                jobs: [
                    { jobType: "Intern" },
                    { jobType: "Part-time" },
                    { jobType: "Intern" },
                ]
            };
            const result = getters.UNIQUE_JOB_TYPES(state);
            expect(result).toEqual(new Set(["Intern", "Part-time"]));

        });

    });
    describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
        beforeEach(() => {
            filterJobs.mockResolvedValue([{
                id: 1,
                title: "Software Developer",
                organization: "Google"
            }]);
        });
        it("identifies jobs that are associated with given organizations", () => {

            const state = {
                jobs: [
                    { organization: "Google" },
                    { organization: "Amazon" },
                    { organization: "Microsoft" },
                ],
                selectedOrganizations: ["Google"],
                filteredJobs: [{
                    id: 1,
                    title: "Software Developer",
                    organization: "Google"
                }],
            };
            const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state)
            expect(filteredJobs).toEqual(
                [{
                    id: 1,
                    title: "Software Developer",
                    organization: "Google"
                }]
            );
        });
    });
    describe("when user did not select any organizations", () => {
        it("should return all the jobs", () => {
            const state = {
                jobs: [
                    { organization: "Google" },
                    { organization: "Amazon" },
                    { organization: "Microsoft" },
                ],
                selectedOrganizations: [],
            };
            const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state)
            expect(filteredJobs).toEqual([
                { organization: "Google" },
                { organization: "Amazon" },
                { organization: "Microsoft" },
            ]);
        })
    });
    describe("when user did not select any job types", () => {
        it("should return all the jobs", () => {
            const state = {
                jobs: [
                    { jobType: "Intern" },
                    { jobType: "Part-time" },
                    { jobType: "Temporary" },
                ],
                selectedJobTypes: [],
            };
            const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state)
            expect(filteredJobs).toEqual([
                { jobType: "Intern" },
                { jobType: "Part-time" },
                { jobType: "Temporary" },
            ]);
        });
    });
    describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
        describe("when user has not selected any organizations", () => {
            it("includes job", () => {
                const state = {
                    selectedOrganizations: [],
                };
                const job = { organization: "Google" };
                const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
                expect(includeJob).toBe(true);
            });
            it("identifies if job is associated with given organization", () => {
                const state = {
                    selectedOrganizations: ["Google", "Microsoft"],
                };
                const job = { organization: "Google" };
                const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
                expect(includeJob).toBe(true);
            });
        });
    });
    describe("INCLUDE_JOB_BY_JOB_TYPES", () => {
        describe("when user has not selected any job type", () => {
            it("includes job", () => {
                const state = {
                    selectedJobTypes: [],
                };
                const job = { jobType: "Intern" };
                const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
                expect(includeJob).toBe(true);
            });
            it("identifies if job is associated with given job types", () => {
                const state = {
                    selectedJobTypes: ["Intern", "Part-time"],
                };
                const job = { jobType: "Intern" };
                const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
                expect(includeJob).toBe(true);
            });
        });
    });
    describe("FILTERED_JOB", () => {
        it("filters jobs by organization and job type", () => {
            const state = {
                jobs: [
                    { organization: "Google", jobType: "Part-time" },
                    { organization: "Microsoft", jobType: "Intern" },
                    { organization: "Amazon", jobType: "Full-time" },
                ],
                selectedOrganizations: ["Google"],
                selectedJobTypes: ["Intern"],
                filteredJobs: [
                    { organization: "Google", jobType: "Part-time" },
                    { organization: "Microsoft", jobType: "Intern" },
                ],
            }
            const result = getters.FILTERED_JOBS(state);
            expect(result).toEqual([
                { organization: "Google", jobType: "Part-time" },
                { organization: "Microsoft", jobType: "Intern" },
            ]);
        });
        it("filters jobs by job type", () => {
            const state = {
                jobs: [
                    { organization: "Google", jobType: "Part-time" },
                    { organization: "Microsoft", jobType: "Intern" },
                    { organization: "Amazon", jobType: "Full-time" },
                ],
                selectedOrganizations: [],
                selectedJobTypes: ["Intern"],
                filteredJobs: [
                    { organization: "Microsoft", jobType: "Intern" },
                ],
            }
            const result = getters.FILTERED_JOBS(state);
            expect(result).toEqual([
                { organization: "Microsoft", jobType: "Intern" },
            ]);
        });
        it("filters jobs by organization", () => {
            const state = {
                jobs: [
                    { organization: "Google", jobType: "Part-time" },
                    { organization: "Microsoft", jobType: "Intern" },
                    { organization: "Amazon", jobType: "Full-time" },
                ],
                selectedOrganizations: ["Google"],
                selectedJobTypes: [],
                filteredJobs: [
                    { organization: "Google", jobType: "Part-time" },
                ],
            }
            const result = getters.FILTERED_JOBS(state);
            expect(result).toEqual([
                { organization: "Google", jobType: "Part-time" },
            ]);
        });
        it("when user does not select organization nor job type, returns all jobs", () => {
            const state = {
                jobs: [
                    { organization: "Google", jobType: "Part-time" },
                    { organization: "Microsoft", jobType: "Intern" },
                    { organization: "Amazon", jobType: "Full-time" },
                ],
                selectedOrganizations: [],
                selectedJobTypes: [],
                filteredJobs: [],
            }
            const result = getters.FILTERED_JOBS(state);
            expect(result).toEqual([
                { organization: "Google", jobType: "Part-time" },
                { organization: "Microsoft", jobType: "Intern" },
                { organization: "Amazon", jobType: "Full-time" },
            ]);
        });
    });
});


// describe("FILTERED_JOBS_BY_JOB_TYPES", () => {
//     beforeEach(() => {
//         filterJobs.mockResolvedValue([{
//                 id: 1,
//                 title: "Python Developer",
//                 jobType: "Intern"
//             },
//             {
//                 id: 2,
//                 title: "Python Developer",
//                 jobType: "Temporary"
//             }
//         ]);
//     });
// it("identifies jobs that are associated with given job types", () => {

//     const state = {
//         jobs: [
//             { jobType: "Intern" },
//             { jobType: "Part-time" },
//             { jobType: "Temporary" },
//         ],
//         selectedJobTypes: ["Intern", "Temporary"],
//     };
//     const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state)
//     expect(filteredJobs).toEqual([{
//             jobType: "Intern"
//         },
//         {
//             jobType: "Temporary"
//         }
//     ]);
// });
// });