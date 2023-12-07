<script>
import AppMainTitle from './AppMainTitle.vue';
import AppSectThreePhotoList from './AppSectThreePhotoList.vue';
import AppButtonComponent from './AppButtonComponent.vue';

export default {
    props: {
        items: Array,
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
            selectedItem: this.items.length > 0 ? this.items[0] : null,
            displayedItem: this.items.length > 0 ? this.items[0] : null,
        };
    },
    watch: {
    items: {
        handler(newItems) {
            this.selectedItem = newItems && newItems.length > 0 ? newItems[0] : null;
            this.displayedItem = this.selectedItem;
        },
        immediate: true, // l'handler è chiamato sul componente creato;
    },
    },
    created(){
    
        console.log("Received articles in AppMainSectFour:", this.items);
        console.log('selectedItem', this.selectedItem)
    
        // this.selectedItem = this.items[0];
        // this.displayedItem = this.selectedItem;
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
            return content.length > length ? `${content.slice(0, length)}...` : content;
        },


    },
};
</script>

<template>

    <section>
        <div class="container-xl">
            <AppMainTitle :mainTitle="mainTitle" :subTitle="subTitle" :isCentered="true" />
            <div class="article-wrapper">
                
                <div class="col-l">

               
                    <div class="selected-article" v-if="selectedItem">

                        <div class="card">
                            <img :src="selectedItem.urlToImage" alt="" >
                            <div class="title">
                                <h3> {{ selectedItem.title }}

                                </h3>
                            </div>
                            <div class="body">
                                <p>  {{selectedItem.content}}

                                </p>
                                <p> read more at <a href="">{{ selectedItem.url }}  </a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-s" v-if="items && items.length > 0">

                  
                    
                    <div class="card article-list" v-for="(item, index) in items" :key="index">
                           
                        <img class="article-img" :src="item.urlToImage" alt="Photo" @click="selectArticle(item)">
                        <div class="card-text">
                            <p class="title"> {{ truncateContent(item.title, 20) }} </p>
                            <p>{{ truncateContent(item.description, 30) }}</p>
                         </div>
                                    
                           
                    </div>
                        
                  
                </div>  
                <div v-else-if="items && items.length <= 0">
                     <p>Loading articles...</p>
                </div>
                <div v-else>
                     <p>Error fetching articles. Please try again later.</p>
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


.container-xl{
    padding: 1rem;
    @include flex(column, center, center, nowrap);
    max-height: 600px;

    .article-wrapper {
        @include flex(row, space-between, flex-start, nowrap);

        .col-l {
            width: 50%;

            .selected-article {
                @include flex(column, center, center, wrap);
                .card img {
                    width: 300px;
                    height: 200px;
                    aspect-ratio: 1;
                }

                .title {
                    color: $primary-gold;
                }
                        
            }


        }

        .col-s {
            @include flex(column, center, stretch, wrap);
            gap: 1rem;
            overflow-y: scroll;
            width: 40%;
            max-height: 500px;


                            .article-list {
                                @include flex(row, flex-start, center, nowrap);
                                max-height: 500px;
                            
                            
                                .article-img {
                                    width: 70px;
                                    height: 60px;
                                    aspect-ratio: 1;
                                }
                                .title {
                                color: $primary-gold;
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

