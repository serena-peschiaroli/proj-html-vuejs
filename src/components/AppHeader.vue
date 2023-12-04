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
            ]
        }
    }
    
}

</script>

<template>
    <header>
        <nav>
            logoHere
            <div>
                <AppHeaderItemLinkVue v-for="item in navMenu" :key="item.id" :text="item.text" />
                
            </div>
        </nav>

    </header>

</template>

<style lang="scss" scoped>

</style>