import { createApp } from 'vue'
import App from './App.vue'

import BasicButton from '@/components/BasicButton.vue'

const app = createApp(App)
app.component(
    'BasicButton',
    BasicButton
)

app.mount('#app')