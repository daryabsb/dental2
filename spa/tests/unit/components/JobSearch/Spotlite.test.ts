import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";

jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";

const axiosGetMock = axios.get as jest.Mock;

describe("Spotlight", () => {
    const mockSpotlightResponse = (data = {}) => {
        axiosGetMock.mockResolvedValue({
            data: [{
                img: "Some image",
                title: "Some title",
                description: "Some description",
                ...data,
            }],
        });
    };
    it("provides img attribute to parent component", async () => {
        mockSpotlightResponse({ img: "Some img" })
        const wrapper = mount(Spotlight, {
            slots: {
                default: `<template #default="slotProps">
                <h1>{{slotProps.img}}</h1>
                </template>`
            }
        });
        await flushPromises();
        expect(wrapper.text()).toMatch("Some img");
    });
    it("provides title attribute to parent component", async () => {
        mockSpotlightResponse({ title: "Some titles" })
        const wrapper = mount(Spotlight, {
            slots: {
                default: `<template #default="slotProps">
                <h1>{{slotProps.title}}</h1>
                </template>`
            }
        });
        await flushPromises();
        expect(wrapper.text()).toMatch("Some titles");
    });
    it("provides description attribute to parent component", async () => {
        mockSpotlightResponse({ description: "Some descriptions" })
        const wrapper = mount(Spotlight, {
            slots: {
                default: `<template #default="slotProps">
                <h1>{{slotProps.description}}</h1>
                </template>`
            }
        });
        await flushPromises();
        expect(wrapper.text()).toMatch("Some descriptions");
    });
});