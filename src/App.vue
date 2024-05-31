<script setup>
import { ref } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import AppFilters from "@/components/AppFilters.vue";
import AppGroups from "@/components/AppGroups.vue";
import AppList from "@/components/AppList.vue";

const filter = ref();

const budgetOperations = ref([
    {
        id: 0,
        category: "Одежда",
        date: "2023-06-28",
        price: 1000,
        type: "exp",
    },
    {
        id: 1,
        category: "Премия",
        date: "2023-06-28",
        price: 2000,
        type: "inc",
    },
]);

const inp = ref(0);
</script>

<template>
    <div class="container">
        <app-header />
        {{ filter }}
        <app-filters v-model="filter" />
        <app-groups />
        <app-list :data="budgetOperations" />
    </div>

    {{ inp }}
    <input
        type="text"
        v-model="inp"
    />
</template>

<style></style>
