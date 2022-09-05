<template>
	<accordion :header="header">
		<div class="mt-5">
			<fieldset>
				<ul class="flex flex-row flex-wrap">
					<li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
						<input
							:id="value"
							v-model="selectedValues"
							:value="value"
							type="checkbox"
							class="mr-3"
							:data-test="value"
							@change="selectValue"
						/>
						<label :for="value" data-test="value">{{ value }}</label>
					</li>
				</ul>
			</fieldset>
		</div>
	</accordion>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import {key} from "@/store"
import Accordion from "@/components/shared/Accordion.vue";
import { FILTER_JOBS } from "@/store/constants";

export default defineComponent({
	name: "JobFiltersSideBarCheckboxGroup",
	components: {
		Accordion
	},
	props: {
		header: {
			type: String,
			required: true
		},
		uniqueValues: {
			type: Set,
			required: true
		},
		mutation: {
			type: String,
			required: true
		}
	},
	setup(props) {
		const store = useStore();
		const router = useRouter();

		const selectedValues = ref<string[]>([]);

		const selectValue = () => {
			store.commit(props.mutation, selectedValues.value);
			store.dispatch(FILTER_JOBS);
			router.push({ name: "jobResults" });
		};

		return {
			selectedValues,
			selectValue
		};
	}
});
</script>
