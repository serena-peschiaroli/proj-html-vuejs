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
    <ul>
        <li>
           <a :href="` /${text }`"> {{ uppercaseText }} </a> 
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
    

    
    }




    
}




</style>