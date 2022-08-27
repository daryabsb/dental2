<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      ></job-listing>
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{
              name: 'jobResults',
              query: { page: previousPage },
            }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'jobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FETCH_JOBS, FILTERED_JOBS } from "@/store/constants";
import JobListing from "./JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      // maxJobs: 0,
      limit: 3,
      page: 1,
    };
  },
  computed: {
    ...mapGetters([FILTERED_JOBS]),

    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },

    displayedJobs() {
      const firstJobIndex = (this.currentPage - 1) * 10;
      const lastJobIndex = this.currentPage * 10;
      return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    // console.log("MOUNT CALLED");

    try {
      await this.FETCH_JOBS();
      // this.maxJobs = await this.jobs.length;
    } catch (error) {
      console.log("from job listings", error);
    }
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>

