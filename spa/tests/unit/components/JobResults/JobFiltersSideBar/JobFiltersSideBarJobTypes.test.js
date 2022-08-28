import { mount } from "@vue/test-utils";

import JobFiltersSideBarJobTypes
from "@/components/JobResults/JobFiltersSidebar/JobFiltersSideBarJobTypes";

describe("JobFiltersSideBarJobTypes", () => {
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
    it("renders unique list of job types for filtering jobs", async() => {
        const $store = {
            getters: {
                UNIQUE_JOB_TYPES: new Set(["Intern", "Part-time"]),
            },
        };
        const $router = { push: jest.fn() };
        const wrapper = mount(JobFiltersSideBarJobTypes, createConfig($store, $router));
        const clickableArea = wrapper.find("[data-test='clickable-area']")
        await clickableArea.trigger("click");
        const jobTypeLabels = wrapper.findAll("[data-test='job-type']")
        const jobTypes = jobTypeLabels.map((node) => node.text());
        expect(jobTypes).toEqual(["Intern", "Part-time"]);
    });
    describe("when user selects a checkbox", () => {
        it("it communicate that user has selected checkbox for job types", async() => {
            const commit = jest.fn();
            const $router = { push: jest.fn() };
            const $store = {
                getters: {
                    UNIQUE_JOB_TYPES: new Set(["Intern", "Part-time"]),
                },
                commit,
                dispatch: jest.fn(),

            };
            const wrapper = mount(JobFiltersSideBarJobTypes, createConfig($store, $router));
            const clickableArea = wrapper.find("[data-test='clickable-area']")
            await clickableArea.trigger("click");
            const InternInput = wrapper.find("[data-test='Intern']");
            await InternInput.setChecked();
            expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", ["Intern"]);
        });
        it("navigate user to job results page to see fresh", async() => {
            const push = jest.fn();
            const $router = { push, };
            const $store = {
                getters: {
                    UNIQUE_JOB_TYPES: new Set(["Intern", "Part-time"]),
                },
                commit: jest.fn(),
                dispatch: jest.fn(),
            };
            const wrapper = mount(
                JobFiltersSideBarJobTypes,
                createConfig($store, $router)
            );
            const clickableArea = wrapper.find("[data-test='clickable-area']")
            await clickableArea.trigger("click");
            const InternInput = wrapper.find("[data-test='Intern']");
            await InternInput.setChecked();
            expect(push).toHaveBeenCalledWith({ name: "jobResults" })
        });
    });
});