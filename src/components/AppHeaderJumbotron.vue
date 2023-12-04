<script>
export default {

}

</script>

<template>

    <div class="container-sm">

        <h1 class="jumbo-title">
            MAKE A DIFFERENCE
        </h1>
        <h3 class="jumbo-subtitle"> Subtitles lorem ipsum</h3>

        <div class="btn-wrapper">
            <h4>Btn here </h4> 
            <h4> btn here </h4>
        </div>

        

    </div>

</template>

<style lang="scss" scoped>
@use "../style/partial/_mixin.scss" as *;
@use "../style/partial/variables" as *;


.container-sm {
    height: 16rem;
    color: $primary-white;

    .jumbo-title, .jumbo-subtitle {
        text-align: center;
        padding: 1rem;
        margin-top: 2rem;

    }
}

.btn-wrapper {
    @include flex(row, center, center, nowrap);
    gap: 1rem;
}

</style>