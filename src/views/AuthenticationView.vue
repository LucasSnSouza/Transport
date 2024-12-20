<template>

    <div class="authentication-frame w-full h-full flex x-center y-center">
        
        <div 
            v-if="authentication_form_type == 'singup'"
            class="authentication-panel-singup p-xlg color-brand-two h-full flex flex-column x-center gap-lg"
        >

            <div class="flex flex-column gap-xlg">

                <h1 class="font-lg">Sing up</h1>

                <div class="flex gap-md">
                    <div class="text-boxs p-sm rounded-md relative">
                        <p>first name</p>
                        <InputBasic
                            class="w-full p-lg rounded-sm bg-color-brand-one flex"
                            input-class="color-brand-two font-sm"
                            placeholder="First name"
                        />
                    </div>
                    <div class="text-boxs p-sm rounded-md relative ">
                        <p>second name</p>
                        <InputBasic
                            class="w-full p-lg rounded-sm bg-color-brand-one flex"
                            input-class="color-brand-two font-sm"
                            placeholder="Second name"
                        />
                    </div>
                </div>

                <div class="text-boxs p-sm rounded-md relative">
                    <p>your email</p>
                    <InputBasic
                        class="w-full p-lg rounded-sm bg-color-brand-one flex"
                        input-class="color-brand-two font-sm"
                        placeholder="Email"
                    />
                </div>

                <div class="text-boxs p-sm rounded-md relative">
                    <p>your password</p>
                    <InputBasic
                        class="w-full p-lg rounded-sm bg-color-brand-one flex"
                        input-class="color-brand-two font-sm"
                        placeholder="Password"
                    />
                </div>

            </div>

            <div class="flex y-center justify-between">
                <h1 
                    class="font-sm color-brand-three pointer"
                    @click="authentication_form_type = 'singin'"
                >
                    Log in Account
                </h1>
                <ButtonBasic
                    class="bg-color-brand-three p-lg rounded-md pointer color-brand-one w-1-4"
                    @click="$router.push({ path: '/home' })"
                >
                    Create
                </ButtonBasic>
            </div>

        </div>

        <div class="authentication-panel-information w-full h-full p-xlg">

            <div class="authentication-information bg-color-brand-one relative shadow-sm p-xlg flex flex-column x-center y-center w-full h-full rounded-lg">

                <div class="button-change-theme">
                    <ButtonBasic
                        class="bg-color-brand-four aspect-ratio p-md flex x-center y-center rounded-md pointer"
                        @click="toggleThemeMode()"
                    >
                        <MiscIcon
                            icon="light-icon"
                            :size="[24,24]"
                            :color="theme == 'dark' ? '#FFFFFFAA' : '#000000AA'"
                        />
                    </ButtonBasic>
                </div> 

                <div class="information-art-moon aspect-ratio rounded bg-color-brand-star"></div>

                <div class="information-panel p-xlg bg-color-brand-opacity-two color-brand-two flex flex-column x-end w-full h-half">
                    <h1 class="font-sm text-center">"Se não existe vida fora da Terra, então o universo é um grande desperdício de espaço."</h1>
                    <p class="font-sm text-center o-half">Sagan Carl</p>
                </div>

            </div>

        </div>

        <div
            v-if="authentication_form_type == 'singin'"
            class="authentication-panel-singin p-xlg color-brand-two h-full flex flex-column gap-md"
        >
            <div class="singin-header">
            </div>

            <div class="singin-form h-full flex flex-column x-center gap-xlg">

                <h1 class="font-lg">Sing in</h1>

                <div class="flex flex-column gap-xlg">

                    <div class="text-boxs p-sm rounded-md relative">
                        <p>your email</p>
                        <InputBasic
                            v-model="form_singin['email']"
                            class="w-full p-lg rounded-sm bg-color-brand-one flex"
                            input-class="color-brand-two font-sm"
                            placeholder="Email"
                        />
                    </div>

                    <div class="text-boxs p-sm rounded-md relative">
                        <p>your password</p>
                        <InputBasic
                            v-model="form_singin['password']"
                            class="w-full p-lg rounded-sm bg-color-brand-one flex"
                            input-class="color-brand-two font-sm"
                            placeholder="Email"
                        />
                    </div>

                </div>

                <div class="flex y-center justify-between">
                    <h1 
                        class="font-sm color-brand-three pointer"
                        @click="authentication_form_type = 'singup'"
                    >
                        Create Account
                    </h1>
                    <ButtonBasic
                        class="bg-color-brand-three p-lg rounded-md pointer color-brand-one w-1-4"
                        @click="$router.push({ path: '/home' })"
                    >
                        Next
                    </ButtonBasic>
                </div>

            </div>

            <div class="singin-footer">
                <p class="font-sm pointer">Need Help?</p>
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

export default{
    data(){
        return{
            authentication_form_type: "singin",
            form_singin: {

            },
            form_singup: {

            }
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Button,
        ...Input
    },
    computed: {
        theme() {
            return useSystemStore().getTheme;
        },
    },
    methods: {
        toggleThemeMode(){
            useSystemStore().toggleTheme()
        }
    }
}


</script>

<style lang="scss" scoped>

.authentication-frame{

    .authentication-panel-information{
        .authentication-information{

            overflow: hidden;

            .button-change-theme{
                position: absolute;
                top: var(--scale-brand-md);
                left: var(--scale-brand-md);
            }

            .information-art-moon{
                width: 180px;
            }

            .information-panel{
                backdrop-filter: blur(8px);
                position: absolute;
                bottom: 0;
                left: 0;
            }

        }
    }

    .authentication-panel-singup{
        min-width: 480px;
    }

    .authentication-panel-singin{
        min-width: 480px;
    }

}

.text-boxs{
    p{
        position: absolute;
        font-size: var(--text-brand-sm);
        background: var(--color-brand-four);
        padding: 0px var(--scale-brand-md) 0px var(--scale-brand-md); 
        top: -17px;
        left: var(--scale-brand-md)
    }

    border: var(--color-brand-two) 1px solid;
}

</style>