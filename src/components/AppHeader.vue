<script>
import AppHeaderItemLinkVue from './AppHeaderItemLink.vue';


export default {
    components: {
        AppHeaderItemLinkVue
    },
    data() {
        return {
            navMenu: [
                {id: 1, text: 'Home'},
                {id: 2, text: 'Mission'},
                {id: 3, text: 'Causes'},
                {id: 4, text: 'Journal'},
            ], 
        }
    }
    
}

</script>

<template>
    <header>
        <div class="container-xl"> 
           <div class="nav">
                <div class="logo">
                    <img src="../img/avada-charity-logo.png" alt="">
                </div>
                
                <div class="nav-items">
                    <AppHeaderItemLinkVue v-for="item in navMenu" :key="item.id" :text="item.text" />
                    
                </div>
           </div>
 
        </div>
        
    </header>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/variables" as *;
@use "../style/partial/mixin" as *;


header {
    background-image: url(../img/home-page-slider.jpg)
}
.nav {
    @include flex();
    .logo {
        @include flex(row, flex-start, center, nowrap);
        font-size: 0.8rem;
        
        
    }

    .nav-items {
        @include flex();
        gap: 1rem;
        font-size: 0.8rem;
    }
}


</style>