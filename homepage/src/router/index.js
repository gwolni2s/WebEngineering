import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      // Home
    { path: '/', name: 'HomeView', component: HomeView },
      // Categories
    { path: '/HTTP_HTML', name: 'HTML_Category', component: () => import("../views/HTML_HTTP/HTML_Category.vue")},
    { path: '/CSS', name: 'CSS_category', component: () => import("../views/CSS/CSS_category.vue")},
    { path: '/JavaScript', name: 'JavaScript_category', component: () => import('../views/JavaScript/JavaScript_category.vue')},
    { path: '/SVG', name: 'svg_category', component: () => import("../views/SVG/svg_category.vue")},
    { path: '/TypeScript', name: 'typescript_category', component: () => import("../views/TypeScript/typescript_category.vue")},
    { path: '/VUE', name: 'vue_category', component: () => import("../views/Vue/vue_category.vue")},
    { path: '/PHP', name: 'php_category', component: () => import("../views/PHP/php_category.vue")},
    { path: '/WebSecurity', name: 'security_category', component: () => import("../views/Security/security_category.vue")},
      // Topic
    { path: '/JavaScript/General', name: 'javascript_general', component: () => import('../views/JavaScript/Allgemein/allgemein_category.vue')},
    { path: '/JavaScript/DOM', name: 'dom', component: () => import('../views/JavaScript/DOM/dom_category.vue')},
    { path: '/JavaScript/ECMAScript', name: 'ecmascript', component: () => import('../views/JavaScript/EcmaScript/ecma_category.vue')},
    { path: '/JavaScript/Functional', name: 'js_functional', component: () => import('../views/JavaScript/Functional/functional_category.vue')},
    { path: '/JavaScript/Async_Await', name: 'js_async', component: () => import('../views/JavaScript/Async_Await/async_category.vue')},
      // Tasks
      // HTTP/HTML Tasks
    { path: '/HTTP_HTML/Task1', name: 'erfolgsprinzipien', component: () => import('../views/HTML_HTTP/Erfolgsprinzipien.vue')},
    { path: '/HTTP_HTML/Task2', name: 'http', component: () => import('../views/HTML_HTTP/HTTP.vue')},
    { path: '/HTTP_HTML/Task3', name: 'html_literature', component: () => import('../views/HTML_HTTP/HTML_literature.vue')},
    { path: '/HTTP_HTML/Task4', name: 'html_wireframe', component: () => import('../views/HTML_HTTP/HTML_wireframe.vue')},
      // CSS Tasksx
    { path: '/CSS/Task1', name: 'selectors_colors', component: () => import('../views/CSS/selectors_colors.vue')},
    { path: '/CSS/Task2', name: 'positioning_1', component: () => import('../views/CSS/positioning_1.vue')},
    { path: '/CSS/Task3', name: 'positioning_2', component: () => import('../views/CSS/positioning_2.vue')},
    { path: '/CSS/Task4', name: 'css_wireframe', component: () => import('../views/CSS/css_wireframe.vue')},
    { path: '/CSS/Task5', name: 'flexbox_desktop', component: () => import('../views/CSS/responsive_desktop.vue')},
    { path: '/CSS/Task6', name: 'flexbox_mobile', component: () => import('../views/CSS/responsive_mobile.vue')},
    { path: '/CSS/Task7', name: 'responsive_grid', component: () => import('../views/CSS/responsive_grid.vue')},
      // JavaScript Tasks
      // General Tasks
    { path: '/JavaScript/General/Task1', name: 'Funktionen', component: () => import('../views/JavaScript/Allgemein/Funktionen.vue')},
    { path: '/JavaScript/General/Task2', name: 'objects', component: () => import('../views/JavaScript/Allgemein/Objekte.vue')},
    { path: '/JavaScript/General/Task3', name: 'fibonacci', component: () => import('../views/JavaScript/Allgemein/Fibonacci.vue')},
    { path: '/JavaScript/General/Task4', name: 'top sort', component: () => import('../views/JavaScript/Allgemein/Topsort.vue')},
      // DOM Tasks
    { path: '/JavaScript/DOM/Task1', name: 'operations', component: () => import('../views/JavaScript/DOM/operations.vue')},
    { path: '/JavaScript/DOM/Task2', name: 'rednerliste', component: () => import('../views/JavaScript/DOM/rednerliste.vue')},
     // Functional Tasks
    { path: '/JavaScript/Functional/Task1', name: 'functional', component: () => import('../views/JavaScript/Functional/functional.vue')},
    // EcmaScript Tasks
    { path: '/JavaScript/ECMAScript/Task1', name: 'klammerpaare', component: () => import('../views/JavaScript/EcmaScript/klammerpaare.vue')},
    { path: '/JavaScript/ECMAScript/Task5', name: 'deepcopy', component: () => import('../views/JavaScript/EcmaScript/deepcopy.vue')},
      // SVG Tasks
    { path: '/SVG/Task1', name: 'graphic', component: () => import('../views/SVG/graphic.vue')},
    { path: '/SVG/Task2', name: 'diagram', component: () => import('../views/SVG/diagram.vue')},
     // TypeScript Tasks
    { path: '/TypeScript/Task1', name: 'static_classes', component: () => import('../views/TypeScript/static_classes.vue')},
    { path: '/TypeScript/Task2', name: 'error_search', component: () => import('../views/TypeScript/error_search.vue')},
     // PHP Tasks
    { path: '/PHP/Task1', name: 'login', component: () => import('../views/PHP/login.vue')},
    { path: '/PHP/Task2', name: 'register', component: () => import('../views/PHP/register.vue')},
      // Web Security Tasks
    { path: '/security/Task1', name: 'csrf', component: () => import('../views/Security/csrf.vue')},
    { path: '/security/Task2', name: 'xss', component: () => import('../views/Security/xss.vue')},
    { path: '/security/Task3', name: 'injection', component: () => import('../views/Security/injection.vue')}
  ]
})

export default router
