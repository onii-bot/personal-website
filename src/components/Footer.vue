<template>
    <footer class="relative flex justify-between bottom-0 bg-current/25 w-full p-5 z-[60]">
        <span class="text-sm text-center text-black">© <a href="/" class="hover:underline">Website By Ash™</a>
        </span>
        <span class="flex space-x-4">
            <a href="https://github.com/onii-bot" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-6 w-6" :src="require('@/assets/github_logo.png')"></a>
            <a href="https://discordapp.com/users/776716251997274112" target="_blank" rel="noopener noreferrer"><img class="cursor-pointer h-6 w-6 pt-1" :src="require('@/assets/discord_logo.png')"></a>
        </span>
    </footer>
</template>

<script>
export default {
    name: "my-footer",

}
</script>
