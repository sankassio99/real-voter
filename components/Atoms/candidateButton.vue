<template>
    <div class="base-button bg-red-400 py-2 w-full flex items-center justify-center rounded-full hover:bg-red-500 p-10 cursor-pointer">
        <p class="text-lg">{{name}} {{number}}</p>
    </div>
</template>

<script>
export default {
    props:{
        name: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
    }
}
</script>

<style>

</style>