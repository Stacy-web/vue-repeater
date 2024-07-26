<script setup>
import { inject, defineProps } from "vue";

defineProps({
    balance: Number,
});
const { toggleDrawer } = inject("drawer");
const setCurrentOperationType = inject("currentOperationType");
</script>

<template>
    <header class="header">
        <div class="container">
            <h1 class="title">
                <span>Баланс:</span>
                {{ balance.toLocaleString("ru") }} ₽
            </h1>
            <div class="header__btn-group">
                <basic-button
                    @click="
                        toggleDrawer();
                        setCurrentOperationType('exp');
                    "
                >
                    <template #icon>-</template>
                    Расход
                </basic-button>
                <basic-button
                    @click="
                        toggleDrawer();
                        setCurrentOperationType('inc');
                    "
                >
                    <template #icon>+</template>
                    Доход
                </basic-button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    background-color: #f6f6f6;
    padding-top: 100px;

    &__btn-group {
        display: flex;
        align-items: stretch;

        & > *:first-child {
            margin-right: 12px;
        }
    }
}
</style>
