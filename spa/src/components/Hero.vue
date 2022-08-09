<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700 text-center">
          1 column
        </div>
        <div class="col-start-2 col-span-5 border border-blue-700 text-center">
          <headline></headline>
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700 text-center">
          5 columns
        </div>
        <div class="col-start-12 col-span-1 border border-blue-700 text-center">
          1 column
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline.vue";

export default {
  name: "Hero",
  components: {
    Headline,
  },
  //   beforeCreate() {
  //     console.log("component is about to be created!");
  //   },
  //   created() {
  //     console.log("component has been created!");
  //   },
  //   beforeMount() {
  //     console.log("component is about to be mounted!");
  //   },
  //   mounted() {
  //     console.log("component has been mounted!");
  //   },
};
</script>