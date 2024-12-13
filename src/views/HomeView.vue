<template>
    
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

<script>

</script>