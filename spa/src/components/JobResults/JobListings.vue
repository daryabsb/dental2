<template>
	<main class="flex-auto p-8 bg-brand-gray-2">
		<ol>
			<job-listing
				v-for="job in displayedJobs"
				:key="job.id"
				:job="job"
				data-test="job-listing"
			></job-listing>
		</ol>
		<div class="mt-8 mx-auto">
			<div class="flex flex-row flex-nowrap">
				<p class="text-sm flex-grow">Page {{ currentPage }}</p>
				<div class="flex items-center justify-center">
					<router-link
						v-if="previousPage"
						:to="{
							name: 'jobResults',
							query: { page: previousPage }
						}"
						class="mx-3 text-sm font-semibold text-brand-blue-1"
						data-test="previous-page-link"
						>Previous</router-link
					>
					<router-link
						v-if="nextPage"
						:to="{ name: 'jobResults', query: { page: nextPage } }"
						class="mx-3 text-sm font-semibold text-brand-blue-1"
						data-test="next-page-link"
						>Next</router-link
					>
				</div>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed, onMounted } from "vue";
import { useFilteredJobs, useFetchJobsDispatch } from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import useDisplayedJobs from "@/composables/useDisplayedJobs";
import JobListing from "@/components/JobResults/JobListing.vue";
export default defineComponent({
	name: "JobListings",
	components: {
		JobListing
	},
	setup() {
		onMounted(useFetchJobsDispatch);
		const filteredJobs = useFilteredJobs();
		const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
		const currentPage = useCurrentPage();

		const { previousPage, nextPage } = usePreviousAndNextPages(
			currentPage,
			maxPage
		);

		// const previousPage = usePreviousAndNextPages.previousPage();
		// const nextPage = usePreviousAndNextPages.nextPage;
		const displayedJobs = useDisplayedJobs();
		return {
			currentPage,
			previousPage,
			nextPage,
			displayedJobs
		};
	}
});
</script>
