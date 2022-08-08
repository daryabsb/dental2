import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
    it("displays company name", () => {
        const wrapper = mount(MainNav);
        expect(wrapper.text()).toMatch("ARON");
    });
    it("displays menu items for navigation", () => {
        const wrapper = mount(MainNav);
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
            const wrapper = mount(MainNav);
            const loginButton = wrapper.find("[data-test='login-button']");
            expect(loginButton.exists()).toBe(true);

        });
    });

    describe("when user is logged in", () => {
        it("displays user profile image", async () => {
            const wrapper = mount(MainNav);
            let profileImage = wrapper.find("[data-test='profile-image']");
            expect(profileImage.exists()).toBe(false);

            const loginButton = wrapper.find("[data-test='login-button']");
            await loginButton.trigger("click");

            profileImage = wrapper.find("[data-test='profile-image']");
            expect(profileImage.exists()).toBe(true);

        });
    });
});