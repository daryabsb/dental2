<template>
  <img
    :src="imageSrc"
    alt="pimage"
    class="w-8 h-8 object-contain rounded-3xl"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageSrc: "http://127.0.0.1:8000/media/uploads/1614670147289.jpg",
    };
  },
};
</script>