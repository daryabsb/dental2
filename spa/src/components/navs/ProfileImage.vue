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
      imageSrc:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE961C2qfLUdA/profile-displayphoto-shrink_800_800/0/1614670147289?e=1665619200&v=beta&t=1Pvr4y-Vc1hP8I60gYYzcgu_rU9tqjinCWE4vb7H8l0",
    };
  },
};
</script>