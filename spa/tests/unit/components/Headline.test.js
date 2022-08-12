import { nextTick } from "vue";
import { mount } from "@vue/test-utils";

import Headline from "@/components/Headline.vue";

describe("Headline", () => {
    beforeEach(() => {
        jest.useFakeTimers("legacy");
    });
    afterEach(() => {
        jest.useRealTimers("legacy");
    });


    describe("JEast Playground", () => {
        it("displays introductory action verb", () => {
            // jest.useFakeTimers("legacy");
            const wrapper = mount(Headline);
            const actionPhrase = wrapper.find("[data-test='action-phrase']");
            expect(actionPhrase.text()).toBe("Buildfor everyone");
            // jest.useRealTimers();
        });
        it("changes actio verb at a consistent interval", () => {
            // jest.useFakeTimers("legacy");
            mount(Headline);
            expect(setInterval).toHaveBeenCalled();
            // jest.useRealTimers();
        });
        it("swaps action phrase after first interval ", async() => {
            // jest.useFakeTimers("legacy");
            const wrapper = mount(Headline);
            jest.runOnlyPendingTimers();
            await nextTick();
            const actionPhrase = wrapper.find("[data-test='action-phrase']");
            expect(actionPhrase.text()).toBe("Createfor everyone");
            // jest.useRealTimers();
        });
        it("it removes interval when component disappears", () => {
            // jest.useFakeTimers("legacy");
            const wrapper = mount(Headline);
            wrapper.unmount();
            expect(clearInterval).toHaveBeenCalled();
            // jest.useRealTimers();
        });
    });
});

// it("tracks wether it has been called", () => {
//     jest.useFakeTimers();
//     jest.useRealTimers();
//     const mockFunction = jest.fn();
//     mockFunction(1, 2, 3);
//     expect(mockFunction).toHaveBeenCalledWith(1, 2, 5);
// });