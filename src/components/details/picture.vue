<template>
    <div class="picture" @click="openGallary">
        <div class="picture-img">
            <img src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt=""/>
            <div class="introduction">
                <div class="introduction-picture">
                    <i class="el-icon-picture picture-icon"></i>
                    <span class="picture-number">12</span>
                </div>
                <div class="introduction-title">
                    故宫(AAAAA景区)
                </div>
            </div>
            <div class="return-home" @click="returnHome">
                <i class="el-icon-arrow-left return-icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Picture',
    methods: {
        returnHome () {
            this.$router.push({
                path: '/'
            })
        },
        openGallary () {
            this.$emit('open')
        }
    }
}
</script>

<style lang="scss" scoped>
    .picture {
        width: 100%;
        .picture-img {
            position: relative;
            width: 100%;
            img {
                width: 100%;
                height: 200px;
            }
            .introduction {
                // width: 100%;
                margin: 10px;
                position: absolute;
                left: 0;
                bottom: 0;
                .introduction-picture {
                    width: 60px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 8px;
                    .picture-icon {
                        width: 12px;
                        height: 12px;
                        font-size: 12px;
                        color: #fff;
                    }
                    .picture-number {
                        margin: 0 0 0 5px;
                        color: #fff;
                        font-size: 12px;
                    }
                }
                .introduction-title {
                    width: 100%;
                    height: 25px;
                    color: #fff;
                    font-size: 16px;
                }
            }
            .return-home {
                width: 25px;
                height: 25px;
                line-height: 25px;
                margin: 8px;
                color: #fff;
                text-align: center;
                background: gray;
                border-radius: 50%;
                position: absolute;
                top: 0;
                left: 0px;
                .return-icon {
                    font-size: 15px;
                }
            }
        }
    }
</style>
