<template>
	<li class="mb-7">
		<router-link
			:to="jobPageLink"
			class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
		>
			<div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
				<h2 class="mb-2 text-2xl">{{ job.id }} - {{ job.title }}</h2>
				<div class="flex flex-ro align-middle">
					<div class="mr-5">
						<span>{{ job.organization }}</span>
					</div>
					<ul>
						<li
							v-for="loc in job.locations"
							:key="loc"
							class="inline-block mr-5"
						>
							{{ loc }}
						</li>
					</ul>
				</div>
			</div>
			<div class="px-8 py-4">
				<div class>
					<h3 class="mt-1 mb2">Qualifications:</h3>
					<div>
						<ul class="pl-8 list-disc">
							<li v-for="qual in job.minimumQualifications" :key="qual">
								{{ qual }}
								<br />
							</li>
						</ul>
					</div>
				</div>
				<div class="mt-2 text-center">
					<router-link :to="jobPageLink" class="text-brand-blue-1"
						>Expand</router-link
					>
				</div>
			</div>
		</router-link>
	</li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Job } from "@/api/types";
export default defineComponent({
	name: "JobListing",
	props: {
		job: {
			type: Object as PropType<Job>,
			required: true
		}
	},
	setup(props) {
		const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);
		return { jobPageLink };
	}
});
</script>
