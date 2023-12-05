<script>
import AppMainTitle from './AppMainTitle.vue';
import AppHeaderJumbotron from './AppHeaderJumbotron.vue';

export default {
    components: {
        AppMainTitle,
        AppHeaderJumbotron,

    },
    data() {
        return{
            mainTitle: 'Main Title',
            subTitle: 'sub Title',
            title: 'title',
            subtitle: 'lorem ipsum',
        }
    }
}

</script>

<template>
    <section>
        <div class="container-xs">
            <div class="title">
                <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />
            </div>
            <div class="cta">
               <AppHeaderJumbotron :title="title" :subtitle="subtitle" /> 
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
    .title {
        margin-top: 2rem;
    }
}

</style>