<script setup>
import { ref } from "vue";

const balance = ref(0);

const buttonOptions = {
    id: "test",
};
</script>

<template>
    <h1>
        Баланс: <span>{{ balance }}</span>
    </h1>
    <basic-button>Расход</basic-button>
    <basic-button>Доход</basic-button>

    <!-- Для теста -->
    <basic-button
        :isIcon="false"
        v-bind="buttonOptions"
        >Редактировать</basic-button
    >
</template>
