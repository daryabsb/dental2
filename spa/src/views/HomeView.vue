<template>
	<hero></hero>
	<div>
		<button @click="fetchJobs">fetch</button>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Hero from "@/components/JobSearch/Hero.vue";

	export default {
		name: "HomeView",
		components: {
			Hero,
		},
		methods: {
			fetchJobs() {
				this.$store.dispatch("FETCH_JOBS");
			},
		},
	};
</script>
