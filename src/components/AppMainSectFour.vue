<script>
import AppMainTitle from './AppMainTitle.vue';
import AppSectThreePhotoList from './AppSectThreePhotoList.vue';

export default {
    components: {
    AppMainTitle,
    AppSectThreePhotoList
},
    data() {
        return {
            mainTitle: 'Main Title',
            subTitle: 'Sub title',
            listItem: [
                {image:'photo-1444664597500-035db93e2323-177x142.jpg', title: 'Title title one', text: 'Lorem Ipsum dolor sit amet'},
                {image:'photo-1447430617419-95715602278e-177x142.jpg', title: 'Title title two', text: 'Lorem Ipsum dolor sit amet'},
                {image:'photo-1460230525622-630fe3294cd7-177x142.jpg', title: 'Title title three', text: 'Lorem Ipsum dolor sit amet'},
                {image:'photo-1460600421604-5e138c208b9c-177x142.jpg', title: 'Title title four', text: 'Lorem Ipsum dolor sit amet'},
                {image:'photo-1444213007800-cff19e1677ac-400X300.jpg', title: 'Title title four', text: 'Lorem Ipsum dolor sit amet'},

            ],
            selectedArticle: null,
            displayedArticle: null,
        };
    },
    created(){
    
    
        this.selectedArticle = this.listItem[4];
        this.displayedArticle = this.selectedArticle;
    },
    methods:{

        //metodo scartato non avendo abbastanza immagini di diverse risoluzioni
        // getImagePathWithResolution(image) {
        //     const updatedResolution = (image === this.selectedArticle?.image) ? '400x300' : '177x142';
        //     const extension = image.slice(image.lastIndexOf('.') + 1);

        //     return `${image.slice(0, image.lastIndexOf('-'))}-${updatedResolution}.${extension}`;
      
        // },
        selectArticle(article) {
            this.selectedArticle = article;
            this.displayedArticle = article;
        },


    },
};
</script>

<template>

    <section>
        <div class="container-xs">
            <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />
            <div class="article-wrapper">
                <div class="selected-article">
                    <AppSectThreePhotoList
                    v-if="selectedArticle"
                    :image="selectedArticle.image"
                    :title="selectedArticle.title"
                    :text="selectedArticle.text"
                    :isSelectedArticle="true"/>

                </div>
                <div class="article-list">
                    <AppSectThreePhotoList v-for="(article, index) in listItem" :isColumn="true"  :isSelectedArticle="false" :key="index" :image="article.image" :title="article.title" :text="article.text" @click="selectArticle(article)" />

                </div>


            </div>
            <div class="btn-btn-link"> 
                <a href=""> other other</a>
            </div>
            
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

@use "../style/partial/mixin" as *;


.container-xs{
    padding: 1rem;

    .article-wrapper {
        @include flex(row, space-between, flex-start, nowrap);

    }

    .article-list {
        @include flex(column, center, center, nowrap)
        
        
    }
    .selected-article {
        @include flex(column, center, center, nowrap)
      
    }

    .btn-btn-link {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 100%;
        background-color: $material-sienna;
        a{
            text-decoration: none;
            color: white;
        }

    }
}

</style>

