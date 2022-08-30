<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <!-- <slot :spotlight="spotlight"></slot> -->
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import { ref, onMounted } from "vue";

import axios from "axios";
export default {
  name: "Spotlight",
  setup() {
    const spotlights = ref([]);

    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL;
      const url = `${baseUrl}/spotlights/`;
      try {
        const response = await axios.get(url);
        spotlights.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(getSpotlights);

    return {
      spotlights,
    };
  },
};
</script>