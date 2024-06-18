<script setup>
import { defineModel } from "vue";

const model = defineModel({
    type: [String, null],
    default: null,
});
</script>

<template>
    <form-select v-model="model">
        <template #caption>Тип операции</template>
        <form-select-option value="inc">Доход</form-select-option>
        <form-select-option value="exp">Расход</form-select-option>
    </form-select>
</template>
