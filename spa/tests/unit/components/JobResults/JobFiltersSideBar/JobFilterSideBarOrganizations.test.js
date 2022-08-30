import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables")

import JobFiltersSideBarOrganizations
from "@/components/JobResults/JobFiltersSidebar/JobFilterSideBarOrganizations.vue"

describe("JobFiltersSideBarOrganizations", () => {
    const createConfig = () => ({
        global: {
            stubs: {
                FontAwesomeIcon: true,
            },
        }
    });
    it("renders unique list of organizations for filtering jobs", async() => {
        useUniqueOrganizations.mockReturnValue(
            new Set(["Google", "Amazon"])
        )
        const wrapper = mount(JobFiltersSideBarOrganizations, createConfig());
        const clickableArea = wrapper.find("[data-test='clickable-area']")
        await clickableArea.trigger("click");
        const organizationLabels = wrapper.findAll("[data-test='organization']")
        const organizations = organizationLabels.map((node) => node.text());
        expect(organizations).toEqual(["Google", "Amazon"]);
    });
    describe("when user selects a checkbox", () => {
        it("it communicate that user has selected checkbox for organization", async() => {
            const commit = jest.fn();
            const dispatch = jest.fn();
            useStore.mockReturnValue({
                commit,
                dispatch,
            });
            useRouter.mockReturnValue({
                push: jest.fn()
            });
            useUniqueOrganizations.mockReturnValue(
                new Set(["Google", "Amazon"]),
            )

            const wrapper = mount(JobFiltersSideBarOrganizations, createConfig());
            const clickableArea = wrapper.find("[data-test='clickable-area']")
            await clickableArea.trigger("click");
            const googleInput = wrapper.find("[data-test='Google']");
            await googleInput.setChecked();
            expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", ["Google"]);
        });
        it("navigate user to job results page to see fresh", async() => {

            const push = jest.fn();
            useUniqueOrganizations.mockReturnValue(
                new Set(["Google", "Microsoft"]),
            );
            useStore.mockReturnValue({
                commit: jest.fn(),
                dispatch: jest.fn(),
            });
            useRouter.mockReturnValue({ push, })
            const wrapper = mount(
                JobFiltersSideBarOrganizations,
                createConfig()
            );
            const clickableArea = wrapper.find("[data-test='clickable-area']")
            await clickableArea.trigger("click");
            const googleInput = wrapper.find("[data-test='Google']");
            await googleInput.setChecked();
            expect(push).toHaveBeenCalledWith({ name: "jobResults" })
        });
    });
});