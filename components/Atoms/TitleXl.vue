<template>
    <div class="">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-800">{{text}}</h1>
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