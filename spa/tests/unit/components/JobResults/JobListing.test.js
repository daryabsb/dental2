import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";
import { RouterLink } from "vue-router";

describe("JobListing", () => {
    const createJobProps = (jobProps = {}) => ({
        title: "Vue Dev",
        organization: "McDonald",
        locations: ["Dallas", "California"],
        minimumQualifications: ["Coding", "Developing"],
        ...jobProps,
    });
    const createConfig = (jobProps) => ({
        props: {
            job: {
                ...jobProps,
            },
        },
        global: {
            stubs: {
                "router-link": RouterLinkStub,
            }
        }
    });
    it("renders job title", () => {
        const jobProps = createJobProps({ title: "Vue Dev" })

        const wrapper = mount(JobListing, createConfig(jobProps));
        expect(wrapper.text()).toMatch("Vue Dev");
    });
    it("renders job organization", () => {
        const jobProps = createJobProps({ organiation: "McDonald" })
        const wrapper = mount(JobListing, createConfig(jobProps));
        expect(wrapper.text()).toMatch("McDonald");
    });
    it("renders job locations", () => {
        const jobProps = createJobProps({
            locations: [
                { location: "Dallas" }, { location: "California" }
            ]
        })
        const wrapper = mount(JobListing, createConfig(jobProps));
        expect(wrapper.text()).toMatch("Dallas");
        expect(wrapper.text()).toMatch("California");
    });
    it("renders job qualifications", () => {
        const jobProps = createJobProps({
            minimumQualifications: [
                { qualification: "Coding" }, { qualification: "Developing" }
            ]
        })
        const wrapper = mount(JobListing, createConfig(jobProps));
        expect(wrapper.text()).toMatch("Coding");
        expect(wrapper.text()).toMatch("Developing");
    });
    it("links to individwal job's page", () => {
        const jobProps = createJobProps({ id: 15, })
        const wrapper = mount(JobListing, createConfig(jobProps));
        const jobPageLink = wrapper.findComponent(RouterLinkStub);
        const toProp = jobPageLink.props("to")
        expect(toProp).toBe("/jobs/results/15");
    });
});