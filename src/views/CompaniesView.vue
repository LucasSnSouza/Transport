<template>

    <div class="companies-view-wrapper w-full h-full p-xlg flex flex-column gap-xlg bg-color-brand-one">
        <div class="superior flex gap-xlg justify-between">
            <div class="w-full">
                <h1 class="font-sm">companies</h1>
                <p class="font-sm color-brand-three">{{ companies.length }}</p>
            </div>
            <div class="w-full">
                <h1 class="font-sm">balances</h1>
                <p class="font-sm color-brand-three">$ {{ balances() }}</p>
            </div>
            <div class="w-full">
                <h1 class="font-sm">bank</h1>
                <p class="font-sm color-brand-three">$ {{ business.balance }}</p>
            </div>
        </div>
        <div class="companies-buttons-frame w-full h-full flex flex-column gap-lg">
            <ButtonBasic
                v-for="(item, index) of companies"
                class="w-full bg-color-brand-one rounded-sm shadow-sm ghost color-brand-four p-lg"
                @click="$router.push({ path: '/company', query: { id: index, uid: item.uid } })"
            >
                <div class="color-brand-two gap-md flex flex-column">
                    <div class="w-full flex flex-column x-start text-start font-sm">
                        <div class="flex gap-md">
                            <h1 class="font-sm">{{ item.name }}</h1>
                        </div>
                        <p class="font-sm o-half">{{ item.description }}</p>
                    </div>
                    <div class="w-full flex gap-lg x-start text-start">
                        <p class="font-sm color-brand-two"><strong class="color-brand-three">owner </strong> {{ item?.owner }}</p>
                        <p class="font-sm color-brand-two"><strong class="color-brand-three">balance </strong> {{ item?.balance }}</p>
                    </div>
                    <div class="w-half p-sm bg-color-brand-three color-brand-one rounded-sm font-sm">{{ item?.type.label }}</div>
                </div>
            </ButtonBasic>
        </div>
    </div>
    
</template>

<script>

import { useSystemStore } from '@/stores/system.js'
import { useManagerStore } from '@/stores/manager.js'

import * as Button from "@/components/Button"
import * as Input from "@/components/Input"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            business: useManagerStore().getBusiness,
            companies: useManagerStore().getCompanies,
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc,
    },
    methods: {
        balances(){
            return this.companies.reduce((increment, item) => increment + Number(item.balance), 0 );
        }
    },
    created(){
        useSystemStore().setTaskbar(true);
    }
}

</script>

<style lang="scss">

.superior{

    div:not(:first-child){
        border-left: 1px solid var(--color-brand-five);
        padding-left: 12px;
    }

}

</style>