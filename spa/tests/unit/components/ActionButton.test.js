import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
    it("renders text", () => {
        const wrapper = mount(ActionButton, {
            props: {
                text: "I'm anything",
                type: "primary",
            }
        });
        expect(wrapper.text()).toMatch("I'm anything");
    });
    it("applies one of several styles", () => {
        const wrapper = mount(ActionButton, {
            props: {
                text: "I'm anything",
                type: "primary",
            }
        });
        const button = wrapper.find("button");
        expect(button.classes("primary")).toBe(true);
    });
})