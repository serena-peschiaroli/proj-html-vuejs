<script>
import AppButtonComponent from './AppButtonComponent.vue';
    export default {
        props: {
            iconClass: String,
            number: String,
            text: String,
            isAcolumn: Boolean,
            showButton: {
                type: Boolean,
                default: true,
            },
        },
        components: {
            AppButtonComponent,
        }

    }
</script>

<template>
    <div class="list-element">
        <div :class="['icon-number', isAcolumn? 'isColumn' : 'isrow']">
          <i :class="iconClass"> </i>
          <span>{{ number }}</span>
        </div>
        <div class="text">
          <p>{{ text }}</p>

          <AppButtonComponent v-if="showButton" variant="golden">LEARN MORE</AppButtonComponent>
        </div>
      </div>
</template>

<style lang="scss" scoped>
    @use "../style/general.scss" as *;
   
    @use "../style/partial/_mixin.scss" as *;
 


    .list-element {
        @include flex(column, center, center, wrap);
        padding-top: 1rem;

        .icon-number {
            font-size: 1.5rem;
            gap: 0.5rem;
            padding: 0.5rem;



            &.isrow {
            @include flex(row, center, center, nowrap);
             }
             &.isColumn {
            @include flex(column, center, center, wrap);
              gap: 2rem;
              
              
              i {
                font-size: 3rem;
                color: $primary-gold;
              }
              span{
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
              }
              

            }
            
        }

        .text {
            @include flex(column, center, center, wrap);
            font-size: 0.8rem;
            
        }
       
       
    }
</style>