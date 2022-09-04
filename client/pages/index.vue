<template>
  Welcome {{welcome}}
</template>

<script>
export default {
    setup() {
        const welcome = "Nuxt"

        return{welcome}
    },
}
</script>
