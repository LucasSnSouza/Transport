<template>

    <div 
        :class="theme"
        class="app-wrapper flex flex-column y-center h-full bg-color-brand-one"
    >
        <div 
            class="title-app-wrapper w-full flex y-end x-start p-lg color-brand-one bg-color-brand-three"
        >
            <div class="flex gap-md y-end">
                <ButtonBasic
                    v-if="$route.meta.goback"
                    class="rounded-md aspect-ratio p-md bg-color-brand-one flex x-center y-center"
                    @click="$router.go(-1)"
                >
                    <MiscIcon
                        icon="arrow-icon"
                        :size="[20,20]"
                        color="#00000088"
                    />
                </ButtonBasic>
                <h1 class="font-md">{{ title }}</h1>
            </div>
        </div>
        <RouterView/> 
    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { useSystemStore } from '@/stores/system.js'
import { useManagerStore } from '@/stores/manager.js'

import * as Button from "@/components/Button"
import * as Misc from "@/components/Misc"

export default {
    data(){
        return{
            debug: false,
        }
    },
    components: {
        ...Button,
        ...Misc
    },
    methods: {
        setView(value){
            this.$router.push({ path: value });
        },
    },
    computed: {
        title() {
            return this.$route.meta.title;
        },
        theme() {
            return useSystemStore().getTheme;
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
        if(!window.localStorage.getItem("app-records")){
            window.localStorage.setItem("app-records", JSON.stringify([]) )
        }

        useManagerStore().registerAllStorages();

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
    transition: .5s;
}

</style>
