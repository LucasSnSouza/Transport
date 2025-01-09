<template>

    <div class="fundation-view-wrapper w-full h-full p-xlg flex flex-column gap-xlg">

        <div class="flex gap-xlg justify-between">

            <div class="w-full">
                <h1 class="font-sm color-brand-three">proprietary</h1>
                <p class="font-sm">{{ owner }}</p>
            </div>

            <div class="w-full">
                <h1 class="font-sm color-brand-three">funds</h1>
                <p class="font-sm">{{ companyFounds - form['funds'] }}</p>
            </div>

        </div>

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
                    v-model="form['funds']"
                    class="ghost rounded-sm color-brand-five flex"
                    input-class="p-lg font-sm color-brand-two"
                    type="number"
                    placeholder="Funds"
                    :value="form['funds']"
                >
                </InputBasic>

            </div>

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
                    v-model="form['neighborhood']"
                    :disabled="true"
                    class="ghost rounded-sm color-brand-five flex"
                    input-class="p-lg font-sm color-brand-two"
                    placeholder="Neighborhood"
                    :value="form['neighborhood']"
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
                placeholder="Description"
                :value="form['description']"
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
            form: {
                funds: 0
            }
        }
    },
    watch: {
        'form.cep': function(value) {
            if(value.length > 7){
                fetch(`https://viacep.com.br/ws/${value}/json/`)
                    .then((response) => response.json())
                    .then(data => {
                        this.form = {
                            ...this.form,
                            state: data?.uf,
                            neighborhood: data?.bairro,
                            street: data?.logradouro,
                            city: data?.localidade,
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
        companyFounds(){
            return 3000
        },
        owner(){
            return "Lucas dos Santos Souza"
        }
    },
    created(){
        useSystemStore().setTaskbar(true);
    }
}

</script>

<style>

</style>