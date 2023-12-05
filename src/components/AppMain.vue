<script>
import AppMainSectOneVue from './AppMainSectOne.vue';
import AppMainSectTwo from './AppMainSectTwo.vue';
import AppMainSectThree from './AppMainSectThree.vue';

export default {
    components: {
        AppMainSectOneVue,
        AppMainSectTwo,
        AppMainSectThree,
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

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/variables" as *;
@use "../style/partial/mixin" as *;

</style>