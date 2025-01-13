<template>

    <div class="operations-view-wrapper w-full h-full p-xlg flex flex-column gap-xlg bg-color-brand-one">
        
        <div class="superior flex gap-xlg justify-between">
            <div class="w-full">
                <ButtonBasic
                    class="p-lg rounded-sm bg-color-brand-three w-full flex color-brand-one y-center gap-md"
                >
                    <MiscIcon
                        icon="plus-icon"
                        :size="[16,16]"
                    />
                    <p style="margin-top: -3px;">new</p>
                </ButtonBasic>
            </div>
            <div class="w-full">
                <h1 class="font-sm">expected</h1>
                <p class="font-sm color-brand-three">$ {{ 0 }}</p>
            </div>
            <div class="w-full">
                <h1 class="font-sm">balance</h1>
                <p class="font-sm color-brand-three">$ {{ 0 }}</p>
            </div>
        </div>

        <div>
            <div 
                class="h-full flex flex-column x-center y-center"
                v-if="!companies?.operations"
            >
                <h1 class="font-md">Hmm, i not find!</h1>
                <p class="font-sm o-half">i'm not find any operations now, try create one.</p>
            </div>
            <div class="flex-column gap-md" v-else>
                <ButtonBasic
                    v-for="(item, index) of companies?.operations || []"
                    class="w-full bg-color-brand-one rounded-sm shadow-sm ghost color-brand-four p-lg"
                >
                    
                </ButtonBasic>
            </div>
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
    },
    created(){
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