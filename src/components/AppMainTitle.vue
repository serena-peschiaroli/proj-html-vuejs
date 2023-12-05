<script>
export default {
    props: {
        mainTitle: String,
        subTitle: String,
        isCentered: Boolean,
       

    },
    computed: {
        uppercasemainTitle: function() {
      return this.mainTitle.toUpperCase();
        }
    }
}

</script>


<template>
    <div :class="['app-title', isCentered? 'centered' : 'start']">
        <h1 class="golden-title"> {{ uppercasemainTitle }}</h1>
        <hr>
    
        <h3> {{ subTitle }} </h3>
    </div>


</template>

<style lang="scss" scoped>

@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;
.app-title {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
    gap: 1rem;
    padding: 1rem;
    

    .golden-title{
       
        font-size: 1.5rem;
    }

    hr {
        width: 10%;
        border-top: 2px solid $primary-gold;
    }

    h3 {
        margin-top: 1rem;
    }

    &.start {
        justify-content: flex-start;
        align-items: flex-start;
    }

    &.centered {
        justify-content: center;
        align-items: center;
    }
  
}


</style>