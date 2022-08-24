import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";
// import { state, getters } from "@/store";

describe("JobListings", () => {
    const createRoute = (queryParams = {}) => ({
        query: {
            page: "5",
            ...queryParams,
        },
    });
    const createStore = (config = {}) => ({

        getters: {
            MAX_JOBS: 15,
            FILTERED_JOBS_BY_ORGANIZATIONS: [],

        },
        dispatch: jest.fn(),
        ...config,
    })
    const createConfig = ($route, $store) => ({
        global: {
            mocks: {
                $route,
                $store,
            },
            stubs: {
                "router-link": RouterLinkStub,
            },
        },
    });
    describe("when the component mounts", () => {
        it("it makes call to fetch jobs from API", () => {
            const $route = createRoute();
            const dispatch = jest.fn();
            // const FILTERED_JOBS_BY_ORGANIZATIONS = jest.fn();
            const $store = createStore({
                dispatch,
            });
            shallowMount(JobListings, createConfig($route, $store));
            expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
        });
    });
    // it("fetches jobs", () => {
    //     // axios.get.mockResolvedValue({ data: [] });
    //     const $route = createRoute();
    //     shallowMount(JobListings, createConfig($route));
    //     expect(axios.get).toBeCalledWith("http://myfakeapi.com/jobs/");
    // });

    it("creates joblisting for a maximum 10 jobs", async() => {
        const $route = createRoute({ page: "1" });
        const numberOfJobsInStore = 15;
        const $store = createStore({
            getters: {
                MAX_JOBS: numberOfJobsInStore,
                FILTERED_JOBS_BY_ORGANIZATIONS: Array(numberOfJobsInStore).fill({}),
            },
        })
        const wrapper = shallowMount(JobListings, createConfig($route, $store));
        await flushPromises();
        const jobListings = wrapper.findAll("[data-test='job-listing']");
        expect(jobListings).toHaveLength(10);
    });
    describe("whhen query params exclude page number", () => {
        it("displays page number 1", async() => {
            // axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            const queryParams = { page: undefined };
            const $route = createRoute(queryParams);
            const $store = createStore()
            const wrapper = shallowMount(JobListings, createConfig($route, $store));
            expect(wrapper.text()).toMatch("Page 1");
        });
    });
    describe("when query params include page number", () => {
        it("displays page number 3", async() => {
            // axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            const queryParams = { page: "3" };
            const $route = createRoute(queryParams);
            const $store = createStore()
            const wrapper = shallowMount(JobListings, createConfig($route, $store));
            expect(wrapper.text()).toMatch("Page 3");
        });
    });
    describe("when user is on first page of job results", () => {
        it("it doesn't show link to previous page", async() => {
            // axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            const queryParams = { page: "1" };
            const $route = createRoute(queryParams);
            const $store = createStore()
            const wrapper = shallowMount(JobListings, createConfig($route, $store));
            await flushPromises();
            const previousPage = wrapper.find("[data-test='previous-page-link']");
            expect(previousPage.exists()).toBe(false);
        });
        it("shows link to next page", async() => {
            const queryParams = { page: "1" };
            const $route = createRoute(queryParams);
            const $store = createStore({
                getters: {
                    FILTERED_JOBS_BY_ORGANIZATIONS: Array(15).fill({}),
                }
            });
            const wrapper = shallowMount(JobListings, createConfig($route, $store));
            await flushPromises();
            const nextPage = wrapper.find("[data-test='next-page-link']")
            expect(nextPage.exists()).toBe(true);
        });
    });
    describe("when user is on last page of job results", () => {
        it("it doesn't show link to next page", async() => {
            // axios.get.mockResolvedValue({ data: Array(15).fill({}) });
            const queryParams = { page: "2" };
            const $route = createRoute(queryParams);
            const numberOfJobsInStore = 15;
            const $store = createStore({
                state: {
                    jobs: Array(numberOfJobsInStore).fill({}),
                    maxJobs: numberOfJobsInStore,
                }
            });
            const wrapper = shallowMount(JobListings, createConfig($route, $store));
            await flushPromises();
            const nextPage = wrapper.find("[data-test='next-page-link']");
            expect(nextPage.exists()).toBe(false);
        });
        it("shows link to previous page", async() => {
            const queryParams = { page: "2" };
            const $route = createRoute(queryParams);
            const numberOfJobsInStore = 15;
            const $store = createStore({
                state: {
                    jobs: Array(numberOfJobsInStore).fill({}),
                },
                getters: {
                    MAX_JOBS: numberOfJobsInStore,
                    FILTERED_JOBS_BY_ORGANIZATIONS: Array(numberOfJobsInStore).fill({}),
                }
            });
            const wrapper = shallowMount(JobListings, createConfig($route, $store));
            await flushPromises();
            const previousPage = wrapper.find("[data-test='previous-page-link']")
            expect(previousPage.exists()).toBe(true);
        });
    });
});