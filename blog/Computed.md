## Computed

Это метод (макрос), который позволяет создавать свойства на основе других свойств с помощью вычислительных манипуляций.
Самое простое - конкатенация строк. Если в шаблоне выглядит слишком обширно, то хорошим тоном будет использование computed - свойства.

Также применяется для более сложных операций. Например, для фильтрации данных.
```javascript
const filterBudgetOperations = computed(() => {
    if (filter.value) {
        return budgetOperations.value.filter(
            (item) => item.type === filter.value
        );
    }

    return budgetOperations.value;
});

---

<app-list :data="filterBudgetOperations" />
```

1. computed функция должна возвращать значение;
2. в отличие от обычных функций computed имеет зависимость от реактивных свойств. Т.е. computed свойство будет перерасчитано заново, если изменилось реактивное свойство внутри реализации;
3. computed свойство только для чтения. Его нельзя изменить напрямую.

***

Для вывода computed свойства необходимо прописать его, как обычную реактивную переменную - `filterBudgetOperations`. Но можно установить свойства `get` и `set` для computed.
```javascript
const test = computed({
    get() {
        return filter.value;
    },
    set(val) {
        filter.value = val;
    },
});

```

```js
test.value = "exp"; // для set
```

```html
{{ test }}<!-- для get -->
```

> &nbsp;
> Пример кода, который нарушает правило лучших практик computed. Нельзя изменять состояния, мутировать DOM и выполнять асинхронные запросы.
> &nbsp;

_Ошибочное использование_
```js
import { ref, computed } from 'vue';

const filter = ref('');
const someState = ref('initial');
const apiData = ref(null);

const invalidComputed = computed(() => {
    // Изменение состояния (нарушение правила)
    someState.value = 'modified';

    // Асинхронный запрос (нарушение правила)
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            apiData.value = data;
        });

    return filter.value;
});
```

_Правильное использование_
```js
import { ref, computed, watch } from 'vue';

const filter = ref('');
const someState = ref('initial');
const apiData = ref(null);

// Чистое computed свойство
const validComputed = computed(() => {
    return filter.value;
});

// Использование watch для побочных эффектов
watch(filter, (newValue, oldValue) => {
    // Изменение состояния в watch
    someState.value = 'modified';

    // Асинхронный запрос в watch
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            apiData.value = data;
        });
});
```