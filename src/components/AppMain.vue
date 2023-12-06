<script>
import AppMainSectOne from './AppMainSectOne.vue';
import AppMainSectTwo from './AppMainSectTwo.vue';
import AppMainSectThree from './AppMainSectThree.vue';
import AppMainSectFour from './AppMainSectFour.vue';
import AppMainSecFourTesting from './AppMainSecFourTesting.vue';
import AppMainSectFive from './AppMainSectFive.vue';
import AppFooter from './AppFooter.vue';

import { store } from '../store';

export default {
    components: {
        AppMainSectOne,
        AppMainSectTwo,
        AppMainSectThree,
        AppMainSectFour,
        AppMainSecFourTesting,
        AppMainSectFive,
        AppFooter
    },
    data() {
        return {
            store,

        }
    }
}

</script>

<template>
    <AppMainSectOne />
    <AppMainSectTwo />
    <AppMainSectThree />
    <AppMainSectFour />
    <AppMainSecFourTesting  :items="store.articles" class="hidden" />
    <AppMainSectFive />
    <AppFooter />


</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;

.hidden {
    display: none;
}

</style>