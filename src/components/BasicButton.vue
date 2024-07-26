<script setup>
import { defineSlots } from "vue";

const slots = defineSlots();
</script>

<template>
    <button class="btn">
        <span
            class="btn__icon"
            v-if="slots.icon"
        >
            <slot name="icon"></slot>
        </span>

        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    padding: 12px 20px;
    border: 0 none;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: transparent;
    color: $primary;
    border: 1px solid $primary;

    &:has(.btn__icon) {
        background: $primary;
        color: #fff;
    }

    &__icon:not(:empty) {
        border: 1.9px solid #fff;
        border-radius: 50%;
        margin-right: 8px;
        font-weight: 500;
        display: flex;
        width: 15px;
        flex: 0 0 15px;
        justify-content: center;
        align-items: center;
    }
}
</style>
