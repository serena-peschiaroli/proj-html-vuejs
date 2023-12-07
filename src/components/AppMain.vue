<script>
import AppMainSectOne from './AppMainSectOne.vue';
import AppMainSectTwo from './AppMainSectTwo.vue';
import AppMainSectThree from './AppMainSectThree.vue';
import AppMainSectFour from './AppMainSectFour.vue';
import AppMainSectFive from './AppMainSectFive.vue';


import { store } from '../store';

export default {
    components: {
        AppMainSectOne,
        AppMainSectTwo,
        AppMainSectThree,
        AppMainSectFour,
        
        AppMainSectFive,
        
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
    <AppMainSectFive />
   


</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;

.hidden {
    display: none;
}

</style>