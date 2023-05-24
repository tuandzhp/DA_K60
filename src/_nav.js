export default [
  // {
  //   component: 'CNavItem',
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: 'cil-speedometer',
  //   badge: {
  //     color: 'primary',
  //     text: 'NEW',
  //   },
  // },
  {
    component: 'CNavGroup',
    name: 'Quản lý dự án',
    to: '/quanliduan',
    icon: 'cil-building',
    items: [
      {
        component: 'CNavItem',
        name: 'Danh sách dự án',
        to: '/quanliduan/danhsach',
      },
      {
        component: 'CNavItem',
        name: 'Mô hình dự án',
        to: '/quanliduan/mohinh',
      },
      {
        component: 'CNavItem',
        name: 'Quản lý công việc',
        to: '/quanliduan/quanlicongviec',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Quản lý người dùng',
    to: '/quanlinguoidung',
    icon: 'cil-user',
    items: [
      {
        component: 'CNavItem',
        name: 'Danh sách người dùng',
        to: '/quanlinguoidung/standard-danhsach',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Hệ thống',
    to: '/hethong',
    icon: 'cil-settings',
    items: [
      {
        component: 'CNavItem',
        name: 'Trạng thái thực hiện',
        to: '/hethong/hethong-trangthai',
      },
      {
        component: 'CNavItem',
        name: 'Vai trò',
        to: '/hethong/vaitro',
      },
      {
        component: 'CNavItem',
        name: 'Phân quyền vai trò',
        to: '/hethong/phanquyen',
      },
    ],
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
