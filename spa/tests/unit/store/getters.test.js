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
    describe("MAX_JOBS", () => {
        beforeEach(() => {
            filterJobs.mockResolvedValue([{
                id: 1,
                title: "Software Developer",
                organization: "Google"
            }]);
        });
        it("shows the length of the filtered jobs array", () => {
            const state = {
                jobs: [{
                        id: 1,
                        title: "Software Developer",
                        organization: "Google"
                    },
                    {
                        id: 2,
                        title: "Python Developer",
                        organization: "Microsoft"
                    }
                ],
                selectedOrganizations: ["Google"],
                filteredJobs: [{
                    id: 1,
                    title: "Software Developer",
                    organization: "Google"
                }],
            };

            const maxJobs = getters.MAX_JOBS(state);
            expect(maxJobs).toEqual(1);
        });
        it("shows the length of the jobs array", async() => {
            const state = {
                jobs: [{
                        id: 1,
                        title: "Software Developer",
                        organization: "Google"
                    },
                    {
                        id: 2,
                        title: "Python Developer",
                        organization: "Microsoft"
                    }
                ],
                selectedOrganizations: [],
                filteredJobs: [],
            };
            const maxJobs = getters.MAX_JOBS(state);
            expect(maxJobs).toEqual(2);
        });


    });

});