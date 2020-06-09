<template>
  <div class="home">
    <Header :city="city"/>
    <CarouselList :swiper="swiperList"/>
    <SightsIcon :sights="iconList"/>
    <Footer :recommendList="recommendList"/>
  </div>
</template>

<script>
import Header from '@/components/home/header.vue'
import CarouselList from '@/components/home/carouselList.vue'
import SightsIcon from '@/components/home/sightsIcon.vue'
import Footer from '@/components/home/footer.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        Header,
        CarouselList,
        SightsIcon,
        Footer
    },
    data () {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/mock/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                this.city = res.data.city
                this.swiperList = res.data.swiperList
                this.iconList = res.data.iconList
                this.recommendList = res.data.recommendList
            }
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>
