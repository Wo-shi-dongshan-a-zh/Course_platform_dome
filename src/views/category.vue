<!--author:谢涛--><!--author:谢涛--><!--author:谢涛--><!--author:谢涛--><!--author:谢涛--><!--author:谢涛--><!--author:谢涛-->
<template>
  <div>
  <el-container>
    <el-container>
      <el-aside width="100px"></el-aside>
      <el-container>
        <div class="head">
          <img src="../assets/cqnulogo.png">
          <img src="../assets/yinxin.jpg">
          <a href="#/login" target="_blank">登录</a>
        </div>
        <el-main><el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#FFFFFF"
            text-color="#606266"
            active-text-color="#ffd04b">
          <el-menu-item index="1" ><i class="el-icon-s-home"></i><a href="http://localhost:8080/#/" target="_blank">首页</a></el-menu-item>
          <el-submenu index="2">
            <template slot="title">课程</template>
            <el-menu-item index="2-1" >全部课程</el-menu-item>
            <el-menu-item index="2-2">学习路径</el-menu-item>
            <el-menu-item index="2-2">讨论区</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">教学团队</el-menu-item>
          <el-menu-item index="4">课程建设</el-menu-item>
          <el-menu-item index="5">课程资源</el-menu-item>
          <el-menu-item index="6">问题与答疑</el-menu-item>
          <el-menu-item index="7">课程研究</el-menu-item>
          <el-menu-item index="8">会员</el-menu-item>
        </el-menu></el-main>
        <div class="main">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><p style="margin-left: 0px"><img src="../assets/images/Icon/11.jpg">
              <el-link href="http://localhost:8080/#/public/makesi"><a >全部课程</a></el-link></p></el-col>
            <el-col :span="6"><p style="margin-left: 0px"><img src="../assets/images/Icon/12.jpg">
              <el-link href="http://localhost:8080/#/public/makesi"><a >学习路径</a></el-link></p></el-col>
            <el-col :span="6"><p style="margin-left: 0px"><img src="../assets/images/Icon/13.jpg">
              <el-link href="http://localhost:8080/#/public/makesi"><a >讨论</a></el-link></p></el-col>
          </el-row>
        </div>
        <span text-color="409EFF"> 课程分类： </span>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="后端开发" name="1">
            <el-row>
            <el-button round>Python</el-button>
            <el-button round>GO</el-button>
            <el-button round>Ruby</el-button>
            <el-button round>C</el-button>
            <el-button round>PHP</el-button>
            <el-button round>Java</el-button>
              <el-button round>Flak</el-button>
              <el-button round>Laravel</el-button>
              <el-button round>ThinkPHP</el-button>
              <el-button round>爬虫</el-button>
              <el-button round>Django</el-button>
              <el-button round>Sring</el-button>
              <el-button round>SSM</el-button>
              <el-button round>区块链</el-button>
              <el-button round>SpringBoot</el-button>
              <el-button round>Rust</el-button>
              <el-button round>Node.js</el-button>
              <el-button round>Pygame</el-button>
              <el-button round>QT</el-button>
              <el-button round>OpenGL</el-button>
              <el-button round>Lua</el-button>
              </el-row>
          </el-collapse-item>
          <el-collapse-item title="Linux运维" name="2">
            <el-row>
              <el-button round>Ansible</el-button>
              <el-button round>GentOS</el-button>
              <el-button round>Git</el-button>
              <el-button round>Linux</el-button>
              <el-button round>Nginx</el-button>
              <el-button round>SDN</el-button>
              <el-button round>Shell</el-button>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="云计算与大数据" name="3">
            <el-row>
              <el-button round>AWS</el-button>
              <el-button round>Docker</el-button>
              <el-button round>Hadoop</el-button>
              <el-button round>Kafka</el-button>
              <el-button round>Kubernetes</el-button>
              <el-button round>OpenStack</el-button>
              <el-button round>Scala</el-button>
              <el-button round>Spark</el-button>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="数据库" name="4">
            <el-row>
              <el-button round>MongoDB</el-button>
              <el-button round>MySQL</el-button>
              <el-button round>NoSQL</el-button>
              <el-button round>Oracle</el-button>
              <el-button round>PostagreSQL</el-button>
              <el-button round>Redis</el-button>
              <el-button round>SQL</el-button>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="信息安全" name="5">
            <el-row>
              <el-button round>Web安全</el-button>
              <el-button round>安全开发</el-button>
              <el-button round>密码学</el-button>
              <el-button round>渗透测试</el-button>
              <el-button round>系统安全</el-button>
              <el-button round>网络安全</el-button>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="Web前端" name="6">
            <el-row>
              <el-button round>Bootstrap</el-button>
              <el-button round>CSS</el-button>
              <el-button round>Flutter</el-button>
              <el-button round>HTML</el-button>
              <el-button round>JavaScript</el-button>
              <el-button round>JQuery</el-button>
              <el-button round>React</el-button>
              <el-button round>TypeScript</el-button>
              <el-button round>Vue.js</el-button>
              <el-button round>Web</el-button>
              <el-button round>webpack</el-button>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="计算机专业课" name="7">
            <el-row>
              <el-button round>MATLAB</el-button>
              <el-button round>ROS</el-button>
              <el-button round>大学公开课</el-button>
              <el-button round>操作系统</el-button>
              <el-button round>数据结构</el-button>
              <el-button round>算法</el-button>
              <el-button round>计算机网络</el-button>
              <el-button round>设计模式</el-button>
              <el-button round>软件测试</el-button>
              <el-button round>Web前端</el-button>
              <el-button round>面向对象</el-button>
            </el-row>
          </el-collapse-item>
        </el-collapse>
        <div class="title1">
          <el-link>综合<i class="el-icon-view el-icon--right"></i> </el-link>
          <el-link>最新<i class="el-icon-view el-icon--right"></i> </el-link>
          <el-link>最热<i class="el-icon-view el-icon--right"></i> </el-link>
          <div style="flex: 150px">
            <el-input placeholder="搜索 课程/问答" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <el-divider></el-divider>
        <el-header>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="img_div">
              <img  src="../assets/images/Coursepage/Linux.jpg">
              <a href="#">
                <div class="mask">
                  <h3 > Linux基础入门</h3>
                  <h4> 本课程教你如何熟练地使用 Linux，本实验中通过在线动手 实验的方式学习 Linux 常用命令，用户与权 限管理，目录结构 与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。 </h4>
                </div>
              </a>
            </div>
              <el-link href="http://localhost:8080/#/public/course"><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/Ansible.jpg">
              <a href="#">
                <div class="mask">
                  <h3>Ansible基础入门</h3>
                  <h4>Ansible 这个简单易学的自动化工具可以满足业务线在速度和简洁性方面日益增加的需求，让我们更高效的同时管理多台服务器不再是想想而已。</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/C++.jpg">
              <a href="#">
                <div class="mask">
                  <h3>C++基础入门实战</h3>
                  <h4>C 语言是面向过程的程序设计语言，而 C++ 语言是由 C 语言演变而来的一种面向对象的程序设计语言。课程实验内容从 C++ 语言的概念开始，通过理论学习和实验操作，初步熟知 C++ 语言。</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/C++11.jpg">
              <a href="#">
                <div class="mask">
                  <h3>C++11</h3>
                  <h4>本课程使用 C++ 11 实现了一个完全兼容 redis 的 kv 数据库项目——Qedis ；该项目会使用到一些 C++11 核心特性和 STL 库，并利用已有的 tcp 网络库，逐步构建出一个完全兼容 Redis 的更高性能的内存数据库。 通过本课程的学习，你可以学习到 C++11 的核心特性应用，Redis 核心功能逻辑实现，以及 Redis 服务的运作原理。</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row :gutter="20">
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/C++实现简易docker容器.jpg">
              <a href="#">
                <div class="mask">
                  <h3> C++简易实现Docker</h3>
                  <h4> Docker 的本质是使用 LXC 实现类似虚拟机的功能，进而节省的硬件资源提供给用户更多的计算资源。本项目将 C++ 与 Linux 的 Namespace 及 Control Group 技术相结合，实现一个简易 Docker 容器。 </h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/C语言简明教程.jpg">
              <a href="#">
                <div class="mask">
                  <h3>C语言简明教程</h3>
                  <h4>本课程讲解 C 语言的开发环境以及对 C 语言的剖析，引入大量的 C 语言程序案例，把算法和语法结合起来，通过引导大家由浅入深地编写 C 程序，让大家掌握 C 语言。我们将从中学会 C 语言语法、数组、模块化程序设计指针、文件的输入与输出等。</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/Django.jpg">
              <a href="#">
                <div class="mask">
                  <h3>Django基础入门</h3>
                  <h4>本课程主要讲解了 Python 的 Django 框架的基础知识。通过学习本课程，可以熟悉 Django 框架的组成结构，并能在学习过程中了解 Django 的强大功能。</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/Flask实现一个问答社区.jpg">
              <a href="#">
                <div class="mask">
                  <h3>Flask实现问答社区</h3>
                  <h4>本课程主要使用 Flask 完成问答社区项目，适合对 Web 开发有一定基础，想进一步加强理解与运用的同学。</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row :gutter="20">
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/JavaScript.jpg">
              <a href="#">
                <div class="mask">
                  <h3> JavaScript</h3>
                  <h4> 课程从什么是 JavaScript 开始，一步步讲解 JavaScript 基础语法、关键特性、JSON、WebAPI 等知识点。内容将会涉及网页窗口交互的方法以及通过 DOM 进行网页元素的相关操作。 </h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/Python.jpg">
              <a href="#">
                <div class="mask">
                  <h3>Python新手入门</h3>
                  <h4>极度舒适的新手入门课程，面向完全没有编程基础的同学。你将在一下午入门 Linux、Python 基础和Github 常用命令，为未来的编程大楼打下稳固的基础。</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/Python3.jpg">
              <a href="#">
                <div class="mask">
                  <h3>Python3简明教程</h3>
                  <h4>简明易懂的 Python3 课程，不仅适用于那些有其它语言基础的同学，对没有编程经验的同学也非常友好。本课程不仅讲解了 Python3 基础知识，还介绍了 PEP8、Virtualenv、测试、项目结构以及 Flask 相关内容</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
            <el-col :span="6"> <div class="img_div">
              <img src="../assets/images/Coursepage/Python异步网络编程.jpg">
              <a href="#">
                <div class="mask">
                  <h3>Python异步网络编程实战</h3>
                  <h4>本课程将介绍如何使用 Socket 创建 TCP 客户端、协程原理、Linux 系统中的五种 I/O 模型、select/poll/epoll 实现 I/O 复用，以及基于 Socket 创建同步阻塞、多线程、异步程序爬取网络图片，后半部分学习异步事件库 pyuv 以及协程框架 greenlet 和 gevent 实现异步爬虫。</h4>
                </div>
              </a>
            </div>
              <el-link href=""><a ><i class="el-icon-view"></i>查看课程</a></el-link>
              <el-link href=""><a ><i class="el-icon-star-off"></i>收藏课程</a></el-link>
            </el-col>
          </el-row>
          <div class="page">
          <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
          </el-pagination>
          </div>
          <div class="foot">
          <p>Copyright&copy 2021 CQNU </p>
          <span>Developer: 赵鸿 王中山 谢涛</span>
            <div class="footer-footer" data-v-3cfa9c68><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020352" target="_blank" style="color: #666" data-v-3cfa9c68>
              京公网安备 11010802020352号
            </a>
               © Copyright 2021. ZXW版权所有
              <a href="https://beian.miit.gov.cn/" target="_blank" style="color: #666" data-v-3cfa9c68>
                | 京ICP备11024192号
              </a></div>
            </div>

        </el-header>
      </el-container>
      <el-aside width="100px"></el-aside>
    </el-container>
  </el-container>
  </div>
