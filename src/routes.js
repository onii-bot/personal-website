import {createWebHistory, createRouter} from 'vue-router'
import Bio from './components/Bio.vue'
import Projects from './components/Projects.vue'
import Portofolio from './components/Portofolio.vue'
import Contact from './components/Contact.vue'

const routes = [
    {
        name : 'Bio',
        path : '/',
        component : Bio
    },
    {
        name : 'Projects',
        path : '/projects',
        component : Projects
    },
    {
        name : 'Portofolio',
        path : '/portofolio',
        component : Portofolio
    },
    {
        name : 'Contact',
        path : '/contact',
        component : Contact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;