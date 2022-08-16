import { shallowMount, flushPromises } from "@vue/test-utils";

const axios = require("axios");
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
    it("fetches jobs", () => {
        axios.get.mockResolvedValue({ data: [] });
        shallowMount(JobListings);
        expect(axios.get).toBeCalledWith("http://localhost:3000/jobs");
    });

    it("creates joblisting for a maximum 10 jobs", async() => {
        axios.get.mockResolvedValue({ data: Array(10).fill({}) });
        const wrapper = shallowMount(JobListings);
        await flushPromises();
        const jobListings = wrapper.findAll("[data-test='job-listing']");
        expect(jobListings).toHaveLength(10);
    });
});