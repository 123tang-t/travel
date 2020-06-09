<template>
    <div class="region">
        <div class="area-nav">
            <div
                :class="[select==='within'? 'select' : '', 'within']"
                @click="selectArea('within')">
                境内
            </div>
            <div
                :class="[select==='overseas'? 'select' : '', 'overseas']"
                @click="selectArea('overseas')">
                境外
            </div>
        </div>
        <!-- 境内城市分布 -->
        <div class="area-list" v-show="within">
            <div class="popular">
                <p>热门城市</p>
            </div>
            <div class="recommended">
                <div class="recommended-city" v-for="item of hotCities" :key="item.id">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <div class="letter">
                <div class="letter-title">
                    <p>字母排序</p>
                    <div class="letter-list">
                        <div
                            class="child-list"
                            v-for="(item, key) of cities"
                            :key="key"
                            @click="changeLetter">
                            {{key}}
                        </div>
                    </div>
                </div>
                <div class="city-list" v-for="(item, key) of cities" :key="key">
                    <div :id="key" class="first-spell">
                        <a :name="key">{{key}}</a>
                    </div>
                    <div class="city-child">
                        <div class="child-list" v-for="inner of item" :key="inner.id">
                            {{inner.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 境外城市分布 -->
        <div class="area-list" v-show="overseas">
            <div class="popular">
                <p>热门城市</p>
            </div>
            <div class="recommended">
                <div class="recommended-city" v-for="item of overseasList" :key="item.id">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <div class="letter">
                <div class="letter-title">
                    <p>字母排序</p>
                    <div class="letter-list">
                        <div class="child-list" v-for="(item, key) of cities" :key="key">
                            {{key}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Region',
    props: {
        hotCities: Array,
        cities: Object
    },
    data () {
        return {
            within: true,
            overseas: false,
            select: 'within',
            letter: '',
            // 定义境外城市数组
            overseasList: [{
                id: '01',
                name: '曼谷'
            }, {
                id: '02',
                name: '新加坡'
            }, {
                id: '03',
                name: '首尔'
            }, {
                id: '04',
                name: '洛杉矶'
            }, {
                id: '05',
                name: '巴黎'
            }, {
                id: '06',
                name: '伦敦'
            }]
        }
    },
    methods: {
        // 切换境内/境外
        selectArea (area) {
            this.select = area
            if (area === 'within') {
                this.within = true
                this.overseas = false
            } else {
                this.within = false
                this.overseas = true
            }
        },
        // 传递字母
        changeLetter (e) {
            this.letter = e.target.innerText
            document.querySelector(`#${e.target.innerText}`).scrollIntoView()
            // this.$router.push({
            //     path: this.$route.path + '#Y'
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
    .region {
        margin: -10px 0 0 0 ;
        background: rgb(233, 232, 232);
        .area-nav {
            display: flex;
            flex-direction: row;
            height: 30px;
            background: #00bcd4;
            .within, .overseas{
                flex-grow: 1;
                height: 20px;
                line-height: 20px;
                text-align: center;
                font-size: 14px;
                color: #ffffff;
                background:#00bcd4;
                border: 0.5px solid #ffffff;
            }
            // 被点击之后样式显示
            .select {
                color: #00bcd4;
                background: #fff;
            }
            .within {
                margin: 5px 0 5px 50px;
            }
            .overseas {
                margin: 5px 50px 5px 0px;
            }
        }
        .area-list {
            .popular {
                p {
                    margin: 12px 15px;
                    color: #000000;
                    letter-spacing: 2px;
                    font-size: 12px;
                }
            }
            .recommended {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                .recommended-city {
                    margin: 1px 0;
                    width: 33%;
                    height: 45px;
                    line-height: 45px;
                    text-align: center;
                    background: #ffffff;
                }
            }
            .letter {
                .letter-title {
                    p {
                        margin: 10px 15px;
                        color: #000000;
                        letter-spacing: 2px;
                        font-size: 14px;
                    }
                    .letter-list {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        // justify-content: space-around;
                        padding: 15px 0;
                        background: #ffffff;
                        .child-list {
                            width: 16.6%;
                            height: 45px;
                            line-height: 45px;
                            text-align: center;
                            color: #212121;
                            font-size: 14px;
                        }
                    }
                }
                .city-list {
                    .first-spell {
                        margin: 10px 15px;
                        color: #000000;
                        letter-spacing: 2px;
                        font-size: 14px;
                    }
                }
                .city-child {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    background: #ffffff;
                    .child-list {
                        width: 25%;
                        height: 45px;
                        line-height: 45px;
                        text-align: center;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>
