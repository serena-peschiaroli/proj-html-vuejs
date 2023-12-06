<script>

export default {
     data(){
        return{
            creditTexts: [
            '2023 Your Company.',
            'All rights reserved',
            'Some other credit text',
             'Another credit text',
            
            ],

            socialList: [
                {iconClass: 'fa-brands fa-facebook-f', href:'https://www.facebook.com/' },
                {iconClass: 'fa-brands fa-x-twitter' , href:'https://twitter.com/?lang=it' },
                {iconClass: 'fa-brands fa-instagram', href:'https://www.instagram.com/' },
                {iconClass: 'fa-brands fa-youtube', href:'https://www.youtube.com/'},
            ],

        }
    }

}

</script>

<template>
    <section>
        <div class="wrapper">
            <div class="logo">
                <img src="../img/avada-charity-mobile-logo-retina.png"> 
            </div>
            <div class="container">
                <div class="credits">
                    <ul>
                        <li v-for="(text, index) in creditTexts" :key="index"> <a href="" >{{ text }}</a></li>
                    </ul>

                </div>

                
                <div class="social-icons">

                    <ul>
                        <li v-for="(item, index) in socialList" :key="index">
                            <a :href="item.href" > <i :class="item.iconClass"></i></a>
                        </li>
                    </ul>
                    
                    

                </div>


            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

@use "../style/partial/mixin" as *;

section {
    .wrapper {
        .logo{
            background-color: $primary-white;
            width:25%;
            margin: 0 auto;
            padding: 2rem;
           
           
        }
        .container {
            background-color: $material-gray;
            padding: 0.5;
        

            .credits {
            

                ul {
                    list-style-type: none;
                    @include flex(row, center, center, nowrap);
                    gap: 1rem;

                    a{
                        text-decoration: none;
                        font-size: 0.5rem;
                        color: $median-tuna;
                    }
                    
                }
            }

            .social-icons {
                @include flex(row, center, center, nowrap);

                ul {
                    @include flex(row, center, center, nowrap);
                    gap: 0.2rem;
                    list-style-type: none;

                    li {
                        padding: 1rem 0;
                    

                        
                    


                        a {
                            font-size: 1rem;
                            color: $material-putty;
                            background-color: white;
                            width: 100px;
                            height: 90px;
                            border-radius: 100%;
                            padding: 0.5rem 0.7rem;
                        
                        }




                    }

                }

            }

        }
    } 
}

</style>

