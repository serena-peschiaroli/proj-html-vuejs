<script>
import AppButtonComponent from './AppButtonComponent.vue';
export default {
    props: {
        text: String,
        specialColorCondition: Boolean,
    },
    components:{
        AppButtonComponent
    },
    computed: {
        uppercaseText: function() {
      return this.text.toUpperCase();
        }
    }
}

</script>

<template>
    
    <ul>
        <li>
           <a :class="{ 'special-color': specialColorCondition }" :href="` /${text }`"> {{ uppercaseText }} </a> 
        </li>
    </ul>
    

    

</template>

<style lang="scss" scoped >
@use "../style/partial/_mixin.scss" as *;
@use "../style/partial/variables" as *;

ul {
    list-style-type: none;

    li {
        &::after{
            border-bottom: 2px solid $primary-gold;
        }
    }
   
    
    a {
        text-decoration: none;
        
   
        color: $primary-gold;

        &.special-color {
                    color: $primary-gray;
        }
    

    
    }




    
}




</style>