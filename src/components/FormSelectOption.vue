<script setup>
import { defineProps, inject } from "vue";

const props = defineProps({
    value: String,
});

const { isFocus, selected } = inject("select");

function onSelect() {
    selected.value = props.value;
    isFocus.value = !isFocus.value;
}
</script>

<template>
    <li>
        <a
            href=""
            @click.prevent="onSelect"
        >
            <slot></slot>
        </a>
    </li>
</template>
