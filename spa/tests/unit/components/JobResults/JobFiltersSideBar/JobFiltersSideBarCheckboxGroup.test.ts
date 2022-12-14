import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

const useStoreMock = useStore as jest.Mock;

import { useRouter } from "vue-router";
jest.mock("vue-router");

const useRouterMock = useRouter as jest.Mock;

import JobFiltersSideBarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSideBarCheckboxGroup.vue";

describe("JobFiltersSideBarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    props: {
      header: "Some Header",
      uniqueValues: new Set(["Vue 01", "Vue 02"]),
      mutation: "Some Mutation",
      ...props,
    },
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  it("renders unique list of values for filtering jobs", async () => {
    const props = {
      uniqueValues: new Set(["Vue 01", "Vue 02"]),
    };
    // useRouter.mockReturnedValue({push:jest.fn()});
    const wrapper = mount(JobFiltersSideBarCheckboxGroup, createConfig(props));
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const inputLabels = wrapper.findAll("[data-test='value']");
    const inputValues = inputLabels.map((node) => node.text());
    expect(inputValues).toEqual(["Vue 01", "Vue 02"]);
  });
  describe("when user selects a checkbox", () => {
    it("it communicate that user has selected checkbox for values", async () => {
      const commit = jest.fn();
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        commit,
        dispatch,
      });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const props = {
        uniqueValues: new Set(["Intern"]),
        mutation: "SOME_MUTATION",
      };
      const wrapper = mount(
        JobFiltersSideBarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const InternInput = wrapper.find("[data-test='Intern']");
      await InternInput.setValue(true);
      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Intern"]);
    });
    it("navigate user to job results page to see fresh", async () => {
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });

      const props = {
        uniqueValues: new Set(["Intern", "Part-time"]),
      };
      useStoreMock.mockReturnValue({
        commit: jest.fn(),
        dispatch: jest.fn(),
      });
      const wrapper = mount(
        JobFiltersSideBarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const InternInput = wrapper.find("[data-test='Intern']");
      await InternInput.setValue(true);
      expect(push).toHaveBeenCalledWith({ name: "jobResults" });
    });
  });
});
