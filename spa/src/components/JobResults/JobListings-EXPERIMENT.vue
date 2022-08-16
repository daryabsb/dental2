<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <div>
      <button @click="nextPageUrl">|| {{ getPageNum }} ||</button>
    </div>
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      ></job-listing>
    </ol>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "./JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
      limit: 3,
      page: 1,
    };
  },
  computed: {
    displayedJobs() {
      console.log(this.$route.query);
      const pageString = this.$route.query.page || "1";

      const pageNumber = Number.parseInt(pageString);
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
    getPageNum() {
      return this.$route.query.page || "1";
    },
  },
  methods: {
    nextPageUrl() {
      this.page = this.$route.query.page || "1";
      this.page++;
      this.$router.push(`/jobs/results?page=${this.page}`);
    },
  },
  async mounted() {
    this.page = this.$route.query.page || 1;
    const url = "http://localhost:3000/jobs";
    try {
      const response = await axios.get(url);
      this.jobs = response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
