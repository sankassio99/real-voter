<template>
    <div class="">
        <h1 class="text-xl lg:text-3xl font-bold text text-gray-800">{{text}}</h1>
    </div>
</template>

<script>
export default {
    props:{
        text: {
            type: String,
            required: true,
        },
    }
}
</script>

<style>

</style>