<template>
	<section class="mb-16">
		<h1
			class="font-bold tracking-tighter text-8xl mb-14"
			data-test="action-phrase"
		>
			<span :class="actionClasses">{{ action }}</span>
			<br />for everyone
		</h1>
		<h2 class="text-3xl font-light">Find your next job @Aron</h2>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import nextElementInList from "@/utils/nextElementInList.js";

	interface ActionClasses {
		[x: string]: boolean;
	}
	interface Data {
		action: string;
		// interval: number | undefined;
		interval?: number;
	}

	export default defineComponent({
		name: "Headline",
		data(): Data {
			return {
				action: "Build",
				interval: undefined,
			};
		},
		computed: {
			actionClasses(): ActionClasses {
				return {
					[this.action.toLowerCase()]: true,
					// build: this.action === "build",
					// create: this.action === "Create",
					// design: this.action === "Design",
					// code: this.action === "Code",
				};
			},
		},
		created() {
			this.changeTitle();
		},
		beforeUnmount() {
			clearInterval(this.interval);
		},
		methods: {
			changeTitle() {
				this.interval = setInterval(() => {
					const actions = ["Build", "Create", "Design", "Code"];
					this.action = nextElementInList(actions, this.action);
					// const currentActionIndex = actions.indexOf(this.action);
					// const nextActionIndex = (currentActionIndex + 1) % 4;
					// const nextAction = actions[nextActionIndex];
					// this.action = nextAction;
				}, 2800);
			},
		},
	});
</script>

<style scoped>
	.build {
		color: #1a73e8;
	}

	.create {
		color: #34a853;
	}

	.design {
		color: #f9ab00;
	}

	.code {
		color: #d93025;
	}
</style>
