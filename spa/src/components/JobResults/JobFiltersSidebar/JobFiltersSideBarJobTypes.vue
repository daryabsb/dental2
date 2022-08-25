<template>
	<accordion header="Job Types">
		<div class="mt-5">
			<fieldset>
				<ul class="flex flex-row flex-wrap">
					<li
						v-for="jobType in UNIQUE_JOB_TYPES"
						:key="jobType"
						class="w-1/2 h-8"
					>
						<input
							:id="jobType"
							v-model="selectedJobTypes"
							:value="jobType"
							type="checkbox"
							class="mr-3"
							:data-test="jobType"
							@change="selectJobType"
						/>
						<label :for="jobType" data-test="job-type">{{
							jobType
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
			...mapGetters([UNIQUE_JOB_TYPES], [JOBS_GETTER]),
		},
		methods: {
			...mapMutations([ADD_SELECTED_JOB_TYPES]),

			...mapActions([FILTER_JOBS]),
			selectJobType() {
				this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
				this.$router.push("/jobs/results/?page=1");
				this.$store.dispatch("FILTER_JOBS");
			},
		},
	};
</script>