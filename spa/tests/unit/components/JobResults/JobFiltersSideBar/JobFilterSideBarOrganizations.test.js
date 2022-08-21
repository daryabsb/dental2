import { mount } from "@vue/test-utils";

import JobFiltersSideBarOrganizations
from "@/components/JobResults/JobFiltersSidebar/JobFilterSideBarOrganizations.vue"

describe("JobFiltersSideBarOrganizations", () => {
    it("renders unique list of organizations for filtering jobs", async() => {
        const $store = {
            getters: {
                UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
            },
        };
        const wrapper = mount(JobFiltersSideBarOrganizations, {
            global: {
                mocks: {
                    $store,
                },
                stubs: {
                    FontAwesomeIcon: true,
                },
            },
        });
        const clickableArea = wrapper.find("[data-test='clickable-area']")
        await clickableArea.trigger("click");
        const organizationLabels = wrapper.findAll("[data-test='organization']")
        const organizations = organizationLabels.map((node) => node.text());
        expect(organizations).toEqual(["Google", "Amazon"]);
    });
});