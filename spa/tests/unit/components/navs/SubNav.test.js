import { mount } from "@vue/test-utils";

import SubNav from "@/components/navs/SubNav.vue"

describe("SubNav", () => {

    const createConfig = (routeName, $store = {}) => ({
        global: {
            mocks: {
                $route: {
                    name: routeName,
                },
                $store,
            },
            stubs: {
                FontAwesomeIcon: true,
            },
        },
    })

    describe("when user is on job page", () => {
        it("display job count", () => {
            const routeName = "jobResults";
            const $store = {
                getters: {
                    MAX_JOBS: 2,
                }
            }
            const wrapper = mount(SubNav, createConfig(routeName, $store));
            const jobCount = wrapper.find("[data-test='job-count']");
            expect(jobCount.text()).toMatch("2 jobs matched");
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