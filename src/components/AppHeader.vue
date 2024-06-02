<script setup>
import { ref } from "vue";

const balance = ref(0);
</script>

<template>
    <header class="header">
        <div class="container">
            <h1 class="title">
                Баланс: <span>{{ balance }}</span>
            </h1>
            <basic-button>Расход</basic-button>
            <basic-button>Доход</basic-button>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    background-color: #f6f6f6;
    padding-top: 100px;
}
</style>
