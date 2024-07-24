<script setup></script>

<template>
    <button class="btn">
        <span class="btn__icon">
            <slot name="icon"></slot>
        </span>

        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    background: $primary;
    padding: 12px 20px;
    color: #fff;
    border: 0 none;
    cursor: pointer;
    display: flex;
    align-items: center;

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
