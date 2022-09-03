import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";
import { Job } from "@/api/types";
import { createJob } from "../../store/utils";

describe("JobListing", () => {
    const createConfig = (job: Job) => ({
        props: {
            job: {
                ...job,
            },
        },
        global: {
            stubs: {
                "router-link": RouterLinkStub,
            }
        }
    });
    it("renders job title", () => {
        const job = createJob({ title: "Vue Dev" })

        const wrapper = mount(JobListing, createConfig(job));
        expect(wrapper.text()).toMatch("Vue Dev");
    });
    it("renders job organization", () => {
        const job = createJob({ organization: "McDonald" })
        const wrapper = mount(JobListing, createConfig(job));
        expect(wrapper.text()).toMatch("McDonald");
    });
    it("renders job locations", () => {
        const job = createJob({
            locations: [
                "Dallas", "California"
            ]
        })
        const wrapper = mount(JobListing, createConfig(job));
        expect(wrapper.text()).toMatch("Dallas");
        expect(wrapper.text()).toMatch("California");
    });
    it("renders job qualifications", () => {
        const job = createJob({
            minimumQualifications: [
                "Coding", "Developing"
            ]
        })
        const wrapper = mount(JobListing, createConfig(job));
        expect(wrapper.text()).toMatch("Coding");
        expect(wrapper.text()).toMatch("Developing");
    });
    it("links to individwal job's page", () => {
        const job = createJob({ id: 15, })
        const wrapper = mount(JobListing, createConfig(job));
        const jobPageLink = wrapper.findComponent(RouterLinkStub);
        const toProp = jobPageLink.props("to")
        expect(toProp).toBe("/jobs/results/15");
    });
});