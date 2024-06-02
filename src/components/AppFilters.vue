<script setup>
import { ref, defineModel } from "vue";

import AppSelect from "@/components/AppSelect.vue";
import AppSelectOption from "@/components/AppSelectOption.vue";

const model = defineModel({
    type: [String, null],
    default: null,
});

function onSelect(value) {
    model.value = value;
}

const t = ref("test");
</script>

<template>
    {{ t }}
    <app-select v-model="t">
        <template #caption>Тип операции</template>
        <app-select-option
            value="inc"
            @select-option="onSelect"
            >Доход</app-select-option
        >
        <app-select-option
            value="exp"
            @select-option="onSelect"
            >Расход</app-select-option
        >
    </app-select>
</template>
