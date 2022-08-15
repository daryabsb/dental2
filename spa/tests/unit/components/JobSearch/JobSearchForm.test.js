import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
    describe("when the user submits the form", () => {
        it("directs user to job results page with params", async () => {
            const push = jest.fn();
            const $router = { push };
            const wrapper = mount(JobSearchForm, {
                attachTo: document.body,
                global: {
                    mocks: {
                        $router,
                    },
                    stubs: {
                        FontAwesomeIcon: true,
                    }
                }
            });
            const roleInput = wrapper.find("[data-test='role-input']");
            await roleInput.setValue("Vue Dev");

            const locationInput = wrapper.find("[data-test='location-input']");
            await locationInput.setValue("Kurdistan");

            const submitButton = wrapper.find("[data-test='form-submit-button']");
            await submitButton.trigger("click");

            expect(push).toHaveBeenCalledWith({
                name: "jobResults",
                query: {
                    role: "Vue Dev",
                    location: "Kurdistan",
                }
            })
        });
    });
})