<script>
import AppButtonComponent from './AppButtonComponent.vue';
    export default {
        props: {
            iconClass: String,
            number: String,
            text: String,
            variant: {
              type: String,
              default: 'icon-number',
              validator:(value) =>
              ['default', 'isColumn', 'isRow'].includes(value),
            },

            showButton: {
                type: Boolean,
                default: true,
            },
        },
        components: {
            AppButtonComponent,
        },
        computed: {
          classIcon(){
            return {
              'list-element' : this.variant === 'default',
              'is-column': this.variant === 'isColumn', 
              'is-row': this.variant === 'isRow',
            }
          }
        }

    }
</script>

<template>
    <div :class="classIcon">
        <div class="icon-number">
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
            
        }

        .text {
            @include flex(column, center, center, wrap);
            font-size: 0.8rem;
            
        }
       
       
    }



    .is-row {

      @include flex(column, center, center, wrap);
      padding-top: 1rem;

      .icon-number {
        @include flex(row, center, center, nowrap);
        

        font-size: 1.5rem;
        gap: 0.5rem;
        padding: 0.5rem;

        i {
          font-size: 2rem;
        }
        span {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

      }

      .text {
            @include flex(column, center, center, wrap);
            font-size: 0.8rem;
            
        }



    }

    .is-column {

      @include flex(column, center, center, wrap);
        padding-top: 1rem;
        gap: 1rem;
        

        .icon-number {
          @include flex(column, center, center, nowrap);


          font-size: 1.5rem;
          gap: 1rem;
          padding: 0.5rem;

          i{
            font-size: 3rem;
            color: $primary-gold;
            margin-bottom: 1rem
          }
        }

        .text {
          @include flex(column, center, center, wrap);
          text-align: center;
          line-height: 1.5rem;

        }



    }
</style>