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
import { useManagerStore } from '@/stores/manager.js'

import * as Misc from "@/components/Misc"

export default {
    data(){
        return{
            debug: true,
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
    created(){

        if(!window.localStorage.getItem("app-business")){
            window.localStorage.setItem("app-business", JSON.stringify({
                owner: "Lucas dos Santos Souza",
                balance: 25000
            }) )
        }
        if(!window.localStorage.getItem("app-companies")){
            window.localStorage.setItem("app-companies", JSON.stringify([]) )
        }

        useManagerStore().getStoragedBusiness();
        useManagerStore().getStoragedCompanies();

        if(!this.debug){
            window.addEventListener('beforeunload', (event) => {
                useManagerStore().setStoragedAll();
            })
        }

    }
}

</script>

<style lang="scss">

.title-app-wrapper{
    min-height: 180px;
}

</style>
