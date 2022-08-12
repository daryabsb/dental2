<template>
	<div>
		<main-nav></main-nav>
		<hero></hero>
	</div>
</template>

<script>
	import MainNav from "@/components/navs/MainNav.vue";
	import Hero from "@/components/JobSearch/Hero.vue";
	export default {
		name: "App",
		components: {
			MainNav,
			Hero,
		},
	};
</script>
