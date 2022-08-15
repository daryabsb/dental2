import { mount } from "@vue/test-utils";

import JobSearchFrom from "@/components/JobSearch/JobSearchFrom.vue";

describe("JobSearchForm", () => {
    describe("when the user submits the form", () => {
        it("directs user to job results page with params", async() => {
            const wrapper = mount(JobSearchFrom, {
                global: {
                    stubs: {
                        FontAwesomeIcon: true,
                    }
                }
            });
            const roleInput = wrapper.find("[data-test=`role-input']");
            await roleInput.setValue("Vue Dev");

            const locationInput = wrapper.find("[data-test=`location-input']");
            await locationInput.setValue("Kurdistan");

            const submitButton = wrapper.find("[data-test=`form-submit-button']");
            await submitButton.trigger("click");
        });
    });
})