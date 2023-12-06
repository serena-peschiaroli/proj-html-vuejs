<script >
import axios from "axios";
import { store } from "./store";

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    data() {
        return {
            store,

        }
    },
    components: {
        AppHeader,
        AppMain,
    },
    methods: {
        getArticles () {

            this.store.loading = true;
            const articleApiUrl = `${this.store.apiUrl}${this.store.source}${this.store.domains}${this.store.domainType}${this.store.apiKey}`;
            console.log(articleApiUrl);
            axios.get(articleApiUrl)
            .then((articleResp) => {
                this.store.articles = articleResp.data.articles;
                console.log(articleResp.data.articles);
                this.store.loading = false;
            });
        
        },
    },
    created() {
    
    this.getArticles();
    }

}

</script>

<template>
    <AppHeader />
    <AppMain />
    
  
</template>

<style scoped lang="scss">


</style>
