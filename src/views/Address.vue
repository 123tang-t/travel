<template>
  <div class="address">
    <Header/>
    <Region
        :hotCities="hotCities"
        :cities="cities"/>
  </div>
</template>

<script>
import Header from '@/components/city/header.vue'
import Region from '@/components/city/region.vue'
import axios from 'axios'
export default {
    name: 'Adress',
    components: {
        Header,
        Region
    },
    data () {
        return {
            hotCities: [],
            cities: {}
        }
    },
    methods: {
        getCityInfo () {
            axios.get('mock/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                this.hotCities = res.data.hotCities
                this.cities = res.data.cities
            }
        }
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>
