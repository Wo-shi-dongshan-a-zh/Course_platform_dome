import Vue from 'vue'
import VueRouter from 'vue-router'
import Home_Course_commom from "@/views/home/Home_Course_commom";
import ReferenceBook from "@/views/course/ReferenceBook"
import CourseSI from "@/views/course/CourseSI";
import DataStructionIntroduction from "@/views/course/DataStructionIntroduction";
import Login from "@/views/Login";
import Home_Course_manager from "@/views/home/Home_Course_manager";
import Home from "@/views/home/Home";
import course from "../views/course/course"
import category from "@/views/category";
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect:'/public',
    hidden:true,
  },
  {
    path: '/login',
    name:'登录',
    hidden: true,
    component: Login
  },
  {
    path:'/public',
    name:"主页",
    component: Home,
    hidden: true,
  },
  {
    path: '/public/category',
    name:"分类界面",
    component: category
  },
  {
    path: '/public/course',
    component: course
  },
  {
   path: '/manager',
   name:'Linux入门基础',
   component: Home_Course_manager,
    manager: true,
    children:[
      {
        path:'1-1',
        name:'Linux入门基础',//代表"父亲"的name，name1为当前的name
        name1:'课程简介',
        component: CourseSI
      },
      {
        path:'1-2',
        name:'Linux入门基础',
        name1:'参考书籍',
        component: ReferenceBook
      },{
        path: 'courseIntroduction',
        name:'Linux入门基础',
        name1:'课程资料',
        component: DataStructionIntroduction
      }
    ]
  },
  {
    path: '/manager',
    name:'Ansible基础教程',
    component: Home_Course_manager,
    manager:true,
    children: [
      {
        path:'2-1',
        name:'Ansible基础教程',
        name1:'课程简介',
        component:CourseSI
      },
      {
        path:'2-2',
        name:'Ansible基础教程',
        name1: '参考书籍',
        component:ReferenceBook
      },
      {
        path: '2-3',
        name: 'Ansible基础教程',
        name1:'课程资料',
      }

    ]
  },
  {
    path: '/manager',
    name:'数据结构',
    component: Home_Course_manager,
    manager:true,
    children: [
      {
        path:'2-1',
        name:'Ansible基础教程',
        name1:'课程简介',
        component:CourseSI
      },
      {
        path:'2-2',
        name:'Ansible基础教程',
        name1: '参考书籍',
        component:ReferenceBook
      },
      {
        path: '2-3',
        name: 'Ansible基础教程',
        name1:'课程资料',
      }

    ]
  },
]
const router = new VueRouter({
  routes
})

export default router