</template>

<script>
export default {
  name: "test1",
  data () {
    return {
      activeIndex: '1',
      activeNames: ['1'],
      input3: '',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },

  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
  },
  handleCurrentChange(val) {
    console.log(`当前页: ${val}`);
  }
}
</script>

<style scoped>
.head{
  width:100%;
  height:100px;
  text-align: center;
  position: relative;
  line-height: 100px;
  color: white;
  background: #64b7ff;
  box-shadow: 0px 0px 10px rgb(250, 248, 248);
}
.head a{
  position:absolute;
  right: 0;
  top: 20%;
  bottom: 0;
  font-size: 22px;
  color: #606266;
}
.title1{
  text-align: center;
  font-size: 22px;
  color: #000709;
}
.main{
  text-align: center;
}
.main  img{
  width: 40px;
  float: left;
}
.main  a {
  text-decoration: none;
  height: 41px;
  line-height: 40px;
  display: inline-block;
  float: left;
  margin-left: 5px;
  font-size: large;
}
. search{
  position:absolute;
  right: 0;
  top: 20%;
  bottom: 0;
  font-size: 22px;
  color: #000709;
}
.el-header {
  background-color: #f6f6f6;
  color: #2372d0;
  margin-bottom: 0;
}
.el-footer {
  background-color: #868585;
  position:absolute;
  top:-20px;
  right:0;
  bottom:0;
  left:0;

}
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 100px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-input{
  width: 1000px;
}
.img_div {
  position: relative;
  width: 264px;
  height: 150px;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 264px;
  height: 150px;
  background: rgba(101, 101, 101, 0.6);
  color: #ffffff;
  opacity: 0;
}
.mask h3 {
  font-size: 20px;
  text-align: center;
}
.mask h4{
  font-size: 3px;
  text-align: center;
  word-break: normal;
  word-wrap: break-word;
}
.img_div a:hover .mask {
  opacity: 1;
}
.el-row {
  margin-bottom: 30px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {

}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.page{
  text-align: center;
}
.foot{
  background-color: #f2f7ff;
  text-align: center;
  font-family:Arial;
}
.foot p a{
  text-decoration:none;
  color:black;
}
</style>