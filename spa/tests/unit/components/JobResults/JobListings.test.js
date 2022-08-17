import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

const axios = require("axios");
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: Array(10).fill({}) });

    });
    afterEach(() => {
        axios.get.mockReset();
    });
    const createRoute = (queryParams = {}) => ({
        query: {
            page: "5",
            ...queryParams,
        },
    });
    const createConfig = ($route) => ({
        global: {
            mocks: {
                $route,
            },
            stubs: {
                "router-link": RouterLinkStub,
            },
        },
    });
    it("fetches jobs", () => {
        // axios.get.mockResolvedValue({ data: [] });
        const $route = createRoute();
        shallowMount(JobListings, createConfig($route));
        expect(axios.get).toBeCalledWith("http://myfakeapi.com/jobs");
    });

    it("creates joblisting for a maximum 10 jobs", async () => {
        axios.get.mockResolvedValue({ data: Array(10).fill({}) });
        const $route = createRoute({ page: "1" });
        const wrapper = shallowMount(JobListings, createConfig($route));
        await flushPromises();
        const jobListings = wrapper.findAll("[data-test='job-listing']");
        expect(jobListings).toHaveLength(10);
    });
    describe("whhen query params exclude page number", () => {
        it("displays page number 1", async () => {
            // axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            const queryParams = { page: undefined };
            const $route = createRoute(queryParams);
            const wrapper = shallowMount(JobListings, createConfig($route));
            expect(wrapper.text()).toMatch("Page 1");
        });
    });
    describe("whhen query params include page number", () => {
        it("displays page number 3", async () => {
            // axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            const queryParams = { page: "3" };
            const $route = createRoute(queryParams);
            const wrapper = shallowMount(JobListings, createConfig($route));
            expect(wrapper.text()).toMatch("Page 3");
        });
    });
    describe("when user is on first page of job results", () => {
        it("it doesn't show link to previous page", async () => {
            axios.get.mockResolvedValue({ data: Array(10).fill({}) });
            const queryParams = { page: "1" };
            const $route = createRoute(queryParams);
            const wrapper = shallowMount(JobListings, createConfig($route));
            await flushPromises();
            const previousPage = wrapper.find("[data-test='previous-page-link']");
            expect(previousPage.exists()).toBe(false);
        });
        it("shows link to next page", async () => {
            axios.get.mockResolvedValue({ data: Array(15).fill({}) });
            const queryParams = { page: "1" };
            const $route = createRoute(queryParams);
            const wrapper = shallowMount(JobListings, createConfig($route));
            await flushPromises();
            const nextPage = wrapper.find("[data-test='next-page-link']")
            expect(nextPage.exists()).toBe(true);
        });
    });
    describe("when user is on last page of job results", () => {
        it("it doesn't show link to next page", async () => {
            axios.get.mockResolvedValue({ data: Array(15).fill({}) });
            const queryParams = { page: "2" };
            const $route = createRoute(queryParams);
            const wrapper = shallowMount(JobListings, createConfig($route));
            await flushPromises();
            const nextPage = wrapper.find("[data-test='next-page-link']");
            expect(nextPage.exists()).toBe(false);
        });
        it("shows link to previous page", async () => {
            axios.get.mockResolvedValue({ data: Array(15).fill({}) });
            const queryParams = { page: "2" };
            const $route = createRoute(queryParams);
            const wrapper = shallowMount(JobListings, createConfig($route));
            await flushPromises();
            const previousPage = wrapper.find("[data-test='previous-page-link']")
            expect(previousPage.exists()).toBe(true);
        });
    });
});