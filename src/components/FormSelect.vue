<script setup>
import { ref, defineModel, provide } from "vue";

const selected = defineModel();
const isFocus = ref(false);

provide("select", {
    isFocus,
    selected,
});
</script>

<template>
    <div class="custom-select">
        <a
            href=""
            @click.prevent="isFocus = !isFocus"
            class="custom-select__target"
        >
            <slot name="caption"></slot>
        </a>

        <ul
            v-show="isFocus"
            class="custom-select__options"
        >
            <slot></slot>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.custom-select {
    position: relative;

    &__options {
        position: absolute;
        background-color: #fff;
        bottom: -100%;
        left: 0;
        transform: translateY(100%);
    }
}
</style>
