<script setup>
import { ref, inject } from "vue";

const balance = ref(0);
const { toggleDrawer } = inject("drawer");
const setCurrentOperationType = inject("currentOperationType");
</script>

<template>
    <header class="header">
        <div class="container">
            <h1 class="title">
                Баланс: <span>{{ balance }}</span>
            </h1>
            <basic-button
                @click="
                    toggleDrawer();
                    setCurrentOperationType('exp');
                "
                >Расход</basic-button
            >
            <basic-button
                @click="
                    toggleDrawer();
                    setCurrentOperationType('inc');
                "
                >Доход</basic-button
            >
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    background-color: #f6f6f6;
    padding-top: 100px;
}
</style>
