require('./bootstrap')

import router from './router'
import store from './store'
import App from './components/App'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

sync(store, router)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})

/**
 * TODO:
 * resources/assets/js/components/mixins/Check-auth.vue
 * Preloaders style
 * Article editing
 * Update button
 * Vue tests
 **/