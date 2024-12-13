<template>

    <div 
        :class="theme"
        class="app-wrapper flex h-full"
    >
        <MiscTab
            v-if="taskbar"
            :buttons="form_buttons_tab"
            @Command-0="setView"
            @Command-1="setView"
        />
        <div class="flex bg-color-brand-four flex-column w-full h-full">
            <MiscControl/>
            <RouterView />
        </div>
    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { useSystemStore } from '@/stores/system.js'

import * as Misc from "@/components/Misc"

export default {
    data(){
        return{
            form_buttons_tab:[
                {
                    name: "Board",
                    size: [21,21],
                    icon: "board-icon",
                    response: "/"
                },
                {
                    name: "Notes",
                    size: [19,19],
                    icon: "notes-icon",
                    response: "/notes"
                }
            ]
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

</style>
