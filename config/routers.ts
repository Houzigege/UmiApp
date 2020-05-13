


const routes: any = [
  {
    path: "/login",
    component: '../layouts/LoginLayout',
    routes: [
      { path: '/', redirect: '/login' },
      {
        title: 'Login',
        path: "/login",
        name: 'Login',
        component: './Login/Login',
      },
      {
        title: 'Home',
        path: "/login/home",
        name: 'Home',
        component: './Home/Home',
      }
    ]
  },
  {
    path: "/",
    component: '../layouts/HomeLayout',
    routes: [
      { path: '/', redirect: '/home' },
      {
        path: "/home",
        name: 'Home',
        component: './Home/Home',
      }
    ]
  },
];

export default routes;
