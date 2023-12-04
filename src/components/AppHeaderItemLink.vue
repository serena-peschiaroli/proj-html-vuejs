<script>
export default {
    props: {
        text: String,
    },
    computed: {
        uppercaseText: function() {
      return this.text.toUpperCase();
        }
    }
}

</script>

<template>

    <a :href="` /${text }`"> {{ uppercaseText }} </a>

</template>

<style lang="scss" scoped >

</style>