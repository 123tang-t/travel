<template>
    <div class="city-head">
        <div class="city-title">
            <div class="left" @click="backHome">
                <i class="el-icon-arrow-left back-home"></i>
            </div>
            <div class="title">
                <span>城市选择</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
        }
    },
    methods: {
        backHome () {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .city-head {
        .city-title {
            display: flex;
            flex-direction: row;
            height: 44px;
            background: #00bcd4;
            .left {
                width: 40px;
                height: 44px;
                color: #ffffff;
                .back-home {
                    padding: 0 10px;
                    line-height: 44px;
                    font-size: 20px;
                }
            }
            .title {
                flex: 1;
                margin: 0 50px 0 10px;
                height: 44px;
                line-height: 44px;
                text-align: center;
                color: #ffffff;
                font-size: 18px;
            }
        }
    }
</style>
