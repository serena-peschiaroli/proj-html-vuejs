import { reactive } from "vue";

export const store = reactive ({
    articles: [],
    apiUrl: 'https://newsapi.org',
    source: '/v2/everything?',
    domains: 'domains=',
    domainType: 'unicef.org',
    apiKey: '&apiKey=bdddb8ec8e0546beb8dd92284d5a2a5e',
});