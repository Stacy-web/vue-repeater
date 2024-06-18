<script setup>
import { computed, ref } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import AppFilters from "@/components/AppFilters.vue";
import AppGroups from "@/components/AppGroups.vue";
import AppList from "@/components/AppList.vue";
import AppForm from "@/components/AppForm.vue";

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

const filterBudgetOperations = computed(() => {
    if (filter.value) {
        return budgetOperations.value.filter(
            (item) => item.type === filter.value
        );
    }

    return budgetOperations.value;
});

function addOperation(value) {
    budgetOperations.value.push(value);
}
</script>

<template>
    <app-header />
    <app-form @add-operation="addOperation" />
    <div class="container">
        <app-filters v-model="filter" />
        <app-groups />
        <app-list :data="filterBudgetOperations" />
    </div>
</template>

<style lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
