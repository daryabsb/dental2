<template>
	<hero></hero>
	<spotlight></spotlight>
</template>

<script>
	// @ is an alias to /src
	import Hero from "@/components/JobSearch/Hero.vue";
	import Spotlight from "@/components/JobSearch/Spotlight.vue";

	export default {
		name: "HomeView",
		components: {
			Hero,
			Spotlight,
		},
		methods: {
			fetchJobs() {
				this.$store.dispatch("FETCH_JOBS");
			},
		},
	};
</script>
