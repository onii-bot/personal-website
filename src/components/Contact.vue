<template>
    <div id="box" class="mx-16 px-8 py-6 h-[32rem] flex border-neutral-800 border-2">
        <div id="firstbox" class="w-[50%]">
            <div v-for="item in contacts.slice(0, 3)" :key="item.id" v-on:mouseover="item.isHovered = true"
                v-on:mouseleave="item.isHovered = false" class="h-[33%] px-2 py-4 mx-2 my-4 font-mono text-lg">
                    <span class="">{{ item.id }}</span>
                    <a :href="item.link" target="_blank" rel="noopener noreferrer"><span :class="{ 'text-palette': !item.isHovered }" v-on:mouseover="item.isHovered = true"
                    v-on:mouseleave="item.isHovered = false">
                    {{ item.title }}
                    </span></a>
            </div>
        </div>
        <div class="">
            <img :src="require('@/assets/ash.gif')" class="w-[40rem] h-[29rem] mx-2 mb-4">
        </div>
        <div id="secondbox" class="w-[50%] text-right">
            <div v-for="item in contacts.slice(3, 6)" :key="item.id" v-on:mouseover="item.isHovered = true"
                v-on:mouseleave="item.isHovered = false" class="h-[33%] px-2 py-4 mx-2 my-4 font-mono text-lg">
                <a :href="item.link" target="_blank" rel="noopener noreferrer"><span :class="{ 'text-palette': !item.isHovered }">
                    {{ item.title }}
                    </span></a>
                    <span class="">{{ item.id }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-contact',
    data() {
        return {
            contacts: [
                { "id": "1.", "title": " Github", "isHovered": false , "link":"https://github.com/onii-bot"},
                { "id": "2.", "title": " Discord", "isHovered": false , "link":"https://discordapp.com/users/776716251997274112"},
                { "id": "3.", "title": " Twitter", "isHovered": false , "link":"https://twitter.com"},
                { "id": " 4.", "title": "Instagram", "isHovered": false , "link":"https://www.instagram.com/ash._ua/"},
                { "id": " 5.", "title": "Gmail", "isHovered": false , "link":"mailto: aayushpaudel311@gmail.com"},
                { "id": " 6.", "title": "Linkedin", "isHovered": false , "link":"https://linkedin.com"}
            ],

        }
    },
    methods: {
        togglehover() {
            this.isHovered = !this.isHovered;
        }
    }
}
</script>

<style>
.hidden {
    display: none;
}
</style>