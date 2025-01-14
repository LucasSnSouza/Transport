<template>

    <div class="companie-view-wrapper w-full h-full p-xlg flex flex-column gap-xlg bg-color-brand-one">

        <div class="superior flex gap-xlg justify-between">
            <div class="w-full">
                <h1 class="font-sm">bank</h1>
                <p class="font-sm color-brand-three">$ {{ $money(business.balance) }}</p>
            </div>
            <div class="w-full">
                <h1 class="font-sm">balance</h1>
                <p class="font-sm color-brand-three">$ {{ $money(company.balance) }}</p>
            </div>
            <div class="w-full">
                <h1 class="font-sm">employees</h1>
                <p class="font-sm color-brand-three">{{ company?.employees || 0 }}</p>
            </div>
        </div>

        <div class="companie-information-frame flex flex-column gap-md">
            <div class="flex gap-md">
                <p class="font-sm bg-color-brand-three p-md color-brand-one rounded-sm">{{  company.name }}</p>
                <p class="font-sm bg-color-brand-two p-md color-brand-one rounded-sm">{{  company.type.label }}</p>
            </div>
            <p class="font-sm o-3-4">{{ company.description }}</p>
        </div>

        <MiscDivision/>

        <div class="companie-records-frame flex flex-column gap-md">
            <div v-if="computedRecords.records.length > 0">
                DD
            </div>
            <div v-else>
                <p class="font-sm color-brand-three">sem registros de gastos encontrados</p>
                <p class="font-sm o-half">Você ainda não realizou nenhum gasto, assim que tiver alguma movimentação te informaremos aqui.</p>
            </div>
        </div>

        <MiscDivision/>

        <div class="flex flex-column gap-md">

            <div class="flex gap-md">
                <ButtonBasic
                    class="flex flex-column gap-sm bg-color-brand-three p-lg w-full rounded-sm color-brand-one"
                    @click="$router.push({ path: '/operations', query: { id: $route.query.id } })"
                >
                    <MiscIcon
                        icon="jobs-icon"
                        :size="[20,20]"
                        color="#FFFFFF"
                    />
                    <p>Operations</p>
                </ButtonBasic>
            </div>

            <div class="flex gap-md">
                <ButtonBasic
                    class="flex flex-column gap-sm bg-color-brand-three p-lg w-full rounded-sm color-brand-one"
                >
                    <MiscIcon
                        icon="workers-icon"
                        :size="[20,20]"
                        color="#FFFFFF"
                    />
                    <p>Staff</p>
                </ButtonBasic>
                <ButtonBasic
                    class="flex flex-column gap-sm bg-color-brand-three p-lg w-full rounded-sm color-brand-one"
                    @click="$router.push({ path: '/garage', query: { id: $route.query.id } })"
                >
                    <MiscIcon
                        icon="garage-icon"
                        :size="[18,18]"
                        color="#FFFFFF"
                    />
                    <p>Garage</p>
                </ButtonBasic>
            </div>

            <div class="flex gap-md">
                <ButtonBasic
                    class="flex flex-column gap-sm bg-color-brand-three p-lg w-full rounded-sm color-brand-one"
                >
                    <MiscIcon
                        icon="storage-icon"
                        :size="[22,22]"
                        color="#FFFFFF"
                    />
                    <p>Storage</p>
                </ButtonBasic>
            </div>

            <div class="flex gap-md">
                <ButtonBasic
                    class="flex flex-column gap-sm bg-color-brand-three p-lg w-full rounded-sm color-brand-one"
                >
                    <MiscIcon
                        icon="place-icon"
                        :size="[20,20]"
                        color="#FFFFFF"
                    />
                    <p>Places</p>
                </ButtonBasic>
                <ButtonBasic
                    class="flex flex-column gap-sm bg-color-brand-three p-lg w-full rounded-sm color-brand-one"
                >
                    <MiscIcon
                        icon="structure-icon"
                        :size="[18,18]"
                        color="#FFFFFF"
                    />
                    <p>Structures</p>
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
            records: useManagerStore().getRecords,
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc,
    },
    computed:{
        computedRecords(){
            return this.records.find((item) => item.uid == this.$route.query?.uid);
        },
        company(){
            return this.companies[this.$route.query?.id || 0];
        }
    },  
    methods: {
        redirect(){
            this.$router.push({ path: '/foundation' });
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