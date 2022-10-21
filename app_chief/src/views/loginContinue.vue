<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
    crossorigin="anonymous">
    
    <loginComponent></loginComponent>
</template>

<script>
import loginComponent from '@/components/loginComponent.vue';

export default {
    name: "loginView",
    components: {loginComponent},
}
</script>

<style>
    
</style>