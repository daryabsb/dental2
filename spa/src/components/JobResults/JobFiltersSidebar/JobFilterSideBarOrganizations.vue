<template>
	<accordion header="Organization">
		<div class="mt-5">
			<fieldset>
				<ul class="flex flex-row flex-wrap">
					<li
						v-for="organization in UNIQUE_ORGANIZATIONS"
						:key="organization"
						class="w-1/2 h-8"
					>
						<input
							:id="organization"
							v-model="selectedOrganizations"
							:value="organization"
							type="checkbox"
							class="mr-3"
							:data-test="organization"
							@change="selectOrganization"
						/>
						<label :for="organization" data-test="organization">{{
							organization
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
		ADD_SELECTED_ORGANIZATIONS,
		UNIQUE_ORGANIZATIONS,
		JOBS_GETTER,
	} from "@/store/constants";

	export default {
		name: "JobFilterSideBarOrganizations",
		components: {
			Accordion,
		},
		data() {
			return {
				selectedOrganizations: [],
			};
		},
		computed: {
			// UNIQUE_ORGANIZATIONS() {
			// 	return this.$store.getters.UNIQUE_ORGANIZATIONS;
			// },
			...mapGetters([UNIQUE_ORGANIZATIONS], [JOBS_GETTER]),
		},
		methods: {
			...mapMutations([ADD_SELECTED_ORGANIZATIONS]),

			...mapActions([FILTER_JOBS]),
			selectOrganization() {
				this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
				this.$router.push("/jobs/results/?page=1");
				this.$store.dispatch("FILTER_JOBS");
			},
		},
	};
</script>