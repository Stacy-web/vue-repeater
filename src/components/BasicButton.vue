<script setup>
import { defineProps } from "vue";
defineProps({
    isIcon: {
        type: Boolean,
        default: true,
    },
    id: String,
});
</script>

<template>
    <button :id="id">
        <span v-if="isIcon">+</span>
        <slot></slot>
    </button>
</template>
