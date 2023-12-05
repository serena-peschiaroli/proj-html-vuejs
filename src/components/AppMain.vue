<script>
import AppMainSectOneVue from './AppMainSectOne.vue';
import AppMainSectTwo from './AppMainSectTwo.vue';
import AppMainSectThree from './AppMainSectThree.vue';
import AppMainSectFour from './AppMainSectFour.vue';
import AppMainSectFive from './AppMainSectFive.vue';
import AppFooter from './AppFooter.vue';

export default {
    components: {
        AppMainSectOneVue,
        AppMainSectTwo,
        AppMainSectThree,
        AppMainSectFour,
        AppMainSectFive,
        AppFooter
    },
    data() {
        return {

        }
    }
}

</script>

<template>
    <AppMainSectOneVue />
    <AppMainSectTwo />
    <AppMainSectThree />
    <AppMainSectFour />
    <AppMainSectFive />
    <AppFooter />


</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;

</style>