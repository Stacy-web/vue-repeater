## Шаблоны

#### Вывод текста
Для вывода свойств или пропов используется `{{}}`, например:
```
<script setup>
import { ref } from "vue";

const balance = ref(0);
</script>
<template>
    <h1>
        Баланс: <span>{{ balance }}</span>
    </h1>
</template>
```

#### Вывод html
Для вывода html необходимо использовать директиву `v-html`.

#### Динамичные атрибуты
Динамичные атрибуты необходимо прописывать через двоеточие - `:` - это сокращение `v-bind`.
```
<script setup>
import { defineProps } from "vue";
defineProps({
    id: String,
});
</script>
<template>
    <button :id="id"></button>
</template>
```

#### Атрибуты компонента в объекте
Все атрибуты одного объекта можно упаковать в один объект и привязать с помощью `v-bind`:
```
const buttonOptions = {
    id: "test",
};
```
В данном случае **v-bind** не заменяется на **:**
```
<basic-button v-bind="buttonOptions">Редактировать</basic-button>
```