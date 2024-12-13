<template>

    <div 
        class="card-wrapper pointer flex flex-column gap-md shadow-sm p-md overflow-hidden rounded-md card draggable"
        :class="{'drag': dragging}"
        :style="{ top: `${position.y}px`, left: `${position.x}px` }"
        @mousedown="prepare"
        @mouseup="dragfinish"
    >
        <div>
            <div class="flex x-center y-center gap-md">
    
                <div 
                    v-if="content?.icon"
                    class="bg-color-brand-three p-md rounded-sm"
                >
                    <MiscIcon
                        :icon="content?.icon"
                        color="#FFFFFF"
                    />
                </div>
    
                <div class="flex flex-column w-full">
                    <p class="font-xsm o-half">{{ content?.status.text }}</p>
                    <h1 class="font-sm o-3-4">{{ content?.title }}</h1>
                </div>
    
            </div>
    
            <div>
    
                <p class="font-xsm o-half">{{ content?.description }}</p>
    
            </div>
        </div>

    </div>

</template>

<script>

import * as Misc from "@/components/Misc"

export default{
    data(){
        return{
            dragTime: null,
            dragging: false,
            position: {
                x: 300,
                y: 300,
            },
            offset: { 
                x: 0, 
                y: 0 
            },
        }
    },
    components: {
        ...Misc
    },
    props: {
        content: {
            type: Object,
            default: () => {}
        }
    },
    methods:{
        prepare(event){
            this.dragTime = setTimeout(() => {
                this.draggin(event);
            }, 500);
        },
        draggin(event){
            this.dragging = true;
            this.offset.x = event.clientX - this.position.x;
            this.offset.y = event.clientY - this.position.y;
            window.addEventListener("mousemove", this.drag);
            window.addEventListener("mouseup", this.dragout);
        },
        dragfinish(){
            if(this.dragTime){
                clearTimeout(this.dragTime);
                this.dragTime = null;
                if(!this.dragging){
                    this.$emit('Action');
                }
            }
        },
        dragout(){
            this.dragging = false;
            window.removeEventListener("mousemove", this.drag);
            window.removeEventListener("mouseup", this.dragout);
        },
        drag(event){
            if(this.dragging){
                this.position.x = event.clientX - this.offset.x;
                this.position.y = event.clientY - this.offset.y;
            }
        }
    }
}

</script>

<style lang="scss">

.card-wrapper{
    position: absolute;
    user-select: none;
    max-width: 230px;
    background: white;

    &.drag{
        transform: scale(1.1);
        box-shadow: 10px 10px 18px rgba(0, 0, 0, 0.05);
    }

    &.card-wrapper::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        backdrop-filter: blur(2px);
        transition: width 0.5s linear;
        z-index: 3;
    }

    &.card-wrapper:active::before{
        width: 100%;
    }
}




</style>