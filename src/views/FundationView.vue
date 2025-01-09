<template>

    <div class="fundation-view-wrapper w-full h-full p-lg flex flex-column gap-xlg">

        <div class="flex flex-column gap-xlg">

            <div class="flex gap-lg">

                <InputBasic
                    class="ghost rounded-sm color-brand-five"
                    input-class="p-lg font-sm color-brand-two"
                    placeholder="Company Name"
                />

                <InputBasic
                    class="ghost rounded-sm color-brand-five"
                    input-class="p-lg font-sm color-brand-two"
                    type="number"
                    placeholder="Funds"
                />

            </div>

            <InputBasic
                class="ghost rounded-sm color-brand-five"
                input-class="p-lg font-sm color-brand-two"
                placeholder="E-mail"
            />

            <InputText
                class="ghost rounded-sm color-brand-five"
                input-class="p-lg font-sm color-brand-two"
                placeholder="Description"
            />

        </div>

        <div>
            <ButtonBasic
                class="bg-color-brand-two color-brand-one p-lg rounded-sm w-half"
            >
                <p>Submit</p>
            </ButtonBasic>
        </div>

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