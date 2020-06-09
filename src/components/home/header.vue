<template>
    <div class="header">
        <div class="back">
            <i class="el-icon-arrow-left back-icon"></i>
        </div>
        <div class="search">
            <el-input
                size="small"
                placeholder="输入城市/景点/游玩主题"
                v-model="seachInfo"
                prefix-icon="el-icon-search">
            </el-input>
        </div>
        <div class="city-list">
            <div class="city-child" @click="addressCheck">
                <span>{{this.city}}</span>
                <i class="el-icon-caret-bottom city-icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Headers',
    props: {
        city: String
    },
    data () {
        return {
            seachInfo: ''
        }
    },
    methods: {
        addressCheck () {
            this.$router.push({
                path: '/address'
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        line-height: 44px;
        background: #00bcd4;
        .back {
            width: 40px;
            .back-icon {
                padding: 0 10px;
                font-size: 18px;
                color: #ffffff;
            }
        }
        .search {
            flex-grow: 1;
            .el-input {
                width: 100%;
            }
        }
        .city-list {
            width: 64px;
            margin: 0 2px 0 0;
            font-size: 14px;
            line-height: 44px;
            text-align: center;
            .city-child {
                height: 16px;
                color: #ffffff;
            }
        }
    }
</style>
