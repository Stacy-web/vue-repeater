## События

События навешиваются на элемент/компонент с помощью директивы `v-on`. В сокращении - `@`.

События могут быть "по дефолту", т.е. click, input, change, и пользовательские. Пользовательские события реализуются через **emit**.
Например,

_родительский компонент_
```
function onCustomEvent(<значение>) {...}

...
<some-component @custom-event="onCustomEvent">
```

_дочерний компонент_
```
<input @input="$emit('CustomEvent', <значение>)">
-- or --
<input @input="$emit('сustom-event', <значение>)">
-- or --

const emit = defineEmits(['сustom-event'])
function func() {
    emit("сustom-event");
}
...

<input @input="func">
```

***
???
есть понятие **Валидация**, но непонятно, зачем она. В консоль просто выводится уведомление и всё. Действие эмита не прерывается.
```
const emit = defineEmits({
    customEvent: (value) => {
        if (typeof value !== "string") {
            return false;
        }

        return true;
    },
});
```