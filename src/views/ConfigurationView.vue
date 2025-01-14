<template>

    <div class="configuration-view-wrapper w-full h-full p-xlg flex flex-column gap-xlg bg-color-brand-one">
        
        

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


</style>