import Vue from 'vue';
import VueRouter from 'vue-router';
import Art from '../pages/Art.vue';
import Fossils from '../pages/Fossils.vue';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';
import Villagers from '../pages/Villagers.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/art', component: Art },
    { path: '/fossils', component: Fossils },
    { path: '/villagers', component: Villagers },
    { path: '*', component: NotFound },
];

export default new VueRouter({
    routes,
});