<script>
import AppMainSectOneVue from './AppMainSectOne.vue';
import AppMainSectTwo from './AppMainSectTwo.vue';

export default {
    components: {
        AppMainSectOneVue,
        AppMainSectTwo,
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

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/variables" as *;
@use "../style/partial/mixin" as *;

</style>