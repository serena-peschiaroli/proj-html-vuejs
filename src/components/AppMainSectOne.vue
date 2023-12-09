<script>

import AppMainTitle from "./AppMainTitle.vue";
import AppMainListElement from "./AppMainListElement.vue";
import AppButtonComponent from "./AppButtonComponent.vue";

export default {
    components: {
    
        AppMainTitle,
        AppMainListElement,
        AppButtonComponent,
       
    },
    data() {
        return {
            listItems: [
                { iconClass: 'fa-regular fa-heart', number: '2032', text: 'Volunteers worldwide' },
                { iconClass: 'fa-solid fa-globe', number: '132', text: 'Active Project' },
                { iconClass: 'fa-solid fa-dollar-sign', number: '3.8M', text: 'Donated' },
            ],
            mainTitle: ' Every Moment Counts',
           
        }
    }

}

</script>

<template>
    <section class="section-one">
        <div class="row">
            <div class="col-l">
                <AppMainTitle :mainTitle="mainTitle" variant="start"/>
                
                
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem animi ipsa et necessitatibus nesciunt reiciendis veritatis mollitia aliquid. </p>
                <p>Temporibus doloremque, officia aperiam aspernatur fugit sint maxime optio beatae hic. Maiores.</p>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ex illum, accusantium dolore, amet, consequatur</p>
                <AppButtonComponent variant="golden">OUR MISSION</AppButtonComponent>

            </div>
            <div class="col-s">

                <AppMainListElement v-for="item in listItems" :key="item.number" :iconClass="item.iconClass" :number="item.number" :text="item.text" variant='isRow' :showButton ="false" />


            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;

.section-one {
    background-color: $primary-white;
    color: black;

    .row {
        @include flex(row, center, stretch, nowrap);

        .col-l {
            width: 70%;
            padding: 5rem;
            text-align: left;
        }
        .col-s {
            width: 30%;
            background-image: url(../img/home-content-bg-1.jpg);
            background-position: center;
            background-size: cover;
            color: $primary-white;
            padding: 1.5rem;
        }
    }
}

</style>