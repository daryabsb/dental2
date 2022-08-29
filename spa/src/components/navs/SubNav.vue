<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1 mr-2">{{
            FILTERED_JOBS.length
          }}</span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";

export default {
  name: "SubNav",
  setup() {
    /* STORE COMPOSABLES */
    // const store = useStore()
    // const FILTERED_JOBS = computed(() => store.getters[FILTERED_JOBS]);
    const FILTERED_JOBS = useFilteredJobs();

    /* ROUTER COMPOSABLES */
    // const route = useRoute();
    // const onJobResultsPage = computed(() => route.name === "jobResults");
    const onJobResultsPage = useConfirmRoute("jobResults");

    return {
      onJobResultsPage,
      FILTERED_JOBS,
    };
  },

  //   computed: {
  //     ...mapGetters([FILTERED_JOBS]),
  // onJobResultsPage() {
  // 	return this.$route.name === "jobResults";
  // },
  //   },
};
</script>