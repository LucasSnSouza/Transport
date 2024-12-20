<template>

    <div class="system-view-wrapper w-full h-full flex p-xlg">

        <div class="w-half h-full flex flex-column gap-lg color-brand-two">

            <div>
                <h1 class="font-md">system</h1>
                <p class="font-sm o-half">{{ fakeSystem?.name }}, {{ fakeSystem?.position[0] }}º {{ fakeSystem?.position[1] }}º 00</p>
            </div>

            <div class="flex wrap gap-md">

                <ButtonBasic
                    v-for="(item, index) of fakeSystem?.bodies"
                    class="bg-color-brand-one color-brand-two p-md rounded-md shadow-sm pointer"
                    :index="index"
                >

                    <div class="w-full flex gap-md">
                        <div 
                            class="p-md rounded-sm"
                            :style="{ background: item?.meta.color }"
                        >
                            <MiscIcon
                                :icon="item?.icon"
                                :size="[20,20]"
                                color="#FFFFFF"
                            />
                        </div>
                        <div class="flex flex-column y-start">
                            <h1 class="font-sm">{{ item?.name }}</h1>
                            <p class="font-xsm o-half">{{ fakeSystem.position[0] + item?.position[0] }}º {{ fakeSystem.position[0] + item?.position[1] }}º 00</p>
                        </div>
                    </div>
                </ButtonBasic>

            </div>

        </div>

        <div class="w-half h-full">

            <MiscSystemViewer
                class="rounded-lg"
                :system="fakeSystem?.bodies || []"
            />

        </div>

    </div>
    
</template>

<script>

import { system } from '@/fakes/system.js'

import { useSystemStore } from '@/stores/system.js'

import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Button from "@/components/Button"
import * as Input from "@/components/Input"

export default{
    data(){
        return{

        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button,
        ...Input
    },
    computed: {
        theme() {
            return useSystemStore().getTheme;
        },
        fakeSystem(){
            return system;
        }
    },
    methods: {
        toggleThemeMode(){
            useSystemStore().toggleTheme()
        }
    },
    created(){
        useSystemStore().setTaskbar(true);
    }
}

</script>

<style>

</style>