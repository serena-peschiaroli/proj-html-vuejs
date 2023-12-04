<script>
export default {

}

</script>

<template>
    <section class="section-one">
        <div class="row">
            <div class="col-l">
                <h1> LOREM IPSUM</h1>
                <hr>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem animi ipsa et necessitatibus nesciunt reiciendis veritatis mollitia aliquid. </p>
                <p>Temporibus doloremque, officia aperiam aspernatur fugit sint maxime optio beatae hic. Maiores.</p>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ex illum, accusantium dolore, amet, consequatur</p>

            </div>
            <div class="col-s">

            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
@use "../style/partial/mixin" as *;

.section-one {
    background-color: $primary-white;
    color: black;

    .row {
        @include flex(row, center, stretch, nowrap);

        .col-l {
            width: 70%;
            padding: 5rem;
        }
        .col-s {
            width: 30%;
            background-image: url(../img/home-content-bg-1.jpg);
            background-position: center;
            background-size: cover;
        }
    }
}

</style>