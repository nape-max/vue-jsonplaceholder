import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/AppList.vue')
        },
        {
          path: '/photos',
          component: () => import('@/views/Photos.vue')
        },
        {
            path: '/photos/list',
            component: () => import('@/views/PhotosList.vue')
        },
        {
            path: '/photos/detail',
            component: () => import('@/views/PhotosDetail.vue')
        }
    ]
})