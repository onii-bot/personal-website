<template>
    <nav>
        <ul class="flex flex-wrap items-center justify-center text-lg font-bold font-mono">
            <li @click="makeSelect(item)" v-for="item in nav_items" :key="item.title"
                class="cursor-pointer mx-10 my-14 px-3" :class="{selected: item.isSelected}">{{ item.title }}</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'my-nav',
    data() {
        return {
            nav_items: [{
                'title': 'BIO',
                'isSelected': true
            },
            {
                'title': 'PROJECTS',
                'isSelected': false
            },
            {
                'title': 'MY WORK',
                'isSelected': false
            },
            {
                'title': 'CONTACT',
                'isSelected': false
            }
            ]
        }
    },
    methods: {
        makeSelect(item) {
            for (let i = 0; i < this.nav_items.length; i++) {
                this.nav_items[i].isSelected = false;
            }
            item.isSelected = true;
        }
    },
    props: {
        getNavItems: Function
    },
    created: function () {
        this.getNavItems(this.nav_items)
    },
}
</script>

<style>
.selected {
    background-color: black;
    color: rgb(236, 234, 211);
    border-radius: 0.25rem;
}
</style>

