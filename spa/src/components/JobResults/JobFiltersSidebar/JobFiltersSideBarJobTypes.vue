<template>
	<accordion header="Job Type">
		<div class="mt-5">
			<fieldset>
				<ul class="flex flex-row flex-wrap">
					<li
						v-for="jobtype in uniqueJobTypes"
						:key="jobtype"
						class="w-1/2 h-8"
					>
						<input
							:id="jobtype"
							v-model="selectedJobTypes"
							:value="jobtype"
							type="checkbox"
							class="mr-3"
							:data-test="jobtype"
							@change="selectJobTypes"
						/>
						<label :for="jobtype" data-test="job-type">{{
							jobtype
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
	import { useUniqueJobTypes } from "@/store/composables";
	import Accordion from "@/components/shared/Accordion.vue";
	import { FILTER_JOBS, ADD_SELECTED_JOB_TYPES } from "@/store/constants";

	export default {
		name: "JobFiltersSideBarJobTypes",
		components: {
			Accordion,
		},
		setup() {
			const store = useStore();
			const router = useRouter();

			const selectedJobTypes = ref([]);
			const uniqueJobTypes = useUniqueJobTypes();

			const selectJobTypes = () => {
				store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
				store.dispatch(FILTER_JOBS);
				router.push({ name: "jobResults" });
			};

			return {
				selectedJobTypes,
				uniqueJobTypes,
				selectJobTypes,
			};
		},
	};
</script>