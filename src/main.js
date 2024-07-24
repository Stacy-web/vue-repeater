import { createApp } from 'vue'
import App from './App.vue'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import BasicButton from '@/components/BasicButton.vue'
import FormSelect from '@/components/FormSelect.vue'
import FormSelectOption from '@/components/FormSelectOption.vue'

import './main.scss'

const app = createApp(App)

app.component(
    'VueDatePicker', 
    VueDatePicker
);

app.component(
    'BasicButton',
    BasicButton
)
app.component(
    'FormSelect',
    FormSelect
)

app.component(
    'FormSelectOption',
    FormSelectOption
)

app.mount('#app')