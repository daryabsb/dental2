<template>
	<accordion header="Organization">
		<div class="mt-5">
			<fieldset>
				<ul class="flex flex-row flex-wrap">
					<li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="w-1/2 h-8">
						<input
							:id="organization"
							v-model="selectedOrganizations"
							:value="organization"
							type="checkbox"
							class="mr-3"
							@change="selectOrganization"
						/>
						<label :for="organization" data-test="organization">{{organization}}</label>
					</li>
				</ul>
			</fieldset>
		</div>
	</accordion>
</template>

<script>
	import { mapGetters } from "vuex";
	import Accordion from "@/components/shared/Accordion.vue";
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
			...mapGetters(["UNIQUE_ORGANIZATIONS"]),
		},
		methods: {
			selectOrganization() {
				console.log(this.selectedOrganizations);
			},
		},
	};
</script>