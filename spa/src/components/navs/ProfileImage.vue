<template>
	<img
		:src="imageSrc"
		alt="pimage"
		class="w-8 h-8 object-contain rounded-3xl"
	/>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "ProfileImage",
		setup() {
			const imageSrc =
				"http://127.0.0.1:8000/media/uploads/1614670147289.jpg";

			return { imageSrc };
		},
	});
</script>