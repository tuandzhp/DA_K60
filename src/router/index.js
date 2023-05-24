import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/admin',
    children: [
      {
        path: '/admin',
        name: 'Admin',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/Quanliduan',
        name: 'Quanliduan',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/quanliduan/danhsach',
        children: [
          {
            path: '/quanliduan/danhsach',
            name: 'Danh sách',
            component: () => import('@/views/quanliduan/Danhsach.vue'),
          },
          {
            path: '/quanliduan/mohinh',
            name: 'Mô hình',
            component: () => import('@/views/quanliduan/Mohinh.vue'),
          },
          {
            path: '/quanliduan/quanlicongviec',
            name: 'Quản lí công việc',
            component: () => import('@/views/quanliduan/Quanlicongviec.vue'),
          },
        ],
      },
      {
        path: '/quanlinguoidung',
        name: 'Quản lí người dùng',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/quanlinguoidung/standard-danhsach',
        children: [
          {
            path: '/quanlinguoidung/standard-danhsach',
            name: 'Danh sách người dùng',
            component: () => import('@/views/quanlinguoidung/Danhsach.vue'),
          },
        ],
      },
      {
        path: '/hethong',
        name: 'hethong',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/hethong/hethong-trangthai',
        children: [
          {
            path: '/hethong/hethong-trangthai',
            name: 'Trạng Thái',
            component: () => import('@/views/hethong/TrangThai.vue'),
          },
          {
            path: '/hethong/vaitro',
            name: 'Vai Trò',
            component: () => import('@/views/hethong/VaiTro.vue'),
          },
          {
            path: '/hethong/phanquyen',
            name: 'Phân quyền vai trò',
            component: () => import('@/views/hethong/PhanQuyen.vue'),
          },
        ],
      },
    ],
  },
]
// router.get('/user/logoff', function (req, res) {
//   console.log('/user/logoff')

//   req.session.destroy()

//   res.end('/')
// })
// var config = require('./config')

// var cryptiles = require('cryptiles')
// // return the APS authenticate url
// router.get('/user/authenticate', function (req, res) {
//   req.session.csrf = cryptiles.randomString(24)

//   console.log('using csrf: ' + req.session.csrf)

//   console.log('/user/authenticate')

//   // redirect the user to this page
//   var url =
//     'https://developer.api.autodesk.com' +
//     '/authentication/v1/authorize?response_type=code' +
//     '&client_id=' +
//     config.credentials.client_id +
//     '&redirect_uri=' +
//     config.callbackURL +
//     '&state=' +
//     req.session.csrf +
//     '&scope=' +
//     config.scopeInternal.join(' ')
//   res.end(url)
// })

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
