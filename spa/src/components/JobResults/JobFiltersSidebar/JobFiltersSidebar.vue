<template>
	<div
		class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
	>
		<section class="pb-5">
			<div class="flex flex-row justify-between">
				<h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
				<div class="flex items-center text-sm">
					<action-button text="Clear Filters" type="secondary"></action-button>
				</div>
			</div>
			<job-filters-side-bar-Checkbox-group
				header="Job Types"
				:unique-values="uniqueJobTypes"
				:mutation="ADD_SELECTED_JOB_TYPES"
				data-test="job-types-filter"
			/>
			<job-filters-side-bar-Checkbox-group
				header="Organizations"
				:unique-values="uniqueOrganizations"
				:mutation="ADD_SELECTED_ORGANIZATIONS"
				data-test="organizations-filter"
			/>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";

import {
	ADD_SELECTED_JOB_TYPES,
	ADD_SELECTED_ORGANIZATIONS
} from "@/store/constants";

import ActionButton from "@/components/shared/ActionButton.vue";
import JobFiltersSideBarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSideBarCheckboxGroup.vue";

export default defineComponent({
	name: "JobFiltersSidebar",
	components: {
		ActionButton,
		JobFiltersSideBarCheckboxGroup
	},
	setup() {
		const uniqueJobTypes = useUniqueJobTypes();
		const uniqueOrganizations = useUniqueOrganizations();

		return {
			uniqueJobTypes,
			uniqueOrganizations,
			ADD_SELECTED_JOB_TYPES,
			ADD_SELECTED_ORGANIZATIONS
		};
	}
});
</script>
