import { useRoute } from "vue-router";
import useConfirmRoute from "@/composables/useConfirmRoute";

jest.mock("vue-router");

describe("useConfirmRoute", () => {
    it("determines if page route matches specified route", () => {
        useRoute.mockReturnValue({ name: "home" });
        const routeName = "home";
        const result = useConfirmRoute(routeName);
        expect(result.value).toBe(true);
    });
});