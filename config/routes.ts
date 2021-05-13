export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },

  {
    path: '/components',
    name: 'Components',
    icon: '',
    routes: [
      {
        path: '/components/button',
        name: 'Button',
        access: 'canAdmin',
        component: './Components/Button',
      },
      {
        path: '/components/typography',
        name: 'Typography',
        access: 'canAdmin',
        component: './Components/Typography',
      }
    ]
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
