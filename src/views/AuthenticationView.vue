<template>

    <div class="authentication-frame p-xlg w-full h-full flex x-center y-center">
        
        <div class="authentication-panel bg-color-brand-three rounded-lg shadow-sm flex flex-column gap-lg p-lg">

            <div class="information-frame flex flex-column gap-xlg w-half rounded-md h-full bg-color-brand-one p-xlg">

                <div class="flex flex-column gap-sm color-brand-two">

                    <h1 class="font-md">Join and take command</h1>
                    <p class="font-sm o-half">Your troops and ships stay here for your command</p>

                </div>

                <div class="flex flex-column gap-md">

                    <InputBasic
                        class="bg-color-brand-four rounded-md p-lg"
                        placeholder="Email"
                    />

                    <InputBasic
                        class="bg-color-brand-four rounded-md p-lg"
                        placeholder="Password"
                    />

                </div>

                <div class="flex flex-column gap-sm">

                    <ButtonBasic
                        class="bg-color-brand-three rounded p-lg pointer"
                        @click="$router.push({ path: '/home' })"
                    >
                        <p class="font-sm color-brand-one">Sing in</p>
                    </ButtonBasic>

                </div>

                <div class="flex flex-column gap-sm">

                    <p class="font-sm color-brand-two">If you still don’t have an 
                        <strong class="color-brand-three">account</strong> in our system, try creating one 
                        <strong class="color-brand-three pointer">here</strong>
                    .</p>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

import { useSystemStore } from '@/stores/system.js'

import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"
import * as Button from "@/components/Button"
import * as Input from "@/components/Input"
import router from '@/router'

export default{
    data(){
        return{
            systemStore: useSystemStore() 
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button,
        ...Input
    },
    methods: {
    }
}


</script>

<style lang="scss" scoped>

.authentication-panel{
    width: 700px;
}


</style>