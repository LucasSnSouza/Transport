<template>

    <div class="home-view-wrapper w-full h-full p-xlg bg-color-brand-one">

        <button @click="$router.push({ path: '/fundation' })">Fundation</button>

    </div>
    
</template>

<script>

import { useSystemStore } from '@/stores/system.js'

import * as Button from "@/components/Button"
import * as Input from "@/components/Input"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{

        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc,
    },
    created(){
        useSystemStore().setTaskbar(true);
    }
}

</script>

<style>

</style>