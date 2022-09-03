import { shallowMount } from "@vue/test-utils";

import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables")

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue"
import { DefineComponent } from "vue";

describe("JobFiltersSideBar", () => {
    it("allows user to filter jobs by job types", () => {
        useUniqueJobTypesMock.mockReturnValue(
            new Set(["Full-time", "Intern"])
        )
        useUniqueOrganizationsMock.mockReturnValue(
            new Set(["AirBnB"])
        )
        const wrapper = shallowMount(JobFiltersSidebar)
        const jobTypesFilter = wrapper.findComponent<DefineComponent>("[data-test='job-types-filter'");
        const { header, uniqueValues, mutation } = jobTypesFilter.props();
        expect(header).toBe("Job Types");
        expect(uniqueValues).toEqual(new Set(["Full-time", "Intern"]));
        expect(mutation).toBe("ADD_SELECTED_JOB_TYPES")
    });

    it("allows user to filter jobs by organizations", () => {
        useUniqueJobTypesMock.mockReturnValue(
            new Set(["Full-time", "Intern"])
        )
        useUniqueOrganizationsMock.mockReturnValue(
            new Set(["AirBnB"])
        )
        const wrapper = shallowMount(JobFiltersSidebar)
        const organizationsFilter = wrapper.findComponent<DefineComponent>("[data-test='organizations-filter'");
        const { header, uniqueValues, mutation } = organizationsFilter.props();
        expect(header).toBe("Organizations");
        expect(uniqueValues).toEqual(new Set(["AirBnB"]));
        expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS")
    });
});