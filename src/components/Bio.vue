<template>
    <div id="box" class="mx-16 px-8 py-6 h-[32rem] flex border-neutral-800 border-2">
        <div id="firstbox" class="w-[70%]">
            <h1 class="text-[7rem]">Aayush Paudel</h1>
            <p class="text-[1.15rem] font-mono antialiased">I am a developer with a passion for Python programming. I am currently expanding my skills by learning web design and always looking for new challenges to improve my abilities in this field. You can connect with me on the links below.</p>
            <div id="emptybox" class="h-36"></div>
            <h1 class="font-bold text-xl">@ash._ua</h1>
            <div id="socials" class="py-4 flex space-x-4">
                <a href="https://www.instagram.com/ash._ua/" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-8 w-8" :src="require('@/assets/instagram_logo.png')"></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-8 w-8" :src="require('@/assets/facebook_logo.png')"></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-8 w-8" :src="require('@/assets/twitter_logo.png')"></a>
                <a href="https://www.linkedin.com/in/aayush-paudel-4a1731227/" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-8 w-8" :src="require('@/assets/linkedin_logo.png')"></a>
            </div>
        </div>
        <div id="secondbox" class="w-[30%]">
            <img :src="require('@/assets/ash.gif')" class="w-[32rem] h-[29rem] mx-2 mb-4">
        </div>
    </div>
</template>

<script>
export default{
    name: 'my-box'
}
</script>