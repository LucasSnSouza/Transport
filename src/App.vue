<template>

    <div 
        :class="theme"
        class="app-wrapper flex flex-column h-full bg-color-brand-one"
    >
        <div class="title-app-wrapper w-full flex y-end x-start p-lg color-brand-one bg-color-brand-three">

            <h1 class="font-lg">{{ title }}</h1>

        </div>
        <RouterView/> 
    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { useSystemStore } from '@/stores/system.js'

import * as Misc from "@/components/Misc"

export default {
    data(){
        return{
        }
    },
    components: {
        ...Misc
    },
    methods: {
        setView(value){
            this.$router.push({ path: value });
        }
    },
    computed: {
        title() {
            return this.$route.meta.title;
        },
        theme() {
            return useSystemStore().getTheme;
        },
        taskbar(){
            return useSystemStore().getTaskbar;
        }
    },
}

</script>

<style lang="scss">

.title-app-wrapper{
    height: 200px;
}

</style>
