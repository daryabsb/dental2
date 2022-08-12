<template>
	<form
		class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
	>
		<font-awesome-icon :icon="['fas','search']" class="mr-3 ml-4" />
		<div class="flex flex-nowrap flex-1 h-full text-base font-light">
			<div class="relative flex items-center flex-1 h-full pr-3">
				<label for="not" class="absolute left-0 -top-10">Role:</label>
				<text-input placeholder="Software Engineer" :value="role" @handle-input="role = $event"></text-input>
				<!-- <input
					v-model="role"
					type="text"
					placeholder="Software Engineer"
					class="w-full text-lg font-normal focus:outline-none"
				/>-->
			</div>
			<span
				class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
			>in</span>
			<div class="relative flex items-center flex-1 h-full pl-3">
				<label for="not" class="absolute left-0 -top-10">Where?</label>
				<text-input placeholder="Los Angeles" :value="location" @handle-input="location = $event"></text-input>
				<!-- <input
					v-model="location"
					type="text"
					placeholder="Los Angelos"
					class="w-full text-lg font-normal focus:outline-none"
				/>-->
			</div>
			<action-button text="Search" type="secondary" class="rounded-r-3xl"></action-button>
		</div>
	</form>
</template>

<script>
	import ActionButton from "@/components/shared/ActionButton.vue";
	import TextInput from "@/components/shared/TextInput.vue";
	export default {
		name: "JobSearchForm",
		components: {
			ActionButton,
			TextInput,
		},
		data() {
			return {
				role: "",
				location: "",
			};
		},
		methods: {},
	};
</script>