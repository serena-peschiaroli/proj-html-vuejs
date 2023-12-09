<script>
import AppMainTitleVue from './AppMainTitle.vue';
import AppSectThreePhotoList from './AppSectThreePhotoList.vue';
import AppButtonComponent from './AppButtonComponent.vue';

export default {
    components: {
        AppMainTitleVue,
        AppSectThreePhotoList,
        AppButtonComponent
    },
    data() {
        return {
            mainTitle: 'Recent causes',
            subTitle: 'We run project in over 30 countries in 5 continents',
            imageListElements: [
                {image: 'avada-charity-shelter-featured-200x150.jpg'},
                {image: 'avada-charity-farming-featured-200x150.jpg'},
                {image: 'avada-charity-vaccines-featured-200x150.jpg'},
                {image: 'avada-charity-fair-trade-featured-200x150.jpg'},

            ],
            
        }
    },
}

</script>

<template>
    <section>
        <div class="container-xl">
            <AppMainTitleVue :mainTitle="mainTitle" :subTitle="subTitle" variant="centered" />

            <div class="list-element">
                <AppSectThreePhotoList v-for="(image, index) in imageListElements" :isColumn="false" :key="index" :image="image.image" />
            </div>

        </div>
        <div class="red-stripe">
            <AppButtonComponent variant="red">OTHER</AppButtonComponent>
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
            @include flex(row, space-between, center, nowrap);
            
            padding-bottom: 1rem;
            margin-top: 1rem;
        }


    }

    .red-stripe{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;

        width: 100%;
        height: 4rem;
        background-color: $material-sienna;
        
    }

}


</style>
