import { shallowMount, flushPromises } from "@vue/test-utils";

const axios = require("axios");
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
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
        },
    });
    it("fetches jobs", () => {
        axios.get.mockResolvedValue({ data: [] });
        const $route = createRoute();
        shallowMount(JobListings, createConfig($route));
        expect(axios.get).toBeCalledWith("http://localhost:3000/jobs");
    });

    it("creates joblisting for a maximum 10 jobs", async () => {
        axios.get.mockResolvedValue({ data: Array(10).fill({}) });
        const $route = createRoute({ page: "1" });
        const wrapper = shallowMount(JobListings, createConfig($route));
        await flushPromises();
        const jobListings = wrapper.findAll("[data-test='job-listing']");
        expect(jobListings).toHaveLength(10);
    });
});