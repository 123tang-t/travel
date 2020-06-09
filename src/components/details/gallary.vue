<template>
    <div class="gallary" @click="closeGallary">
        <div class="gallary-content">
            <!-- <div class="swiper-container swiper-contain">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) of imgs" :key="index">
                        <img class="content-img" :src="item" :alt="index">
                    </div>
                </div>
            </div> -->
            <swiper class="swiper-contain" ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                    <img class="content-img" :src="item" :alt="index">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <!-- <div class="pagination-nav">{{123}}</div> -->
        </div>
    </div>
</template>

<script>
// import Swiper from 'swiper'
export default {
    name: 'Gallary',
    props: {
        imgs: Array
    },
    data () {
        return {
            // swiperOptions: {
            //     // observe: true,
            //     // observeParents: true,
            //     // pepagination: {
            //     //     // el: 'swiper-pagination',
            //     //     // type: 'fraction'
            //     // }
            // }
            mySwyper: {}
        }
    },
    // activated () {
    //     this.initSwiper() // 初始化swiper
    // },
    // deactivated () {
    //     this.mySwiper.destroy() // 销毁swiper
    // },
    methods: {
        closeGallary () {
            this.$emit('close')
        }
        // initSwioer () {
        //     this.mySwyper = new Swiper(".swiper-container", {
        //         loop: true
        //     })
        // }
    }
}
</script>

<style lang="scss" scoped>
    .gallary {
        // z-index: 999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 700px;
        background: #000;
        position: fixed;
        top: 0;
        left: 0;
        .gallary-content {
            .swiper-contain{
                .content-img {
                    width: 100%;
                    height: 250px;
                }
            }
            // .pagination-nav {
            //     margin-top: 50px;
            //     text-align: center;
            //     color: #ffffff;
            // }
        }
    }
</style>
