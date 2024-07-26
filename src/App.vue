<script setup>
import { computed, ref, onMounted, reactive, provide } from "vue";

import axios from "axios";

import AppHeader from "@/components/AppHeader.vue";
import AppFilters from "@/components/AppFilters.vue";
import AppGroups from "@/components/AppGroups.vue";
import AppList from "@/components/AppList.vue";
import AppForm from "@/components/AppForm.vue";

import BasicDrawer from "@/components/BasicDrawer.vue";

const currentOperationType = ref(null);
const filter = reactive({
    type: currentOperationType,
});
const drawer = reactive({
    isOpen: false,
    title: "",
});
const budgetCategories = ref([]);
const budgetOperations = ref([]);

provide("drawer", { drawer, toggleDrawer });
provide("currentOperationType", setCurrentOperationType);

const filterBudgetOperations = computed(() => {
    if ("type" in filter && filter.type) {
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
const filterBudgetCategories = computed(() => {
    return budgetCategories.value.filter(
        (item) => item.type === currentOperationType.value
    );
});
const balance = computed(() => {
    return budgetOperations.value.reduce((sum, item) => sum + item.price, 0);
});

provide("categories", filterBudgetCategories);

onMounted(async () => {
    try {
        const { data: categories } = await axios.get(
            "https://2908ee0434d9dea7.mokky.dev/category"
        );
        budgetCategories.value = categories;

        const { data: operations } = await axios.get(
            "https://2908ee0434d9dea7.mokky.dev/operations"
        );
        budgetOperations.value = operations;
    } catch (error) {
        console.log(error);
    }
});

function toggleDrawer() {
    drawer.isOpen = !drawer.isOpen;
}
function setCurrentOperationType(value) {
    currentOperationType.value = value;
}
async function addOperation(item) {
    try {
        const { data: operation } = await axios.post(
            "https://2908ee0434d9dea7.mokky.dev/operations",
            item
        );
        budgetOperations.value.push(operation);
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <app-header :balance="balance" />
    <div class="container">
        <app-filters v-model="filter" />
        <app-groups />
        <app-list :data="filterBudgetOperations" />
    </div>

    <basic-drawer :="drawer">
        <app-form
            @addOperation="addOperation"
            :type="currentOperationType"
        />
    </basic-drawer>
</template>

<style lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
