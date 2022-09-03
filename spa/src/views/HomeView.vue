<template>
  <hero></hero>
  <spotlight></spotlight>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src
import Hero from "@/components/JobSearch/Hero.vue";
import Spotlight from "@/components/JobSearch/Spotlight.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
    Spotlight
  }
});
</script>
