import { useRoute } from "vue-router";
import useCurrentPage from "@/composables/useCurrentPage";

jest.mock("vue-router");

const useRouteMock = useRoute as jest.Mock;

describe("useCurrentPage", () => {
    describe("when query params includes page", () => {
        it("returns the page", () => {
            useRouteMock.mockReturnValue({ query: { page: "5", } });
            const result = useCurrentPage();
            expect(result.value).toBe(5);
        });
    });
    describe("when query params excludes page", () => {
        it("default to page 1", () => {
            useRouteMock.mockReturnValue({ query: {} });
            const result = useCurrentPage();
            expect(result.value).toBe(1);
        });
    });
});