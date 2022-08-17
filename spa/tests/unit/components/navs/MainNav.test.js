import { mount, shallowMount, RouterLinkStub } from "@vue/test-utils";

// import { createStore } from "vuex";

import MainNav from "@/components/navs/MainNav.vue";

describe("MainNav", () => {
    const createConfig = ($store) => ({
        global: {
            // plugins: [store],
            mocks: {
                $store,
            },
            stubs: {
                "router-link": RouterLinkStub,
            },
        },
    });
    it("displays company name", () => {
        // const store = createStore()
        const $store = {
            state: {
                isLoggedIn: false,
            }
        };
        const wrapper = shallowMount(MainNav, createConfig($store));
        expect(wrapper.text()).toMatch("ARON");
    });
    it("displays menu items for navigation", () => {
        // const store = createStore()
        const $store = {
            state: {
                isLoggedIn: false,
            }
        };
        const wrapper = shallowMount(MainNav, createConfig($store));
        const navMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");
        const navMenuText = navMenuItems.map((item) => item.text());
        expect(navMenuText).toEqual([
                'Teams',
                'Locations',
                'Life at ARON',
                'How we hire',
                'Students',
                'Jobs'
            ])
            // console.log(navMenuText);
    })
    describe("when user is logged out", () => {
        it("prompts user to sign in", () => {
            const $store = {
                state: {
                    isLoggedIn: false,
                }
            };
            // const store = createStore()
            const wrapper = shallowMount(MainNav, createConfig($store));
            const loginButton = wrapper.find("[data-test='login-button']");
            expect(loginButton.exists()).toBe(true);

        });
        it("issues call login user", async() => {
            // const store = createStore();
            const commit = jest.fn();
            const $store = {
                state: {
                    isLoggedIn: false,
                },
                commit,
            };
            const wrapper = shallowMount(MainNav, createConfig($store));
            const loginButton = wrapper.find("[data-test='login-button']");
            await loginButton.trigger("click");
            expect(commit).toBeCalledWith("LOGIN_USER");
        });
    });

    describe("when user is logs in", () => {
        it("displays user profile image", () => {
            // const store = createStore({
            //     state() {
            //         return {
            //             isLoggedIn: true
            //         }
            //     }
            // });
            const $store = {
                state: {
                    isLoggedIn: true,
                },
            };
            const wrapper = shallowMount(MainNav, createConfig($store));
            const profileImage = wrapper.find("[data-test='profile-image']");
            expect(profileImage.exists()).toBe(true);

        });
        it("displays sub nav with additional info", () => {
            // const store = createStore({
            //     state() {
            //         return {
            //             isLoggedIn: true
            //         }
            //     }
            // });
            const $store = {
                state: {
                    isLoggedIn: true,
                },
            };
            const wrapper = shallowMount(MainNav, createConfig($store));
            const subNav = wrapper.find("[data-test='sub-nav']");
            expect(subNav.exists()).toBe(true);

        });
    });
});