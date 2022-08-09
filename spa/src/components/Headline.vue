<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next job @Aron</h2>
  </section>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {
      sample: "Hello",
    };
  },
  created() {
    console.log("I've been created! Look: ", this.sample);
  },
};
</script>