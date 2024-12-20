<template>

    <div 
        :class="theme"
        class="app-wrapper flex h-full"
    >
        <MiscTab
            v-if="taskbar"
            :buttons="form_buttons_tab"
            @action="setView"
            @exit="$router.push({ path: '/configuration' })"
        />
        <div class="flex bg-color-brand-four flex-column w-full h-full">
            <!-- <MiscControl/> -->
            <RouterView/> 
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
                    icon: "dashboard-icon",
                    response: "/home"
                },
                {
                    name: "Notes",
                    size: [20,20],
                    icon: "schedule-icon",
                    response: "/notes"
                },
                {
                    name: "Hangar",
                    size: [20,20],
                    icon: "space-ship-icon",
                    response: "/hangar"
                },
                {
                    name: "Stations",
                    size: [20,20],
                    icon: "place-icon",
                    response: "/stations"
                },
                {
                    name: "System",
                    size: [20,20],
                    icon: "location-icon",
                    response: "/system"
                },
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
