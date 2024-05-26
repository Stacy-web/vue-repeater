<script setup>
import { ref } from "vue";

import AppListItem from "@/components/AppListItem.vue";

const data = ref([
    {
        id: 0,
        category: "Одежда",
        date: "2023-06-28",
        price: 1000,
        type: "exp",
    },
]);
</script>

<template>
    <ul>
        <app-list-item
            v-for="item in data"
            :key="item.id"
            :="item"
        />
    </ul>
</template>
