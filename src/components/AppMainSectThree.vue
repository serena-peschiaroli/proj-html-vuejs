<script>
import AppMainTitleVue from './AppMainTitle.vue';

export default {
    components: {
        AppMainTitleVue,
    },
    data() {
        return {
            mainTitle: 'Main Title',
            subTitle: 'Sub Title',
        }
    },
}

</script>

<template>
    <section>
        <div class="container-xl">
            <AppMainTitleVue :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />

        </div>
        <div class="red-stripe">
            <h1>other causes</h1>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

@use "../style/partial/mixin" as *;

section{
    .container-xl{


    }

    .red-stripe{

        width: 100%;
        min-height: 4rem;
        background-color: $material-sienna;
        color: white;
                h1 {
                    text-align: center;
                }
    }

}


</style>
