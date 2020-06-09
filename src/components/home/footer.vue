<template>
    <div class="footer">
        <div class="footer-title">
            <p>猜你喜欢</p>
        </div>
        <div
            class="detail"
            v-for="item of recommendList"
            :key="item.id"
            :id="item.id"
            @click="openDetails(item.id)">
            <div class="detail-img">
                <img :src="item.imgUrl" :alt="item.title"/>
            </div>
            <div class="content">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        recommendList: Array
    },
    data () {
        return {
        }
    },
    methods: {
        openDetails (value) {
            this.$router.push({
                path: `/details/${value}`
            })
            // console.log(this.$route)
            // console.log(this.$router)
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer {
        .footer-title {
            p {
                padding: 12px 0 13px 5px;
                font-size: 16px;
            }
        }
        .detail {
            display: flex;
            flex-direction: row;
            .detail-img {
                img {
                    width: 100px;
                    height: 100px;
                }
            }
            .content {
                height: 100px;
                padding: 0 0 0 11px;
                .title {
                    height: 22px;
                    margin: 13px 0 0 0;
                }
                .desc {
                    margin: 30px 0 0 0;
                    font-size: 12px;
                }
            }
        }
    }
</style>
