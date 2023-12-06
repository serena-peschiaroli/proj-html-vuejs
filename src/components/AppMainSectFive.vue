<script>
import AppMainTitle from './AppMainTitle.vue';
import AppButtonComponent from './AppButtonComponent.vue';


export default {
    components: {
        AppMainTitle,
        AppButtonComponent,
      

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
        <div class="container-lg">
            <div class="cta">
                <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />
            


            </div>
            
            <div class="btn-wrapper">

                    <AppButtonComponent variant="outlined-grey">click me</AppButtonComponent>
                    <AppButtonComponent variant="outlined-grey">click me</AppButtonComponent>

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

    .container-lg {
        padding: 3rem;
        
    
        .cta {
            @include flex(column, center, center, wrap);
            margin-top: 2rem;
        


        }

        .btn-wrapper {
            width: 60%;
            margin: 0 auto;
            padding: 2rem;
            @include flex(row, space-between, center, nowrap);
            
        }
    }
}

</style>