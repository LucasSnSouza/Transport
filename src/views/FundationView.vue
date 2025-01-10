<template>

    <div class="fundation-view-wrapper w-full h-full p-xlg flex flex-column gap-xlg bg-color-brand-one">

        <div class="superior flex gap-xlg justify-between">

            <div class="w-full">
                <h1 class="font-sm">proprietary</h1>
                <p class="font-sm color-brand-three">{{ business.owner }}</p>
            </div>

            <div class="w-full">
                <h1 class="font-sm">bank</h1>
                <p class="font-sm color-brand-three">{{ business.balance - form['balance'] }}</p>
            </div>

        </div>

        <div 
            v-if="!created"
            class="flex flex-column gap-xlg"
        >
            <div class="flex flex-column gap-xlg">
            
                <div class="flex gap-lg">
    
                    <InputBasic
                        v-model="form['name']"
                        class="ghost rounded-sm color-brand-five"
                        input-class="p-lg font-sm color-brand-two"
                        placeholder="Company Name"
                        :value="form['name']"
                    />
    
                    <InputBasic
                        v-model="form['balance']"
                        class="ghost rounded-sm color-brand-five flex"
                        input-class="p-lg font-sm color-brand-two"
                        type="number"
                        placeholder="Balance"
                        :value="form['balance']"
                    >
                    </InputBasic>
    
                </div>

                <InputSelect
                    :items="types"
                    :value="form['type']"
                    reference="label"
                    class="font-sm ghost rounded-sm color-brand-five p-lg"
                    input-options-class="p-lg flex flex-column gap-md font-sm ghost rounded-sm color-brand-five bg-color-brand-one shadow-sm"
                    placeholder="Type"
                    #default="{ item }"
                >
                    <ButtonBasic
                        class="p-sm bg-none flex x-start"
                        @click="form['type'] = item"
                    >
                        <p>{{ item?.label }}</p>
                    </ButtonBasic>
                </InputSelect>
    
                <div class="flex gap-lg">
    
                    <InputBasic
                        v-model="form['cep']"
                        class="ghost rounded-sm color-brand-five"
                        input-class="p-lg font-sm color-brand-two"
                        placeholder="Company Cep"
                        type="number"
                        :value="form['cep']"
                    />
    
                    <InputBasic
                        v-model="form['state']"
                        :disabled="true"
                        class="ghost rounded-sm color-brand-five flex"
                        input-class="p-lg font-sm color-brand-two"
                        placeholder="State"
                        :value="form['state']"
                    />
    
                    <InputBasic
                        v-model="form['city']"
                        :disabled="true"
                        class="ghost rounded-sm color-brand-five flex"
                        input-class="p-lg font-sm color-brand-two"
                        placeholder="City"
                        :value="form['city']"
                    />
    
                </div>
    
                <div class="flex gap-lg">
    
                    <InputBasic
                        v-model="form['district']"
                        :disabled="true"
                        class="ghost rounded-sm color-brand-five flex"
                        input-class="p-lg font-sm color-brand-two"
                        placeholder="District"
                        :value="form['district']"
                    />
                    
                    <InputBasic
                        v-model="form['street']"
                        :disabled="true"
                        class="ghost rounded-sm color-brand-five flex"
                        input-class="p-lg font-sm color-brand-two"
                        placeholder="Street"
                        :value="form['street']"
                    />
    
                </div>
    
                <InputText
                    v-model="form['description']"
                    class="ghost rounded-sm color-brand-five"
                    input-class="p-lg font-sm color-brand-two"
                    placeholder="Company description"
                    :value="form['description']"
                />
    
            </div>
    
            <div>
                <ButtonBasic
                    class="bg-color-brand-two color-brand-one p-lg rounded-sm w-half"
                    @click="createCompanie(), created = true"
                >
                    <p>Submit</p>
                </ButtonBasic>
            </div>
        </div>

        <div 
            v-else
            class="flex flex-column y-center gap-xlg"
        >

            <div
                v-if="!error" 
                class="flex flex-column y-center gap-xlg"
            >
                <div>
                    <h1 class="font-md text-center">Congratulations</h1>
                    <p class="font-sm o-half text-center">Your business created of success and now, you can manager your dreams.</p>
                </div>
    
                <ButtonBasic
                    class="bg-color-brand-two color-brand-one p-lg rounded-sm w-half"
                    @click="$router.push({ path: '/' })"
                >
                    <p>Go Home</p>
                </ButtonBasic>
            </div>

            <div
                v-else 
                class="flex flex-column y-center gap-xlg"
            >
                <div>
                    <h1 class="font-md text-center">Ah, sorry</h1>
                    <p class="font-sm o-half text-center">It seems that some information was not entered correctly. Could you please complete the form entirely?</p>
                </div>

                <div class="flex flex-column gap-md w-half">
                    <ButtonBasic
                        class="bg-color-brand-two color-brand-one p-lg rounded-sm w-full"
                        @click="error = false, created = false"
                    >
                        <p>Try again</p>
                    </ButtonBasic>
                    <ButtonBasic
                        class="bg-color-brand-two color-brand-one p-lg rounded-sm w-full"
                        @click="$router.push({ path: '/' })"
                    >
                        <p>Go Home</p>
                    </ButtonBasic>
                </div>

            </div>

        </div>
    </div>
    
</template>

<script>

import { useSystemStore } from '@/stores/system.js'
import { useManagerStore } from '@/stores/manager.js'

import { validateObject } from '@/utils/validate.js'
import { createCompanie } from '@/utils/storage.js'

import { types } from '@/defaults/defaultsTypes.js'

import * as Button from "@/components/Button"
import * as Input from "@/components/Input"
import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            form: {
                balance: 0,
                owner: useManagerStore().getBusiness.owner,
                createdAt: new Date().toLocaleDateString('pt-BR')
            },
            business: useManagerStore().getBusiness,
            companies: useManagerStore().getCompanies,
            created: false,
            error: false,
        }
    },
    watch: {
        'form.cep': function(value) {
            if(value.length > 7){
                fetch(`https://cep.awesomeapi.com.br/json/${value}`)
                    .then((response) => response.json())
                    .then(data => {
                        this.form = {
                            ...this.form,
                            state: data?.state,
                            district: data?.district,
                            street: data?.address,
                            city: data?.city,
                            geolocation: {
                                latitude: data?.lat,
                                longitude: data?.lng
                            },
                            ddd: data?.ddd,
                            ibge: data?.city_ibge
                        }
                    })
            }
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc,
    },
    computed:{
        types(){
            return types;
        }
    },
    methods: {
        createCompanie(){
            if(validateObject(this.form, ['balance', 'name', 'cep'])){
                useManagerStore().setCompanie(this.form);
            }else{
                this.error = true
            }
        }
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