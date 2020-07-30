<template>
    <div class="carousel">
        <el-carousel trigger="click" height="200px">
            <el-carousel-item v-for="item in swiper" :key="item.id">
                <img class="carousel-img" :src="item.imgUrl" :alt="item.id"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'CarouselList',
    props: {
        swiper: Array
    },
    data () {
        return {
        //   carouselImg: [{
        //     id: '001',
        //     urlImg: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        //   }, {
        //     id: '002',
        //     urlImg: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
        //   }, {
        //     id: '003',
        //     urlImg: 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
        //   }]
        }
    }
}
</script>

<style scoped lang="scss">
    .carousel {
        width: 100%;
        height: 200px;
        .carousel-img {
            width: 100%;
            height: 200px;
        }
    }
</style>
