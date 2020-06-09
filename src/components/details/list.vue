<template>
    <div>
        <div class="nav" v-for="(item, index) of list" :key="index">
            <div class="nav-item">
                {{item.title}}
            </div>
            <div v-if="item.children">
                <details-list class="nav-children" :list="item.children"></details-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsList',
    props: {
        list: Array
    }
}
</script>

<style lang="scss" scoped>
    .nav {
        .nav-item {
            margin: 5px 2px;
            height: 20px;
            font-size: 16px;
        }
        .nav-children {
            padding: 0 10px;
        }
    }
</style>
