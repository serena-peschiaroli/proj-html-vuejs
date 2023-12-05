<script>
import AppMainTitleVue from './AppMainTitle.vue';
import AppSectThreePhotoList from './AppSectThreePhotoList.vue';

export default {
    components: {
        AppMainTitleVue,
        AppSectThreePhotoList,
    },
    data() {
        return {
            mainTitle: 'Main Title',
            subTitle: 'Sub Title',
            imageListElements: [
                {image: 'avada-charity-shelter-featured-200x150.jpg'},
                {image: 'avada-charity-farming-featured-200x150.jpg'},
                {image: 'avada-charity-vaccines-featured-200x150.jpg'},
                {image: 'avada-charity-fair-trade-featured-200x150.jpg'},

            ],
        }
    },
    methods: {
        getImagePath(image) {
            return `/src/img/${image}`;
        }
    }
}

</script>

<template>
    <section>
        <div class="container-xl">
            <AppMainTitleVue :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />

            <div class="list-element">
                <AppSectThreePhotoList v-for="(image, index) in imageListElements" :key="index" :image="getImagePath(image.image)" />
            </div>

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
        padding: 2rem;

        .list-element {
            @include flex(row, center, center, nowrap);
            gap: 1rem;
            padding-bottom: 1rem;
            margin-top: 1rem;
        }


    }

    .red-stripe{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 4rem;
        background-color: $material-sienna;
        color: white;
                h1 {
                    text-align: center;
                    padding: 1rem;
                }
    }

}


</style>
