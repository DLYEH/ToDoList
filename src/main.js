import "./assets/main.css"
import { createApp } from "vue"
import Layout from "@/Layout.vue"
import { createRouter, createWebHashHistory } from "vue-router"

import HomePage from "@/pages/Home.vue"
import AboutPage from "@/pages/About.vue"
import ContactPage from "@/pages/Contact.vue"
import TodoDetailPage from "@/pages/todolists/Detail.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/todolists/:auo", name: "detail", component: TodoDetailPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(Layout).use(router).mount("#app")
