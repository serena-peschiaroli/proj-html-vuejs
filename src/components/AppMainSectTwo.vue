<script>
import AppMainTitle from './AppMainTitle.vue'

export default {
    components: {
        AppMainTitle,
    },
    data() {
        return {
            mainTitle: "Main Title",
            subTitle: "sub title"
        }
    }

}

</script>

<template>

    <section>

    
            <div class="container-xl">
                <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />
                
                
            
                <div class="list-item">

                </div>
            </div>
   </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/variables" as *;
@use "../style/partial/mixin" as *;

section {
    background-image: url(../img/home-content-bg-2.jpg);
    background-position: center;
    background-size: cover;
    color: white;
}

</style>