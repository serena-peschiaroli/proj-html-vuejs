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
            mainTitle: 'Change a life today',
            subTitle: "As long as poverty, injustice & inequality persist, none of us can truly rest. It doesn't take much to change a life. Get in touch and start making the difference",
            
        }
    }
}

</script>

<template>
    <section>
        <div class="container-lg">
            <div class="cta">
                <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" variant="centered" />
            


            </div>
            
            <div class="btn-wrapper">

                    <AppButtonComponent variant="outlined-grey">VOLUTEER</AppButtonComponent>
                    <AppButtonComponent variant="outlined-grey">DONATE NOW</AppButtonComponent>

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
        padding: 5rem;
        
        
    
        .cta {
            @include flex(column, center, center, wrap);
            
        
            width: 80%;
            margin: 0 auto;
                 


        }

        .btn-wrapper {
            width: 90%;
            margin: 0 auto;
            padding: 2rem;
            @include flex(row, center, center, nowrap);
            gap: 5rem;;
            
        }
    }
}

</style>