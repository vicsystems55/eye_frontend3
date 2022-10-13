import Vue from 'vue'
import Router from "vue-router";

import Body from '../components/body'

import SamplePage from '../pages/sample_page'

import Members from '../pages/admin/Members'

import Mentorship from '../pages/admin/Mentorship'

import CreateModule from '../pages/admin/CreateModule'

import Modules from '../pages/common/Modules'

import Member from '../pages/admin/Member'

import Profile from '../pages/common/Profile'

import Notifications from '../pages/common/Notifications'


import Module from '../pages/common/Module'

import Auth from '../auth/auth';

import login from '../auth/login_one';

import Register from '../auth/register';

// component

Vue.use(Router)

const routes = [
  { 
    path: '', 
    redirect: { 
      name: 'default' 
    }
  },
  {
    path: '',
    component: Auth,
    children:[{
      path:'',
      component: login

    }
    ]
  },
  {
    path: '/auth',
    component: Auth,
    children: [
    {
      path: 'login',
      name: 'Login 1',
      component: login,
      meta: {
        title: ' Login | EYE',
      }
    },
    {
      path: 'register',
      name: 'register 1',
      component: Register,
      meta: {
        title: ' Register | EYE',
      }
    }
    ]
    
  },
  {
    path: '/admin',
    component: Body,
    children: [
    {
      path: '',
      name: 'default',
      component: SamplePage,
      meta: {
        title: 'Module | Create Module',
      }
    },
    {
      path: 'member/:id',
      name: 'member',
      component: Profile,
      meta: {
        title: 'Admin | Member',
      }
    },
    {
      path: 'notifications',
      name: 'notifications',
      component: Notifications,
      meta: {
        title: 'Admin | Notifications',
      }
    },
    {
      path: 'members',
      name: 'mebmers',
      component: Members,
      meta: {
        title: 'Admin | Members',
      }
    },
    {
      path: 'mentorship',
      name: 'mentorship',
      component: Mentorship,
      meta: {
        title: 'Admin | Mentorship',
      }
    },
    {
      path: 'modules',
      name: 'modules',
      component: Modules,
      meta: {
        title: 'Admin | Modules',
      }
    },

    {
      path: 'module/:id',
      name: 'module',
      component: Module,
      meta: {
        title: 'Admin | Module',
      }
    },

    {
      path: 'create-module',
      name: 'create-module',
      component: CreateModule,
      meta: {
        title: 'Admin | Create Module',
      }
    },
    {
      path: 'default',
      name: 'default',
      component: SamplePage,
      meta: {
        title: 'Default Dashboard | Endless - Premium Admin Template',
      }
    },
    {
      path: 'ecommerce',
      name: 'ecommerce',
      component: SamplePage,
      meta: {
        title: 'Ecommerce Dashboard | Endless - Premium Admin Template',
      }
    }
    ]
  },
  {
    path: '/judge',
    component: Body,
    children: [
    {
      path: '',
      name: 'default',
      component: Module,
      meta: {
        title: 'Module | Create Module',
      }
    },

    {
      path: 'notifications',
      name: 'notifications',
      component: Notifications,
      meta: {
        title: 'Judge | Notifications',
      }
    },

    {
      path: 'profile',
      name: 'profile',
      component: Profile,
      meta: {
        title: 'Judge | Profile',
      }
    },

    
    {
      path: 'default',
      name: 'default',
      component: SamplePage,
      meta: {
        title: 'Default Dashboard | Endless - Premium Admin Template',
      }
    },
    {
      path: 'ecommerce',
      name: 'ecommerce',
      component: SamplePage,
      meta: {
        title: 'Ecommerce Dashboard | Endless - Premium Admin Template',
      }
    }
    ]
  },
  {
    path: '/participant',
    component: Body,
    children: [
    {
      path: '',
      name: 'default',
      component: Module,
      meta: {
        title: 'Module | Create Module',
      }
    },

    {
      path: 'profile',
      name: 'profile',
      component: Profile,
      meta: {
        title: 'Participant | Profile',
      }
    },

    

    {
      path: 'modules',
      name: 'modules',
      component: Modules,
      meta: {
        title: 'Participant | Modules',
      }
    },

    {
      path: 'module/:id',
      name: 'module',
      component: Module,
      meta: {
        title: 'Admin | Module',
      }
    },

    {
      path: 'notifications',
      name: 'notifications',
      component: Notifications,
      meta: {
        title: 'Participant | Notifications',
      }
    },

    {
      path: 'default',
      name: 'default',
      component: SamplePage,
      meta: {
        title: 'Default Dashboard | Endless - Premium Admin Template',
      }
    },
    {
      path: 'ecommerce',
      name: 'ecommerce',
      component: SamplePage,
      meta: {
        title: 'Ecommerce Dashboard | Endless - Premium Admin Template',
      }
    }
    ]
  },
  {
    path: '/mentor',
    component: Body,
    children: [
    {
      path: '',
      name: 'default',
      component: Module,
      meta: {
        title: 'Module | Create Module',
      }
    },

    {
      path: 'profile',
      name: 'profile',
      component: Profile,
      meta: {
        title: 'Mentor | Profile',
      }
    },


    {
      path: 'default',
      name: 'default',
      component: SamplePage,
      meta: {
        title: 'Default Dashboard | Endless - Premium Admin Template',
      }
    },
    {
      path: 'ecommerce',
      name: 'ecommerce',
      component: SamplePage,
      meta: {
        title: 'Ecommerce Dashboard | Endless - Premium Admin Template',
      }
    }
    ]
  }
];

const router = new Router({
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

export default router
