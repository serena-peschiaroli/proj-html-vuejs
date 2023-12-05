<script>
export default {
    props: {
        image: String,
        text: String,

    }

}
</script>

<template>

    <div class="img-element">
        <div class="photo">
            <img :src="image" alt="Photo">
        </div>
        <div class="text">
             <p>{{ text }}</p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;

.img-element {
    @include flex(row, center, center, nowrap);
    .photo {
        width: 100%;
    }
}

</style>