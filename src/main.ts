import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
import Composition from './Composition.vue'
import TeleportTest from './TeleportTest.vue'

// const app = createApp(App)
// app.mount('#app')

const composition = createApp(Composition)
composition.mount('#composition')


const teleportTest = createApp(TeleportTest)
teleportTest.mount('#teleportTest')
