<template>
    
    <div class="hangar-view-wrapper w-full h-full p-xlg">

    </div>

</template>

<script>

import { useSystemStore } from '@/stores/system.js'

export default{
    data(){
        return{

        }
    },
    created(){
        useSystemStore().setTaskbar(true);
    }
}

</script>

<style>

</style>