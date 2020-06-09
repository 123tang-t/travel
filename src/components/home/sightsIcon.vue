<template>
    <div class="sights">
        <el-carousel
            height="180px"
            arrow="never"
            :autoplay="false"
            indicator-position="outside">
            <el-carousel-item v-for="(page, index) of pages" :key="index">
                <div class="sights-child">
                    <div class="icon-list" v-for="item of page" :key="item.id">
                        <img class="icon-img" :src="item.imgUrl" :alt="item.desc">
                        <span class="icon-desc">{{item.desc}}</span>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="area">
            <div class="area-left">
                <i class="el-icon-location-outline"></i>定位失败
            </div>
            <div class="area-right"><i class="el-icon-orange"></i>必游榜单</div>
        </div>
    </div>
</template>

<script>
// import index from '../../../../repository/infosystem/src/pages/index.vue'
export default {
    name: 'Sights',
    props: {
        sights: Array
    },
    data () {
        return {
        //   sightsList: [{
        //     id: '001',
        //     url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        //     desc: '景区门票'
        //   }, {
        //     id: '002',
        //     url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        //     desc: '景区门票'
        //   }, {
        //     id: '003',
        //     url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        //     desc: '景区门票'
        //   }, {
        //     id: '004',
        //     url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        //     desc: '景区门票'
        //   }, {
        //     id: '005',
        //     url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        //     desc: '景区门票'
        //   }]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.sights.forEach((item, index) => {
                const page = (Math.floor(index / 8))
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="scss" scoped>
    .sights {
        width: 100%;
        .sights-child {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 190px;
            .icon-list {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 25%;
                height: 80px;
                padding: 5px 0 0 0 ;
                .icon-img {
                    width: 55px;
                    height: 55px;
                }
                .icon-desc {
                    color: #000000;
                    font-size: 14px;
                    margin: 5px 0 0 0;
                }
            }
        }
        .area {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 49px;
            .area-left {
                width: 50%;
                line-height: 49px;
                text-align: center;
                border: 0.1px solid grey;
                border-left: none;
            }
            .area-right {
                width: 50%;
                line-height: 49px;
                text-align: center;
                border: 0.1px solid grey;
                border-left: none;
                border-right: none;
            }
        }
    }
</style>
