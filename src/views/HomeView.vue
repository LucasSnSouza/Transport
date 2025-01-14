<template>

    <div class="home-view-wrapper w-full h-full p-xlg bg-color-brand-one flex flex-column gap-lg">

        <div class="flex flex-column gap-md">
            <div>
                <h1 class="font-sm color-brand-three">{{ business.owner }}</h1>
            </div>
            <div class="flex gap-md y-start">
                <p class="font-xsm o-half" style="margin-top: 3px;">$</p>
                <p class="font-sm color-brand-five">
                    <strong class="font-lg color-brand-two">{{ $money(business.balance).split(',')[0] }}</strong>
                    , {{ $money(business.balance).split(',')[1] }}
                </p>
            </div>
            <div>
                <p class="font-sm o-half">What are we going to do today?</p>
            </div>
        </div>

        <MiscDivision/>

        <div class="principed-navigation flex gap-md">
            <ButtonBasic
                class="flex p-lg rounded-md bg-color-brand-three aspect-ratio"
                @click="$router.push({ path: '/foundation' })"
            >
                <div class="buttons-navigation flex flex-column h-full justify-between y-start color-brand-one">

                    <div 
                        class="p-sm rounded-lg"
                        style="background: #FFFFFF33"
                    >
                        <MiscIcon
                            icon="bg-plus-icon"
                            :size="[24,26]"
                        />
                    </div>
                    <p class="font-sm">Foundations</p>
    
                </div>
            </ButtonBasic>
            <ButtonBasic
                class="flex p-lg rounded-md bg-color-brand-three w-full"
                @click="$router.push({ path: '/companies' })"
            >
                <div class="buttons-navigation flex flex-column h-full justify-between y-start color-brand-one">

                    <div 
                        class="p-sm rounded-lg"
                        style="background: #FFFFFF33"
                    >
                        <MiscIcon
                            icon="bg-list-icon"
                            :size="[26,26]"
                        />
                    </div>
                    <p class="font-sm">Companies</p>

                </div>
            </ButtonBasic>
            <ButtonBasic
                class="flex p-lg rounded-md bg-color-brand-three w-full"
                @click="$router.push({ path: '/configuration' })"
            >
                <div class="buttons-navigation flex flex-column h-full justify-between y-start color-brand-one">

                    <div 
                        class="p-sm rounded-lg"
                        style="background: #FFFFFF33"
                    >
                        <MiscIcon
                            icon="edit-icon"
                            :size="[26,26]"
                        />
                    </div>
                    <p class="font-sm">Configurations</p>

                </div>
            </ButtonBasic>
        </div>
    </div>
    
</template>

<script>

import { useSystemStore } from '@/stores/system.js'
import { useManagerStore } from '@/stores/manager.js'

import Utils from '@/utils/';

import * as Button from "@/components/Button"
import * as Input from "@/components/Input"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            business: useManagerStore().getBusiness,
            companies: useManagerStore().getCompanies,
            records: useManagerStore().getRecords,
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc,
    },
    methods:{
    },  
    created(){
    }
}

</script>

<style>

.principed-navigation{
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
}

.buttons-navigation{
    scroll-snap-align: center;
    min-width: 100px;
}

</style>