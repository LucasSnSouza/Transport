<template>
    <div 
        class="system-viewer-wrapper bg-color-brand-one w-full h-full relative flex x-center y-center"
        :class="class"
    >

        <div
            v-for="(item, index) of system"
            :index="index"
        >

            <div
                class="bodie absolute rounded flex x-center y-center"
                :style="
                    {
                        transform: `translate(${item?.position[0]}px, ${item?.position[1]}px) scale(${item?.meta.radius})`,
                        background: item?.meta.color,
                        color: item?.meta.color
                    }
                "
            >
            </div>
        
        </div>
    
    </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    props: {
        class: {
            type: String,
            default: ""
        },
        system: {
            type: Array,
            default: () => []
        }
    }
}

</script>

<style lang=scss>

.system-viewer-wrapper{
    // background: rgb(16, 16, 16);

    .bodie{
        width: 30px;
        height: 30px;

    }
    .bodie::before{
        content: "";
        display: flex;
        width: 100%;
        height: 100%;
        transform: scale(1.2);
        border-radius: 100%;
        opacity: 0.5;
        background: currentColor;
    }
    
}

</style>