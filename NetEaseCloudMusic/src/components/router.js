import { createRouter, createWebHashHistory } from 'vue-router'

import index from './index.vue'
import OtherLog from './OtherLog.vue'
import Login from './Login.vue'
import HomePage from './HomePage.vue'
import User from './user.vue'
import basicinfo from './basicinfo.vue'
import dynamic from './dynamic.vue'
import podcast from './podcast.vue'
import editor from './editor.vue'
import songsheet from './songsheet.vue'
import sheetdetail from './sheetdetail.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/index', component: index
        },
        {
            path: '/OtherLog', component: OtherLog
        },
        {
            path: '/Login', component: Login
        },
        {
            path: '/sheetdetail', component: sheetdetail
        },
        {
            path: '/HomePage', component: HomePage
        },
        {
            path: '/songsheet', component: songsheet
        },
        {
            path: '/', redirect: '/Login' //访问根路径会重定向到Login组件
        },
        {
            path: '/user', component: User,
            redirect: '/user/basicinfo',
            children: [
                {
                    path: 'basicinfo', component: basicinfo
                },
                {
                    path: 'dynamic', component: dynamic
                },
                {
                    path: 'podcast', component: podcast
                },
            ]
        },
        {
            path: '/editor', component: editor
        },

    ]
})

export default router