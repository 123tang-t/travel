<template>
    <div class="details">
        <Picture @open="displayCloseGallary"/>
        <Gallary v-show="gallary" @close="displayCloseGallary" :imgs="imgs"/>
        <div class="content">
            <List :list="list"/>
        </div>
    </div>
</template>``

<script>
import Picture from '@/components/details/picture.vue'
import Gallary from '@/components/details/gallary.vue'
import List from '@/components/details/list.vue'
export default {
    name: 'Details',
    components: {
        Picture,
        Gallary,
        List
    },
    data () {
        return {
            gallary: false,
            imgs: ['https://imgs.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_r_800x800_d3eb324d.jpg', 'https://imgs.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg'],
            list: [{
                title: '成人票',
                children: [{
                    title: '成人三馆联票',
                    children: [{
                        title: '成人三馆联票 - 销售中心'
                    }]
                }, {
                    title: '成人五馆联票'
                }]
            }, {
                title: '学生票'
            }, {
                title: '儿童票'
            }, {
                title: '特惠票'
            }]
        }
    },
    methods: {
        displayCloseGallary () {
            this.gallary = !this.gallary
        }
    }
}
</script>

<style lang="scss" scoped>
.details {
    height: 100vh;
    width: 100vw;
}
</style>
