<script>
export default {
    props: {
        title: String,
        subtitle: String,
    },
    
    
    computed: {
        uppercasetitle: function() {
      return this.title.toUpperCase();
        }
    }
}


</script>

<template>

    <div class="container-sm">

        <h1 class="title">
            {{ uppercasetitle}}
        </h1>
        <h3 class="subtitle"> {{ subtitle}}</h3>

        <div class="btn-wrapper">
            <h4>Btn here </h4> 
            <h4> btn here </h4>
        </div>

        

    </div>

</template>

<style lang="scss" scoped>
@use "../style/partial/_mixin.scss" as *;
@use "../style/partial/variables" as *;


.container-sm {
    height: 16rem;
    color: $primary-white;

    .title, .subtitle {
        
        text-align: center;
        padding: 1rem;

    }
}

.btn-wrapper {
    @include flex(row, center, center, nowrap);
    gap: 1rem;
}

</style>