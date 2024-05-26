<script setup>
import { defineProps } from "vue";

defineProps({
    category: String,
    date: String,
    price: Number,
    comment: {
        require: false,
        type: String,
    },
    type: String,
});
</script>

<template>
    <li class="">
        <div>
            <span>#{{ category }}</span>
            <span>{{ date }}</span>
        </div>
        <span>{{ price }}</span>
        <p v-if="comment">{{ comment }}</p>

        <basic-button :isIcon="false">Редактировать</basic-button>
        <basic-button :isIcon="false">Удалить</basic-button>
    </li>
</template>
