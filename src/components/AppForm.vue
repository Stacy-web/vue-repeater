<script setup>
import { reactive, defineProps, inject, defineEmits } from "vue";

import { ru } from "date-fns/locale";

const props = defineProps({
    type: String,
});
const initialData = {
    date: "",
    type: props.type,
    category: "",
    price: 0,
    comment: "",
};
const formData = reactive({ ...initialData });
const categories = inject("categories");
const { toggleDrawer } = inject("drawer");

const emit = defineEmits(["add-operation"]);

function onSubmit() {
    emit("add-operation", formData);
    Object.assign(formData, initialData);
    toggleDrawer();
}
</script>

<template>
    <form
        action=""
        @submit.prevent="onSubmit"
    >
        <label for="">
            <VueDatePicker
                v-model="formData.date"
                placeholder="Дата операции"
                text-input
                auto-apply
                locale="ru"
                :format-locale="ru"
                format="dd MMM yyyy"
                month-name-format="long"
            />
        </label>
        <label for="">
            <form-select
                v-model="formData.category"
                v-if="categories"
            >
                <template #caption>Категория</template>
                <form-select-option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                    >{{ category.name }}</form-select-option
                >
            </form-select>
        </label>
        <label for="">
            <input
                type="text"
                name=""
                id=""
                placeholder="Сумма"
                v-model.number="formData.price"
            />
        </label>
        <label for="">
            <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Комментарий"
                v-model="formData.comment"
            ></textarea>
        </label>

        <button type="submit">Добавить</button>
    </form>
</template>
