import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

jest.mock("vuex");
jest.mock("vue-router")

import JobListings from "@/components/JobResults/JobListings.vue";
// import { state, getters } from "@/store";

describe("JobListings", () => {
    useRoute.mockReturnValue({
        query: {
            page: "5",
        },
    });

    const createConfig = () => ({
        global: {

            stubs: {
                "router-link": RouterLinkStub,
            },
        },
    });
    describe("when the component mounts", () => {
        it("it makes call to fetch jobs from API", () => {
            const dispatch = jest.fn();
            useStore.mockReturnValue({

                getters: {
                    FILTERED_JOBS: [],
                },
                dispatch,
            })

            // const FILTERED_JOBS_BY_ORGANIZATIONS = jest.fn();

            shallowMount(JobListings, createConfig());
            expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
        });
    });


    it("creates joblisting for a maximum 10 jobs", async () => {
        useRoute.mockReturnValue({
            query: {
                page: "1"
            }
        });
        const numberOfJobsInStore = 15;
        useStore.mockReturnValue({
            getters: {
                FILTERED_JOBS: Array(numberOfJobsInStore).fill({}),
            },
        })
        const wrapper = shallowMount(JobListings, createConfig());
        await flushPromises();
        const jobListings = wrapper.findAll("[data-test='job-listing']");
        expect(jobListings).toHaveLength(10);
    });
    describe("when query params exclude page number", () => {
        it("displays page number 1", async () => {
            // axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            useRoute.mockReturnValue({
                query: {
                    page: undefined
                }
            });
            const wrapper = shallowMount(JobListings, createConfig());
            expect(wrapper.text()).toMatch("Page 1");
        });
    });
    describe("when query params include page number", () => {
        it("displays page number 3", async () => {
            // axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            useRoute.mockReturnValue({
                query: {
                    page: "3"
                }
            });
            const wrapper = shallowMount(JobListings, createConfig());
            expect(wrapper.text()).toMatch("Page 3");
        });
    });
    describe("when user is on first page of job results", () => {
        it("it doesn't show link to previous page", async () => {
            // axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            useRoute.mockReturnValue({
                query: {
                    page: "1"
                }
            });

            const wrapper = shallowMount(JobListings, createConfig());
            await flushPromises();
            const previousPage = wrapper.find("[data-test='previous-page-link']");
            expect(previousPage.exists()).toBe(false);
        });
        it("shows link to next page", async () => {
            useRoute.mockReturnValue({
                query: {
                    page: "1"
                }
            });
            useStore.mockReturnValue({
                getters: {
                    FILTERED_JOBS: Array(15).fill({}),
                }
            });
            const wrapper = shallowMount(JobListings, createConfig());
            await flushPromises();
            const nextPage = wrapper.find("[data-test='next-page-link']")
            expect(nextPage.exists()).toBe(true);
        });
    });
    describe("when user is on last page of job results", () => {
        it("it doesn't show link to next page", async () => {
            // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
            useRoute.mockReturnValue({
                query: {
                    page: "2"
                }
            });
            const numberOfJobsInStore = 15;
            useStore.mockReturnValue({
                state: {
                    jobs: Array(numberOfJobsInStore).fill({}),
                    maxJobs: numberOfJobsInStore,
                },
                getters: {
                    FILTERED_JOBS: Array(numberOfJobsInStore).fill({}),
                }
            });
            const wrapper = shallowMount(JobListings, createConfig());
            await flushPromises();
            const nextPage = wrapper.find("[data-test='next-page-link']");
            expect(nextPage.exists()).toBe(false);
        });
        it("shows link to previous page", async () => {
            useRoute.mockReturnValue({
                query: {
                    page: "2"
                }
            });
            const numberOfJobsInStore = 15;
            useStore.mockReturnValue({
                state: {
                    jobs: Array(numberOfJobsInStore).fill({}),
                },
                getters: {
                    FILTERED_JOBS: Array(numberOfJobsInStore).fill({}),
                }
            });

            const wrapper = shallowMount(JobListings, createConfig());
            await flushPromises();
            const previousPage = wrapper.find("[data-test='previous-page-link']")
            expect(previousPage.exists()).toBe(true);
        });
    });
});