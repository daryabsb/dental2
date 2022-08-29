
import { shallowMount } from "@vue/test-utils";

import useConfirmRoute from "@/composables/useConfirmRoute"
import { useFilteredJobs } from "@/store/composables"
jest.mock("@/composables/useConfirmRoute");
jest.mock("@/store/composables");


import SubNav from "@/components/navs/SubNav.vue"

describe("SubNav", () => {

    const createConfig = () => ({
        global: {
            stubs: {
                FontAwesomeIcon: true,
            },
        },
    });

    describe("when user is on job page", () => {
        it("display job count", () => {
            useConfirmRoute.mockReturnValue(true);
            useFilteredJobs.mockReturnValue([
                { id: 1 },
                { id: 2 }
            ]);
            const wrapper = shallowMount(SubNav, createConfig());
            const jobCount = wrapper.find('[data-test="job-count"]');
            // console.log(jobCount.text());
            expect(jobCount.text()).toMatch("2 jobs matched");
        });
    });
    describe("when user is not on job page", () => {
        it("does not display job count", () => {
            useConfirmRoute.mockReturnValue(false);
            useFilteredJobs.mockReturnValue();
            const wrapper = shallowMount(SubNav, createConfig());
            const jobCount = wrapper.find("[data-test='job-count']");
            expect(jobCount.exists()).toBe(false);
        });
    });
});