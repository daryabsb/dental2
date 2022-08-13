<template>
  <hero></hero>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/JobSearch/Hero.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    JobSearchForm,
  },
};
</script>
