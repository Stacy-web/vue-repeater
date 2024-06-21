<script setup>
import AppForm from "@/components/AppForm.vue";
</script>

<template>
    <div class="drawer">
        <h2>Добавление расхода</h2>

        <app-form />
    </div>
</template>

<style scoped lang="scss">
.drawer {
    width: 250px;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
}
</style>
