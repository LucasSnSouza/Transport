<template>

    <div class="configuration-view-wrapper w-full h-full p-xlg flex flex-column gap-xlg bg-color-brand-one">
        
        <div class="flex gap-md">

            <div class="themed-buttons flex flex-column gap-md">
                <ButtonBasic
                    class="w-half aspect-ratio p-md bg-color-brand-three rounded-sm flex flex-column justify-between color-brand-one"
                    @click="setTheme()"
                >
                    <MiscIcon
                        icon="theme-icon"
                        :size="[24,24]"
                    />
                    <p>Theme</p>
                </ButtonBasic>
                <ButtonBasic
                    class="w-half aspect-ratio p-md bg-color-brand-three rounded-sm flex flex-column justify-between color-brand-one"
                    @click="setTheme()"
                >
                    <MiscIcon
                        icon="language-icon"
                        :size="[24,24]"
                    />
                    <p>Language</p>
                </ButtonBasic>
            </div>

            <div class="flex flex-column gap-md w-full">

                <InputBasic
                    v-model="form['name']"
                    class="ghost rounded-sm color-brand-five"
                    input-class="p-lg font-sm color-brand-two"
                    :placeholder="'Business Proprietary'"
                    :value="form['name']"
                />

                <InputText
                    v-model="form['description']"
                    class="ghost rounded-sm color-brand-five h-full"
                    input-class="p-lg font-sm color-brand-two"
                    :placeholder="'Business Description'"
                    :value="form['description']"
                />

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
            form: {},
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
        setTheme(){

        },
        setLanguage(){

        }
    },
    created(){

    }
}

</script>

<style lang="scss">

.themed-buttons{
    button{
        width: 70px;
    }
}


</style>