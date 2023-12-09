<script>
import AppHeaderItemLinkVue from './AppHeaderItemLink.vue';
import AppButtonComponent from './AppButtonComponent.vue';
import AppMainTitle from './AppMainTitle.vue';




export default {
    components: {
    AppHeaderItemLinkVue,
    AppButtonComponent,
    AppMainTitle,
   
},
    data() {
        return {
            mainTitle: 'make a difference',
            subTitle: 'as long as poverty, ingiustice & inequality persist, non of us can truly rest',
            navMenu: [
                {id: 1, text: 'Home', specialColorCondition: false},
                {id: 2, text: 'Mission', specialColorCondition: true},
                {id: 3, text: 'Causes', specialColorCondition: true},
                {id: 4, text: 'Journal', specialColorCondition: true},
            ], 
        };
    },
    computed: {
        uppercasetitle: function() {
      return this.title.toUpperCase();
        }
    },
    
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
                    <AppHeaderItemLinkVue v-for="(item, index) in navMenu" :key="item.id" :text="item.text" :specialColorCondition="index >= navMenu.length - 3"/>
                    <AppButtonComponent variant="no-margin-golden">DONATE</AppButtonComponent>
                    
                </div>
           </div>
           
            <div class="hero">
                <AppMainTitle variant="no-hr" :mainTitle="mainTitle" :subTitle="subTitle"  />
                <div class="btn-wrapper">
                    <AppButtonComponent variant="outlined-grey">OUR MISSION</AppButtonComponent>
                    <AppButtonComponent variant="outlined-golden">DONATE NOW</AppButtonComponent>
                </div>
            </div>
           
 
        </div>
        
    </header>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;


header {
    background-image: url(../img/home-page-slider.jpg);
    background-position: center;
    background-size: cover;
    padding-bottom: 3rem;

    .container-xl {
        .nav {
            @include flex(row, space-between, center, nowrap);
            padding-top: 1rem;
            padding-bottom: 2rem;
            margin-bottom: 2rem ;
            .logo {
                @include flex(row, flex-start, center, nowrap);
                font-size: 0.8rem;

                img {
                    width: 70%;
                }
                
                
            }

            .nav-items {
                @include flex(row, center, center, nowrap);
                gap: 2rem;
                font-size: 1rem;


                

            }
        
            
        }


        .hero {
            margin: 0 auto;
            padding: 1rem;

            @include flex(column, center, center, wrap);

            .btn-wrapper {
                padding: 1rem;
                margin: 1rem 0.5rem;
                @include flex(row, space-between, center, nowrap);
                gap: 2rem,
            }

        }

    }

}
</style>