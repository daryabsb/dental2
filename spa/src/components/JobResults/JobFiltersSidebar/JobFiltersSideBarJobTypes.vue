<template>
	<accordion header="Job Type">
		<div class="mt-5">
			<fieldset>
				<ul class="flex flex-row flex-wrap">
					<li
						v-for="jobtype in UNIQUE_JOB_TYPES"
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
	import { mapActions, mapGetters, mapMutations } from "vuex";
	import Accordion from "@/components/shared/Accordion.vue";
	import {
		FILTER_JOBS,
		ADD_SELECTED_JOB_TYPES,
		UNIQUE_JOB_TYPES,
		JOBS_GETTER,
	} from "@/store/constants";

	export default {
		name: "JobFiltersSideBarJobTypes",
		components: {
			Accordion,
		},
		data() {
			return {
				selectedJobTypes: [],
			};
		},
		computed: {
			// UNIQUE_JOB_TYPES() {
			// 	return this.$store.getters.UNIQUE_JOB_TYPES;
			// },
			...mapGetters([UNIQUE_JOB_TYPES], [JOBS_GETTER]),
		},
		methods: {
			...mapMutations([ADD_SELECTED_JOB_TYPES]),

			...mapActions([FILTER_JOBS]),
			selectJobTypes() {
				this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
				this.$store.dispatch("FILTER_JOBS");
				this.$router.push({ name: "jobResults" });
			},
		},
	};
</script>