<script setup>
import { defineProps } from "vue";

defineProps({
    title: String,
    isOpen: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div
        class="drawer"
        v-if="isOpen"
    >
        <h2>{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.drawer {
    width: 250px;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
}
</style>
