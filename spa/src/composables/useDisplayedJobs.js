import { computed } from "vue";
import { useFilteredJobs } from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";

const useDisplayedJobs = () => {
    return computed(() => {
        const currentPage = useCurrentPage();
        const filteredJobs = useFilteredJobs();
        // console.log("from displayedJobs comp", filteredJobs);
        const firstJobIndex = (currentPage.value - 1) * 10;
        const lastJobIndex = currentPage.value * 10;

        return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });
}



export default useDisplayedJobs;