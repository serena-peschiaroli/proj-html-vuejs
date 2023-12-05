<script>
import AppMainSectOneVue from './AppMainSectOne.vue';
import AppMainSectTwo from './AppMainSectTwo.vue';
import AppMainSectThree from './AppMainSectThree.vue';
import AppMainSectFour from './AppMainSectFour.vue';

export default {
    components: {
        AppMainSectOneVue,
        AppMainSectTwo,
        AppMainSectThree,
        AppMainSectFour,
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

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/variables" as *;
@use "../style/partial/mixin" as *;

</style>