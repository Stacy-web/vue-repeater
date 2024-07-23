<script setup>
import { computed, ref, onMounted, reactive, provide } from "vue";

import axios from "axios";

import AppHeader from "@/components/AppHeader.vue";
import AppFilters from "@/components/AppFilters.vue";
import AppGroups from "@/components/AppGroups.vue";
import AppList from "@/components/AppList.vue";
import AppForm from "@/components/AppForm.vue";

import BasicDrawer from "@/components/BasicDrawer.vue";

const filter = reactive({});

const budgetCategories = ref([]);
const budgetOperations = ref([
    {
        id: 0,
        category: "0",
        date: "2023-06-28",
        price: 1000,
        type: "exp",
    },
    {
        id: 1,
        category: "1",
        date: "2023-06-28",
        price: 2000,
        type: "inc",
    },
]);

provide("categories", budgetCategories);

const filterBudgetOperations = computed(() => {
    if ("type" in filter) {
        return budgetOperations.value.filter(
            (item) => item.type === filter.type
        );
    }

    if ("category" in filter) {
        return budgetOperations.value.filter(
            (item) => item.category === filter.category
        );
    }

    return budgetOperations.value;
});

onMounted(async () => {
    try {
        const { data } = await axios.get(
            "https://2908ee0434d9dea7.mokky.dev/category"
        );
        budgetCategories.value = data;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <app-header />
    <div class="container">
        <app-filters v-model="filter" />
        <app-groups />
        <app-list :data="filterBudgetOperations" />
    </div>

    <basic-drawer title="">
        <app-form v-model="budgetOperations" />
    </basic-drawer>
</template>

<style lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
