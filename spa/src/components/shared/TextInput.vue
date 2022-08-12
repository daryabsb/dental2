<template>
	<input
		type="text"
		:value="value"
		:placeholder="placeholder"
		class="w-full text-lg font-normal focus:outline-none"
		@input="handleInput"
	/>
</template>

<script>
	export default {
		name: "TextInput",
		props: {
			placeholder: {
				type: String,
				required: false,
				default: "",
			},
			value: {
				type: String,
				required: true,
			},
		},
		methods: {
			handleInput(e) {
				this.$emit("handleInput", e.target.value);
			},
		},
	};
</script>