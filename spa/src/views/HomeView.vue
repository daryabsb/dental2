<template>
  <job-search-form></job-search-form>
</template>

<script>
// @ is an alias to /src
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "HomeView",
  components: {
    JobSearchForm,
  },
};
</script>
