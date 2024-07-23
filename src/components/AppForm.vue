<script setup>
import { reactive, inject, defineModel } from "vue";
import { ru } from "date-fns/locale";

const formData = reactive({
    date: "",
    type: "exp",
    category: "",
    sum: "",
    comment: "",
});
const model = defineModel();
const categories = inject("categories");

function onSubmit() {
    model.value.push(formData);
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
                v-model="formData.sum"
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
