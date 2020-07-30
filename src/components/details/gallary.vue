<template>
    <div class="gallary" @click="closeGallary">
        <div class="gallary-content">
            <swiper class="swiper-contain" ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                    <img class="content-img" :src="item" :alt="index">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <!-- <div class="page-number">
            <div class="number">
                {{number}}
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'Gallary',
    props: {
        imgs: Array
    },
    data () {
        return {
            swiperOptions: {
                autoplay: true,
                observer: true,
                observeParents: true,
                loop: true,
                pepagination: {
                    el: '.swiper-pagination',
                    type: 'bullets'
                }
            }
        }
    },
    methods: {
        closeGallary () {
            this.$emit('close')
        }
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
        height: 100%;
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
        }
        .page-number {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 20px;
            color: #fff;
            .number {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                font-size: 12px;
            }
        }
    }
</style>
