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
                { iconClass: "fa-solid fa-droplet", number: 'Clean Water', text: 'Lorem Ipsum Dolor si Amet, Lorem ipsum dolor si amet'},
                { iconClass:'fa-solid fa-stethoscope', number:' Vaccination', text: 'Lorem Ipsum Dolor si Amet, Lorem ipsum dolor si amet' },
                { iconClass: 'fa-solid fa-graduation-cap', number: 'Education', text: 'Lorem Ipsum Dolor si Amet, Lorem ipsum dolor si amet'},
                { iconClass: 'fa-solid fa-wheat-awn', number: 'Farming', text: 'Lorem Ipsum Dolor si Amet, Lorem ipsum dolor si amet'},
            ],
            mainTitle: "our values",
            subTitle: "Think big. Act Bigger"
        }
    }

}

</script>

<template>

    <section>

    
            <div class="container-xl">
                <AppMainTitle variant="centered" :mainTitle="mainTitle" :subTitle="subTitle"  />
                
                
            
                <div class="list-item">
                    <AppMainListElement  v-for="item in listItems" :key="item.index" :iconClass="item.iconClass" :number="item.number" :text="item.text" variant="isColumn" />
                    

                

                    

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
        gap: 5rem;
        padding-bottom: 4rem;
    }
}

</style>