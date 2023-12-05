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

            ],
            selectedArticle: null,
        };
    },
    methods:{
        getImagePathWithResolution(image) {
            let lastDashIndex = image.lastIndexOf('-');
            const filename = image.substring(0, lastDashIndex);
            const resolutionAndExtension = image.substring(lastDashIndex + 1);
            let updatedResolution;

            // Assuming that this.selectedArticleData is a string representing the selected article image
            if (image === this.selectedArticle) {
            updatedResolution = '300x400';
            } else {
            updatedResolution = '177x142';
            }

            let extensionIndex = resolutionAndExtension.lastIndexOf('.');
            let extension = resolutionAndExtension.substring(extensionIndex + 1);

            let resolution = updatedResolution;
            

            
            return `${filename}-${updatedResolution}.${extension}`;
      
        },
        selectArticle(article) {
            this.selectedArticle = article.image;
        },


    }
}
</script>

<template>

    <section>
        <div class="container-m">
            <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />
            <div class="article-wrapper">
                <div class="selected-article">
                    <AppSectThreePhotoList
                    v-if="selectedArticle"
                    :image="getImagePathWithResolution(selectedArticle.image, '400x300')"
                    :title="selectedArticle.title"
                    :text="selectedArticle.text"/>

                </div>
                <div class="article-list">
                    <AppSectThreePhotoList v-for="(article, index) in listItem" :key="index" :image="getImagePathWithResolution(article.image, '177x142')" :title="article.title" :text="article.text" @click="selectedArticle(article)" />

                </div>


            </div>
            
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

@use "../style/partial/mixin" as *;


.container-m{

    .article-wrapper {
        @include flex(row, center, center, nowrap)
    }
}

</style>

