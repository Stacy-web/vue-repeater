<script setup>
import { defineModel, inject } from "vue";

const model = defineModel({
    type: [Object, null],
    default: null,
});

const categories = inject("categories");
</script>

<template>
    <form-select v-model="model.type">
        <template #caption>Тип операции</template>
        <form-select-option value="inc">Доход</form-select-option>
        <form-select-option value="exp">Расход</form-select-option>
    </form-select>
    <form-select
        v-model="model.category"
        v-if="categories"
    >
        <template #caption>Категория</template>
        <form-select-option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
            >{{ category.name }}</form-select-option
        >
    </form-select>
</template>
