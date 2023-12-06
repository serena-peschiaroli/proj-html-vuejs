<script>
import AppMainTitle from './AppMainTitle.vue';


export default {
    components: {
        AppMainTitle,
      

    },
    data() {
        return{
            mainTitle: 'Main Title',
            subTitle: 'sub Title',
            
        }
    }
}

</script>

<template>
    <section>
        <div class="container-xs">
            <div class="cta">
                <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />


            </div>
            
            
            

        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;

section {
    background-image: url(../img/home-footer.jpg);
    background-position: center;
    background-size: cover;
    color: white;
    margin-top: 2rem;

    .container-xs {
        padding: 1rem;
        
    }
    .cta {
        margin-top: 2rem;
    }
}

</style>