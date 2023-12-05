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

    <div :class="['img-element', isColumn? 'isColumn' : 'img-element', isSelectedArticle ? 'selectedArticle' : 'img-element' ]">
        <div class="photo">
            <img :src="getImagePath(image)" alt="Photo">

        </div>
        <div class="text">
             <p> {{ title  }}</p>
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
            width: 40%;
            aspect-ratio: 1;
        }
        .text {
            @include flex(column, center, flex-start, wrap);
            gap: 1rem;
        }
        
    }
    &.selectedArticle {
        @include flex (column, center, center, wrap);
        .photo{
            width: 300px;
            height: 400px;
        }
        .text {
            @include flex(column, column, center, wrap);
        }

        

    }
}

</style>