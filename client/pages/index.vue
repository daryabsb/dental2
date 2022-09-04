<template>
  <h1>Welcome {{welcome}}</h1>
</template>

<script>
export default {
    setup() {
        const welcome = "Nuxt"

        return{welcome}
    },
}
</script>
