<script setup>
import { reactive, defineEmits } from "vue";
import { ru } from "date-fns/locale";

const formData = reactive({
    date: "",
    type: "",
    category: "",
    sum: "",
    comment: "",
});

const emit = defineEmits(["addOperation"]);

function test() {
    console.log("submit");
    emit("addOperation", formData);
}
</script>

<template>
    <form
        action=""
        @submit.prevent="test"
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
            <form-select v-model="formData.type">
                <template #caption>Тип операции</template>
                <form-select-option value="inc">Доход</form-select-option>
                <form-select-option value="exp">Расход</form-select-option>
            </form-select>
        </label>
        <label for="">
            <form-select v-model="formData.category">
                <template #caption>Категория</template>
                <form-select-option value="inc">Доход</form-select-option>
                <form-select-option value="exp">Расход</form-select-option>
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
