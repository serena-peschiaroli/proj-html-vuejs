<script>
    export default {
        props: {
            iconClass: String,
            number: String,
            text: String,
            isAcolumn: Boolean,
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
        </div>
      </div>
</template>

<style lang="scss" scoped>
    @use "../style/general.scss" as *;
   
    @use "../style/partial/_mixin.scss" as *;
    @use "../style/partial/variables" as *;


    .list-element {
        @include flex(column, center, center, wrap);
        padding-top: 1rem;

        .icon-number {
            font-size: 1.8rem;
            gap: 0.5rem;
            padding: 0.5rem;



            &.isrow {
            @include flex(row, center, center, nowrap);
             }
             &.isColumn {
            @include flex(column, center, center, wrap);

            }
            
        }
       
       
    }
</style>