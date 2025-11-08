import './assets/main.css'
import Timer from './components/Timer.vue'
import Navbar from './components/navbar.vue'
import Saludo from './components/Saludo.vue'
import ImgContainer from './components/ImgContainer.vue'
import ImgCard from './components/ImgCard.vue'
import Footer from './components/Footer.vue'

import { createApp } from 'vue'
import App from './App.vue'
import MensajeDeFin from './components/MensajeDeFin.vue'


const app = createApp(App)
app.component('timer', Timer)
app.component('navbar', Navbar)
app.component('saludo', Saludo)
app.component('img-container', ImgContainer)
app.component('img-card', ImgCard)
app.component('mensaje-de-fin', MensajeDeFin)
app.component('footer-component', Footer)
app.mount('#app')