<template>
	<main class="flex-auto p-8 bg-brand-gray-2">
		<div>
			<button @click="nextPageUrl">|| {{page}} ||</button>
		</div>
		<ol>
			<job-listing v-for="job in displayedJobs" :key="job.id" :job="job" data-test="job-listing"></job-listing>
		</ol>
	</main>
</template>

<script>
	import axios from "axios";
	import JobListing from "./JobListing.vue";
	export default {
		name: "JobListings",
		components: {
			JobListing,
		},
		data() {
			return {
				jobs: [],
				limit: 3,
				page: 1,
			};
		},
		computed: {
			displayedJobs() {
				const pageString = this.$route.query.page || "1";
				const pageNumber = Number.parseInt(pageString);
				const firstJobIndex = (pageNumber - 1) * 10;
				const lastJobIndex = pageNumber * 10;
				return this.jobs.slice(firstJobIndex, lastJobIndex);
			},
		},
		methods: {
			nextPageUrl() {
				this.page++;
				this.$router.push(`/jobs/results?page=${this.page}`);
			},
		},
		async mounted() {
			const url = "http://localhost:3000/jobs";
			try {
				const response = await axios.get(url);
				this.jobs = response.data;
			} catch (error) {
				console.log(error);
			}
		},
	};
</script>
