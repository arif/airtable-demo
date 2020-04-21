export default [
  {
    path: '/',
    component: () => import('@/layouts/default'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home'),
        meta: { title: 'Airtable Demo' },
      },
    ],
  },
];
