<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
    value: {
        type: String,
        required: true,
    },
});

defineEmits(["selectOption"]);
</script>

<template>
    <li>
        <a
            href=""
            @click.prevent="(e) => $emit('selectOption', value)"
            ><slot></slot
        ></a>
    </li>
</template>
