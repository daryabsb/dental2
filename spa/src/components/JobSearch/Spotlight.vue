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

<script lang="ts">
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";

import axios from "axios";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: "Spotlight",
  setup() {
    const spotlights = ref<Spotlight[]>([]);

    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL;
      const url = `${baseUrl}/spotlights/`;
      try {
        const response = await axios.get<Spotlight[]>(url);
        spotlights.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(getSpotlights);

    return {
      spotlights
    };
  }
});
</script>
