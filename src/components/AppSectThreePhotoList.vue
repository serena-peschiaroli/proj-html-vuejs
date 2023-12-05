<script>
export default {
    props: {
        image: String,
        title: String,
        text: String,
        isColumn: Boolean,
        isSelectedArticle: Boolean,

    },
    methods: {
        getImagePath(image) {
            return `/src/img/${image}`;
        }
    }

}
</script>

<template>

    <div :class="['img-element', isColumn? 'isColumn' : 'img-element', isSelectedArticle ? 'selectedArticle' : '' ]">
        <div class="photo">
            <img :src="getImagePath(image)" alt="Photo">

        </div>
        <div class="text">
             <p class="title"> {{ title  }}</p>
             <p>{{ text }}</p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;

.img-element {
    @include flex(row, center, center, nowrap);
    .photo {
        width: 100%;
    }
    &.isColumn {
        @include flex(row, center, center, nowrap);

        .photo {
            width: 70px;
            aspect-ratio: 1;
        }
        .text {
            @include flex(column, center, flex-start, wrap);
            font-size: 0.8rem;
            line-height: 1.5rem;
            .title {
                color: $primary-gold;
                font-size: 0.9rem;
                font-weight: bold
            }
        }
        
    }
    &.selectedArticle {
        @include flex (column, space-between, center, wrap);
        
        .photo img{
            width: 300px;
            margin-bottom: 0.5rem;
        }
        .text {
            @include flex(column, column, center, wrap);
            line-height: 1.5rem;
            font-size: 0.9rem;
            .title {
                color: $primary-gold;
                font-size: 1rem;
                font-weight: bold;
            }

        }

        

    }
}

</style>