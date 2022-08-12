<template>
	<main>
		<section class="flex flex-col h-screen pt-10 pb-20">
			<div class="grid grid-cols-12">
				<div class="col-start-1 col-span-1">1 column</div>
				<div class="col-start-2 col-span-5">
					<headline></headline>
					<job-search-form></job-search-form>
				</div>
				<div class="col-start-7 col-span-5">5 columns</div>
				<div class="col-start-12 col-span-1">1 column</div>
			</div>
		</section>
	</main>
</template>

<script>
import Headline from "@/components/Headline.vue";
import JobSearchForm from "@/components/JobSearchForm.vue";
export default {
	name: "Hero",
	components: {
		Headline,
		JobSearchForm,
	},
	//   beforeCreate() {
	//     console.log("component is about to be created!");
	//   },
	//   created() {
	//     console.log("component has been created!");
	//   },
	//   beforeMount() {
	//     console.log("component is about to be mounted!");
	//   },
	//   mounted() {
	//     console.log("component has been mounted!");
	//   },
};
</script>