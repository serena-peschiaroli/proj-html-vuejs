<script>
import AppMainTitle from './AppMainTitle.vue'
import AppMainListElement from './AppMainListElement.vue';
import AppButtonComponent from './AppButtonComponent.vue';

export default {
    components: {
        AppMainTitle,
        AppMainListElement,
        AppButtonComponent,
    },
    data() {
        return {
            listItems: [
                { iconClass: "fa-solid fa-droplet", number: 'text', text: 'text'},
                { iconClass:'fa-solid fa-stethoscope', number:' text', text: 'text' },
                { iconClass: 'fa-solid fa-graduation-cap', number: 'text', text: 'text'},
                { iconClass: 'fa-solid fa-wheat-awn', number: 'text', text: 'text'},
            ],
            mainTitle: "Main Title",
            subTitle: "sub title"
        }
    }

}

</script>

<template>

    <section>

    
            <div class="container-xl">
                <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />
                
                
            
                <div class="list-item">
                    <AppMainListElement  v-for="item in listItems" :key="item.index" :iconClass="item.iconClass" :number="item.number" :text="item.text" :isAcolumn="true" />
                    

                

                    

                </div>
            </div>
   </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/variables" as *;
@use "../style/partial/mixin" as *;

section {
    background-image: url(../img/home-content-bg-2.jpg);
    background-position: center;
    background-size: cover;
    color: white;
    padding: 1rem;


    .list-item {
        @include flex(row, space-between, center, nowrap);
        padding: 2rem,
    }
}

</style>