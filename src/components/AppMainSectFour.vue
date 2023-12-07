<script>
import AppMainTitle from './AppMainTitle.vue';
import AppSectThreePhotoList from './AppSectThreePhotoList.vue';
import AppButtonComponent from './AppButtonComponent.vue';

export default {
    components: {
    AppMainTitle,
    AppSectThreePhotoList,
    AppButtonComponent,
},
    data() {
        return {
            mainTitle: 'Latest Article',
            subTitle: 'Together we make all the difference',
            listItem: [
                {image:'photo-1444664597500-035db93e2323-177x142.jpg', title: 'The human story of uniqueness', text: 'Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet '},
                {image:'photo-1447430617419-95715602278e-177x142.jpg', title: 'Sustainable trade tactics', text: 'Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet'},
                {image:'photo-1460230525622-630fe3294cd7-177x142.jpg', title: 'Farmers making a difference', text: 'Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet'},
                {image:'photo-1460600421604-5e138c208b9c-177x142.jpg', title: 'Meeting remote tribes in Peru', text: 'Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet'},
                {image:'photo-1444213007800-cff19e1677ac-400X300.jpg', title: 'Understanding community complexity', text: 'Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet'},

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
        <div class="container-lg">
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
                <AppButtonComponent variant="red">VIEW ALL OUR ARTICLES</AppButtonComponent>
            </div>
            
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

@use "../style/partial/mixin" as *;


.container-lg{
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
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        
        

    }
}

</style>

