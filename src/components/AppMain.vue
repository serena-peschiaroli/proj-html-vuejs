<script>
import AppMainSectOne from './AppMainSectOne.vue';
import AppMainSectTwo from './AppMainSectTwo.vue';
import AppMainSectThree from './AppMainSectThree.vue';
import AppMainSectFour from './AppMainSectFour.vue';
import AppMainSectFive from './AppMainSectFive.vue';
import AppFooter from './AppFooter.vue';

export default {
    components: {
        AppMainSectOne,
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
    <AppMainSectOne />
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