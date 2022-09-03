<template>
  <div class="w-full border-b border-solid border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title">Sample Title</slot>
      <slot name="subtitle"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. impedit
        eum.</slot
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderContainer",
  setup() {}
});
</script>
