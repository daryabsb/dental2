<template>
	<accordion :header="header">
		<div class="mt-5">
			<fieldset>
				<ul class="flex flex-row flex-wrap">
					<li
						v-for="value in uniqueValues"
						:key="value"
						class="w-1/2 h-8"
					>
						<input
							:id="value"
							v-model="selectedValues"
							:value="value"
							type="checkbox"
							class="mr-3"
							:data-test="value"
							@change="selectValue"
						/>
						<label :for="value" data-test="value">{{
							value
						}}</label>
					</li>
				</ul>
			</fieldset>
		</div>
	</accordion>
</template>

<script>
	import { ref } from "vue";
	import { useStore } from "vuex";
	import { useRouter } from "vue-router";
	import { useUniqueOrganizations } from "@/store/composables";
	import Accordion from "@/components/shared/Accordion.vue";
	import { FILTER_JOBS, ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

	export default {
		name: "JobFiltersSideBarCheckboxGroup",
		components: {
			Accordion,
		},
		setup() {
			const store = useStore();
			const router = useRouter();

			const selectedValues = ref([]);
			const uniqueOrganizations = useUniqueOrganizations();

			const selectOrganization = () => {
				store.commit(
					ADD_SELECTED_ORGANIZATIONS,
					selectedOrganizations.value
				);
				store.dispatch(FILTER_JOBS);
				router.push({ name: "jobResults" });
			};

			return {
				selectedOrganizations,
				uniqueOrganizations,
				selectOrganization,
			};
		},
	};
</script>