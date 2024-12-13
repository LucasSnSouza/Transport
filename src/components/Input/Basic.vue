<template>
    <div 
        class="input-basic-wrapper"
        :class="class"
    >
        <input 
            :type="type"
            :value="value"
            :placeholder="placeholder"
            @input="(data) => { $emit('update:modelValue', data.target.value); }"
        >
    </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    props:{
        class: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        length: {
            type: Number,
            default: 0
        },
        value: {
            type: [String, Number],
            default: null
        },
        type: {
            type: String,
            default: "text",
            example: ['text', 'number']
        }
    },
    watch:{

    }
}

</script>

<style lang="scss" scoped>

.input-basic-wrapper{

    input{
        width: 100%;
        height: 100%;
        border: none;
        background: none;
        outline: none;
    }

}

</style>