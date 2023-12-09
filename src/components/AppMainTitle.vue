<script>
export default {
    props: {
        mainTitle: String,
        subTitle: String,
       variant: {
        type: String,
        default: 'app-title',
        validator:(value) =>
        ['centered', 'start', 'no-hr']
       }
       

    },
    computed: {
        titleClass() {
            return {
                'is-centered' : this.variant === 'centered',
                'is-start' : this.variant === 'start',
                'without-hr' : this.variant === 'no-hr',
            };
        },


        uppercasemainTitle: function() {
      return this.mainTitle.toUpperCase();
        }
    }
}

</script>


<template>
    <div :class="titleClass">
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
    gap: 0.5;
    padding: 1rem;
    

    .golden-title{
       
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    hr {
        width: 10%;
        border-top: 2px solid $primary-gold;
    }

    h3 {
        margin-top: 0.5rem;
    }

  
}

.is-centered {
    @include flex(column, center, center, wrap);

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
       margin-bottom: 1rem;
       
   }
}


.is-start {
    @include flex(column, flex-start, flex-start, wrap);

    .golden-title{
       
       font-size: 1.5rem;
   }

   hr {
       width: 10%;
       border-top: 2px solid $primary-gold;
   }

   h3 {
      
       margin-bottom: 0.5rem;
   }

}

.without-hr {
    @include flex(column, center, center, wrap);
    padding: 1rem;
    .golden-title{
       
       font-size: 2.5rem;
       margin-bottom: 0.5rem;
       color: $primary-gray;
   }

   hr {
       display: none;
   }

   h3 {
       margin-top: 0.5rem;
       margin-bottom: 0.5rem;
       font-size: 0.8rem;
       color: $primary-gray;
   }
  
}



</style>