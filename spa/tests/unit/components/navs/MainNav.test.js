import { mount, shallowMount } from "@vue/test-utils";

import MainNav from "@/components/navs/MainNav.vue";

describe("MainNav", () => {
    it("displays company name", () => {
        const wrapper = shallowMount(MainNav);
        expect(wrapper.text()).toMatch("ARON");
    });
    it("displays menu items for navigation", () => {
        const wrapper = shallowMount(MainNav);
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
            const wrapper = shallowMount(MainNav);
            const loginButton = wrapper.find("[data-test='login-button']");
            expect(loginButton.exists()).toBe(true);

        });
    });

    describe("when user is logged in", () => {
        it("displays user profile image", async() => {
            const wrapper = shallowMount(MainNav);
            let profileImage = wrapper.find("[data-test='profile-image']");
            expect(profileImage.exists()).toBe(false);

            const loginButton = wrapper.find("[data-test='login-button']");
            await loginButton.trigger("click");

            profileImage = wrapper.find("[data-test='profile-image']");
            expect(profileImage.exists()).toBe(true);

        });
        it("displays sub nav with additional info", async() => {
            const wrapper = shallowMount(MainNav);
            let subNav = wrapper.find("[data-test='sub-nav']");
            expect(subNav.exists()).toBe(false);

            const loginButton = wrapper.find("[data-test='login-button']");
            await loginButton.trigger("click");

            subNav = wrapper.find("[data-test='sub-nav']");
            expect(subNav.exists()).toBe(true);

        });
    });

});