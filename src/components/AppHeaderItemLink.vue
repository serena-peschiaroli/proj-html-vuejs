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
        @include flex();
    }
    
    a {
   
    color: $primary-gold;
    @include flex();

    
    }




    
}




</style>