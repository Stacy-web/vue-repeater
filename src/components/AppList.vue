<script setup>
import { defineProps } from "vue";

import AppListItem from "@/components/AppListItem.vue";

defineProps({
    data: Array,
});
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
