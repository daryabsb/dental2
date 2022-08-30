import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");

import JobFiltersSideBarJobTypes
from "@/components/JobResults/JobFiltersSidebar/JobFiltersSideBarJobTypes";

describe("JobFiltersSideBarJobTypes", () => {
    const createConfig = () => ({
        global: {
            stubs: {
                FontAwesomeIcon: true,
            },
        }
    });
    it("renders unique list of job types for filtering jobs", async() => {
        useUniqueJobTypes.mockReturnValue(
                new Set(["Intern", "Part-time"])
            )
            // useRouter.mockReturnedValue({push:jest.fn()});
        const wrapper = mount(JobFiltersSideBarJobTypes, createConfig());
        const clickableArea = wrapper.find("[data-test='clickable-area']")
        await clickableArea.trigger("click");
        const jobTypeLabels = wrapper.findAll("[data-test='job-type']")
        const jobTypes = jobTypeLabels.map((node) => node.text());
        expect(jobTypes).toEqual(["Intern", "Part-time"]);
    });
    describe("when user selects a checkbox", () => {
        it("it communicate that user has selected checkbox for job types", async() => {
            const commit = jest.fn();
            const dispatch = jest.fn();
            useStore.mockReturnValue({
                commit,
                dispatch,
            });
            useRouter.mockReturnValue({ push: jest.fn() });
            useUniqueJobTypes.mockReturnValue(
                new Set(["Intern", "Part-time"])
            );
            const wrapper = mount(JobFiltersSideBarJobTypes, createConfig());
            const clickableArea = wrapper.find("[data-test='clickable-area']")
            await clickableArea.trigger("click");
            const InternInput = wrapper.find("[data-test='Intern']");
            await InternInput.setChecked();
            expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", ["Intern"]);
        });
        it("navigate user to job results page to see fresh", async() => {
            const push = jest.fn()
            useRouter.mockReturnValue({ push });
            useUniqueJobTypes.mockReturnValue(
                new Set(["Intern", "Part-time"])
            );
            useStore.mockReturnValue({
                commit: jest.fn(),
                dispatch: jest.fn(),
            });
            const wrapper = mount(
                JobFiltersSideBarJobTypes,
                createConfig()
            );
            const clickableArea = wrapper.find("[data-test='clickable-area']")
            await clickableArea.trigger("click");
            const InternInput = wrapper.find("[data-test='Intern']");
            await InternInput.setChecked();
            expect(push).toHaveBeenCalledWith({ name: "jobResults" })
        });
    });
});