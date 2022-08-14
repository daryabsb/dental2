import { mount } from "@vue/test-utils";

import SubNav from "@/components/navs/SubNav.vue"

describe("SubNav", () => {

    const createConfig = (routeName) => ({
        global: {
            mocks: {
                $route: {
                    name: routeName,
                },
            },
            stubs: {
                FontAwesomeIcon: true,
            },
        },
    })

    describe("when user is on job page", () => {
        it("display job count", () => {
            const wrapper = mount(SubNav, createConfig("jobResults"));
            const jobCount = wrapper.find("[data-test='job-count']");
            expect(jobCount.exists()).toBe(true);
        });
    });
    describe("when user is not on job page", () => {
        it("does not display job count", () => {

            const wrapper = mount(SubNav, createConfig("home"));
            const jobCount = wrapper.find("[data-test='job-count']");
            expect(jobCount.exists()).toBe(false);
        });
    });
});