<template>
	<main-nav></main-nav>
	<router-view />
</template>

<script>
	import MainNav from "./components/navs/MainNav.vue";
	export default {
		name: "App",
		components: {
			MainNav,
		},
	};
</script>