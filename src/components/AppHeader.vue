<script setup>
import { ref } from "vue";

const balance = ref(0);
</script>

<template>
    <h1>
        Баланс: <span>{{ balance }}</span>
    </h1>
    <basic-button>Расход</basic-button>
    <basic-button>Доход</basic-button>
</template>
