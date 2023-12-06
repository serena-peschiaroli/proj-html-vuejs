<script>
import AppMainTitle from './AppMainTitle.vue';
import AppSectThreePhotoList from './AppSectThreePhotoList.vue';
import AppButtonComponent from './AppButtonComponent.vue';

export default {
    props: {
        items: Object,
    },
    components: {
    AppMainTitle,
    AppSectThreePhotoList,
    AppButtonComponent,
},
    data() {
        return {
            mainTitle: 'Main Title',
            subTitle: 'Sub title',
            selectedItem: null,
            displayedItem: null,
        };
    },
    created(){
    
        console.log("Received articles in AppMainSectFour:", this.items);
    
        this.selectedItem = this.items[0];
        this.displayedItem = this.selectedItem;
    },
    methods:{
        

        //metodo scartato non avendo abbastanza immagini di diverse risoluzioni
        // getImagePathWithResolution(image) {
        //     const updatedResolution = (image === this.selectedArticle?.image) ? '400x300' : '177x142';
        //     const extension = image.slice(image.lastIndexOf('.') + 1);

        //     return `${image.slice(0, image.lastIndexOf('-'))}-${updatedResolution}.${extension}`;
      
        // },
        selectArticle(item) {
            this.selectedItem = item;
            this.displayedItem = item;
        },
        truncateContent(content, length) {
            if (content.length > length) {
                return content.substring(0, length) + '...';
            } else {
                return content;
            }
        },


    },
};
</script>

<template>

    <section>
        <div class="container-sm">
            <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />
            <div class="article-wrapper">
                
                <div class="col-l">

               
                    <div class="selected-article">

                        <div class="card">
                            <img :src="selectedItem.urlToImage" alt="">
                            <div class="title">
                                <h3> {{ truncateContent(selectedItem.title, 10) }}

                                </h3>
                            </div>
                            <div class="body">
                                <p>  {{ truncateContent(selectedItem.content, 20) }}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-s">

                  
                    <div class="article-list">

                        <ul>
                            <li v-for="(item, index) in items" :key="index">
                                <img class="article-img" :src="item.urlToImage" alt="Photo">
                                    <p class="title"> {{ truncateContent(item.title, 10) }} </p>
                                    <p>{{ truncateContent(item.description, 10) }}</p>
                            </li>
                        </ul>
                        
                    </div>
                </div>  
                

               


            </div>
            <div class="btn-btn-link"> 
                <AppButtonComponent variant="red">OTHER</AppButtonComponent>
            </div>
            
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

@use "../style/partial/mixin" as *;


.container-sm{
    padding: 1rem;
    @include flex(row, center, center, nowrap);
    max-height: 600px;

    .article-wrapper {
        @include flex(row, space-between, flex-start, nowrap);

        .col-l {
            width: 50%;

            .selected-article {
                .card img {
                    width: 300 px;
                }

                .title {
                    color: $primary-gold;
                }
                        
            }


        }

        .col-s {
            overflow-y: scroll;
            width: 40%;
            max-height: 500px;
            .article-list {
                @include flex(column, center, center, nowrap);
                ul {
                    li{
                        .article-img {
                            width: 70px;
                        }
                        .title {
                            color: $primary-gold;
                        }

                    }
                }
                

        
        
            }
            
        }

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

