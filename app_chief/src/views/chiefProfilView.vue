<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
    crossorigin="anonymous">
    
    <chiefProfilComponent></chiefProfilComponent>
</template>

<script>
import chiefProfilComponent from '@/components/chiefProfilComponent.vue';

export default {
    name: "chiefProfilView",
    components: {chiefProfilComponent},
}
</script>

<style>

</style>