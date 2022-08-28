import { mount } from "@vue/test-utils";

import JobFiltersSideBarOrganizations
from "@/components/JobResults/JobFiltersSidebar/JobFilterSideBarOrganizations.vue"

describe("JobFiltersSideBarOrganizations", () => {
    const createConfig = ($store, $router) => ({
        global: {
            mocks: {
                $store,
                $router,
            },
            stubs: {
                FontAwesomeIcon: true,
            },
        }
    });
    it("renders unique list of organizations for filtering jobs", async() => {
        const $router = { push: jest.fn() };
        const $store = {
            getters: {
                UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
            },
        };
        const wrapper = mount(JobFiltersSideBarOrganizations, createConfig($store, $router));
        const clickableArea = wrapper.find("[data-test='clickable-area']")
        await clickableArea.trigger("click");
        const organizationLabels = wrapper.findAll("[data-test='organization']")
        const organizations = organizationLabels.map((node) => node.text());
        expect(organizations).toEqual(["Google", "Amazon"]);
    });
    describe("when user selects a checkbox", () => {
        it("it communicate that user has selected checkbox for organization", async() => {
            const commit = jest.fn();
            const $router = { push: jest.fn() };
            const $store = {
                getters: {
                    UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
                },
                commit,
                dispatch: jest.fn(),

            };
            const wrapper = mount(JobFiltersSideBarOrganizations, createConfig($store, $router));
            const clickableArea = wrapper.find("[data-test='clickable-area']")
            await clickableArea.trigger("click");
            const googleInput = wrapper.find("[data-test='Google']");
            await googleInput.setChecked();
            expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", ["Google"]);
        });
        it("navigate user to job results page to see fresh", async() => {

            const $store = {
                getters: {
                    UNIQUE_ORGANIZATIONS: new Set(["Google", "Microsoft"]),
                },
                commit: jest.fn(),
                dispatch: jest.fn(),
            };
            const push = jest.fn();
            const $router = { push, };
            const wrapper = mount(
                JobFiltersSideBarOrganizations,
                createConfig($store, $router)
            );
            const clickableArea = wrapper.find("[data-test='clickable-area']")
            await clickableArea.trigger("click");
            const googleInput = wrapper.find("[data-test='Google']");
            await googleInput.setChecked();
            expect(push).toHaveBeenCalledWith({ name: "jobResults" })
        });
    });
});