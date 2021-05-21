<template><!--作者：王中山--><!--作者：王中山--><!--作者：王中山--><!--作者：王中山--><!--作者：王中山--><!--作者：王中山-->
  <div>
    <div id="navigation_bar">
      <div id="navigation_logo_sign">
        <!--      logo区域-->
        <div id="navigation_logo">
          <a id="navigation_logo_a" href="/">
            <img src="../../assets/lanqiao_logo.svg"/>
          </a>
        </div>
        <!--      登录注册区域-->
        <div id="navigation_login">
          <ul id="sign_menu">
            <li class="navigation_li">
              <a href="/home" id="tab_button">    <!--“/home”暂定，需要修改-->
                登录
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--    选择区域-->
      <div id="selection_bar">
        <ul id="selection_menu">
          <li id="all_courses_li" class="navigation_li">
            <router-link to="/public/category" tag="a" id="all_courses_button">
<!--              <i id="all_courses_i" class="fa fa-th"></i>-->
              全部课程
            </router-link>
          </li>
          <li class="sub_selection_li navigation_li">
            <router-link to="/about" class="sub_selection_a" ><!--“/about”暂定，需要修改-->
              蓝桥杯
            </router-link>
          </li>
          <li class="sub_selection_li navigation_li">
            <router-link to="/about" class="sub_selection_a" ><!--“/about”暂定，需要修改-->
              关于我们
            </router-link>
          </li>
        </ul>
        <!--    搜索框-->
        <div id="search_bar">
          <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
              v-model="search_input"
          />
        </div>
      </div>
      <!--    课程分类和走马灯-->
    </div>
    <div id="main_navigation">
      <div id="course_categories">
        <ul id="course_categories_ul">
          <li class="course_categories_li">
            <div class="course_categories_div">
<!--              div里的大标题-->
              <router-link to="/home" class="main_course_button course_button"> <!--后面修改为从数据库读取-->
                后端开发
              </router-link>
              <router-link to="/home" class="course_button"> <!--后面修改为从数据库读取-->
                数据结构
              </router-link>
              <router-link to="/home" class="course_button"> <!--后面修改为从数据库读取-->
                嵌入式
              </router-link>
            </div>
<!--            hover弹出式div-->
            <div class="sub_course_categories_div">
              <p class="sub_course_categories_p"> <!--标签名-->
                后端开发
              </p>
              <div class="sub_course_categories_span_div">
                <span class="sub_course_categories_span">
                  <router-link to="/home" class="sub_course_a"><!--后面修改为从数据库读取-->
                    c++
                  </router-link>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="carousel_menu">
        <el-carousel :interval="4000"  height="522px" arrow="never" >
          <el-carousel-item v-for="item in image_box" :key="item.id">
            <img id="carousel_img":src="item.idView" >
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
<!--    后端开发标题div-->
    <div id="back_end_div">
      <Title class="back_end_title"
             :title="'后端开发'"
      >
      </Title>
    </div>
<!--    后端开发下面的卡片-->
    <div class="course_div">
      <div class="card">
        <img src="../../assets/Courseimg/机器学习.jpg" width="100%">
        <div class="card_text">
          <h3>机器学习</h3>
          <p>描述</p>
        </div>
      </div>
      <div class="card">
        <a class="normal_card_a">
          <img src="../../assets/Courseimg/机器学习.jpg" width="100%">
        </a>
      </div>
      <div class="card">
        <a class="normal_card_a">
          <img src="../../assets/Courseimg/机器学习.jpg" width="100%">
        </a>
      </div>
      <div class="card">
        <a class="normal_card_a">
          <img src="../../assets/Courseimg/机器学习.jpg" width="100%">
        </a>
      </div>
    </div>
<!--    基本功div-->
    <div class="sub_course_card_title">
      <Title class="back_end_title"
             :title="'基本功 | '"
             :description="'行业专家打造的免费基础课程，注册即可学习'"
      >
      </Title>
    </div>
<!--    学习路径div-->
    <div class="learning_path_course_div">
      <Title class="learning_path_course_div_title"
             :title="'学习路径 | '"
             :description="'精准而系统的学习路径，从0到大牛'">
      </Title>
      <div class="float_card_div">
        <router-link to="coursePath"
                     tag="a"
                     class="float_card_a"
        >
          <img src="../../assets/Courseimg/自然语言处理基础入门.jpg" class="float_card_img">
          <div class="float_card_text_div">
            <p class="float_card_text_p"> 自然语言处理基础入门</p>
<!--            <p class="float_card_text_p float_card_text_information"> {{ data.courses_count }}门课程 </p>-->
          </div>
        </router-link>
      </div>
      <div class="float_card_div">
        <router-link to="coursePath"
                     tag="a"
                     class="float_card_a"
        >
          <img src="../../assets/Courseimg/Linux.jpg" class="float_card_img">
          <div class="float_card_text_div">
            <p class="float_card_text_p"> Linux程序设计</p>
            <!--            <p class="float_card_text_p float_card_text_information"> {{ data.courses_count }}门课程 </p>-->
          </div>
        </router-link>
      </div>
      <div class="float_card_div">
        <router-link to="coursePath"
                     tag="a"
                     class="float_card_a"
        >
          <img src="../../assets/Courseimg/C++.jpg" class="float_card_img">
          <div class="float_card_text_div">
            <p class="float_card_text_p"> C++</p>
            <!--            <p class="float_card_text_p float_card_text_information"> {{ data.courses_count }}门课程 </p>-->
          </div>
        </router-link>
      </div>
      <div class="float_card_div">
        <router-link to="coursePath"
                     tag="a"
                     class="float_card_a"
        >
          <img src="../../assets/Courseimg/SpringClound.jpg" class="float_card_img">
          <div class="float_card_text_div">
            <p class="float_card_text_p">SpringClound 与 Docker 实践 </p>
            <!--            <p class="float_card_text_p float_card_text_information"> {{ data.courses_count }}门课程 </p>-->
          </div>
        </router-link>
      </div>
    </div>
<!--    学习路径下面的图片-->
    <div class="site_description_div">
      <CardPlus class="site_description_card_plus"
                v-for="(desc_info, index) in site_description"
                :key="index"
                :img_url="desc_info['img_url']"
                :text="desc_info['text']">
      </CardPlus>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import CardPlus from "@/components/Card_Plus";
export default {
  components: {Title,CardPlus},
  data() {
    return {
      search_input:'',
      image_box:[{id:0,idView:require('../../assets/images/3.jpg')},
        {id:1,idView:require('../../assets/images/5.png')},
        {id:2,idView:require('../../assets/images/6.jpg')},
        {id:3,idView:require('../../assets/images/7.jpg')},
      ],
      site_description: [
        {'img_url': 'https://static.shiyanlou.com/img/introduceContainer1.gif',
          'text': '丰富全面的计算机实验课程'},
        {'img_url': 'https://static.shiyanlou.com/img/introduceContainer2.gif',
          'text': '在线编程环境，1秒启动'},
        {'img_url': 'https://static.shiyanlou.com/img/introduceContainer3.gif',
          'text': '每天一个项目课，丰富你的项目经验'},
        {'img_url': 'https://static.shiyanlou.com/img/introduceContainer4.gif',
          'text': '有效学习时间，真实记录你的代码生涯'}]
    }
  },
  methods:{
    search: function () {
      this.$router.push({name: 'search', query: {keywords: this.search_input}})
    }
  }
}
</script>

<style  type="text/css" scoped>
#sign_menu,#selection_menu,#course_categories_ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
/*总导航区域*/
#navigation_bar{
  display: flex;
  flex-wrap: wrap; /*flex-wrap 属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向*/
  background: #f7f7f7; /*接近白色的灰色*/
  height: 144px;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;/*文字间间距*/
  position: relative;
}
.navigation_li {
  float: left;
}
/* logo 切换/登陆/注册 区域 */
#navigation_logo_sign {
  display: flex;
  justify-content:space-between; /*使“课程管理”那些文字位于右边*/
  align-content: center; /*元素位于容器的中心。*/
  width: 1170px;
  height: 84px;
}
/* logo */
#navigation_logo {
  display: inline-flex;
  justify-content: flex-start;
}
#navigation_logo_a {
  display: block;
  border: 0;
  padding: 10px 0;
  margin-top: 8px;
  height: 70px;
}
/* 登陆注册区域 */
#navigation_login {
  display: flex;
  align-self: center;
}
/* 切换按钮 加框 */
#tab_button {
  border: 1px solid #409eff;
  color: #409eff;
  padding: 6px 22px;
  border-radius: 30px;
  margin: 5px 25px auto auto;
  font-size: 16px;
  text-decoration: none;
}
/* 选择区域 */
#selection_bar {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background: #ffffff;
  height: 60px;
}
/* 全部课程按钮 */
#all_courses_li {
  display: flex;
  height: 60px;
  width: 260px;
  background: #409eff;
  font-size: 16px;
}
#all_courses_i {
  color: #fff;
}

#all_courses_button {
  display: block;
  color: #fff;
  padding: 20px 15px;
  width: 260px;
  text-decoration: none;
}

/* 其他选项 包括 路径/社区等 */
.sub_selection_li {
  display: flex;
  height: 60px;
}

.sub_selection_a {
  color: #3a3a3a;
  font-size: 16px;
  padding: 20px 15px;
  text-decoration: none;
}
.sub_selection_a:hover {
  color: #08bf91;
}
#search_bar{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}
/* 主要承载布局区 */
#main_navigation {
  display: flex;
  justify-content: flex-start;
  height: 522px;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  background-color: #f7f7f7;
}
#carousel_menu{
  margin-left: auto;
  margin-right: auto;
  width: 1170px;
  height: 522px;
  position: absolute;
  z-index: 1;

}
#carousel_img{
  width: inherit;
  height: inherit;
}
#course_categories{
  z-index: 5;
  background: rgba(37,37,37,.36);
  width: 260px;

}
.course_categories_li {
  height: 58px;
  padding: 18px 12px 0;
  margin-top: -1px;
  position: relative;
}

/* 大分类里 div1 的设置*/
.course_categories_div {
  height: 100%;
  margin-top: -1px;
  border-bottom: 1px solid #bcbcbc;
  display: flex;
  align-items: center;
}
/*router_link主题*/
.course_button {
  list-style: none;
  font-size: 16px;
  color: #fff;
  margin-right: 10px;
  margin-left: 5px;
  text-decoration: none;
}
.main_course_button {
  font-size: 18px;
}
/*鼠标放在上面，颜色变为白色*/
.course_categories_li:hover {
  background: #fff;
}
/*hover时取消边界*/
.course_categories_li:hover div {
  border: none;
}
/*鼠标放在div上，字体颜色变为黑色*/
.course_categories_li:hover a {
  color: #666;
}
/*鼠标放在文字上，文字颜色变化*/
.course_categories_li:hover a:hover {
  color: #409eff;
}
/* 大分类里 div2 的设置 */
.sub_course_categories_div {
  display: none;
  width: 400px;
  background: #fff;
  position: absolute;
  padding: 20px;
  top: 0;
  left: 260px;
  z-index: 5;
}
/*鼠标放在上面 div2 显示出来*/
.course_categories_li:hover .sub_course_categories_div {
  display: flex;
  flex-direction: column;
}
/* div2 里的 hover 出来的二级子菜单 */
.sub_course_categories_p {
  display: inline-block;
  height: 22px;
  width: auto;
  line-height: 22px;
  padding: 0 10px;
  background: #eee;
  margin: 0 0 20px;
  margin-right: auto;
  font-size: 14px;
  text-align: center;
}
/*div2里面的div*/
.sub_course_categories_span_div {
  display: flex;
  /*align-self: center;*/
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.sub_course_a {
  display: inline-block;
  border-left: 1px solid #666;
  border-right: 1px solid #666;
  padding: 0 10px;
  font-size: 12px;
  margin-left: -1px;
  margin-bottom: 10px;
}
/*后端开发div*/
#back_end_div{
  display: flex;
  flex-direction: column;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  margin-bottom: 30px;
}
.sub_course_card_title{
  display: flex;
  flex-direction: column;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  margin-bottom: 30px;
}
.back_end_title{
  margin-bottom: 30px;
}
/*后端开发div title*/
/*学习路径div*/
.learning_path_course_div {
  display: flex;
  flex-wrap: wrap;
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
/*学习路径div  title*/
.learning_path_course_div_title {
  margin-bottom: 30px;
}
.site_description_div {
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 70px;
}

.site_description_card_plus {
  width: 25%;
}
/*课程卡片区域 div class*/
.course_div{
  width: 1170px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 70px;
  /*background-color: #409eff;*/
}
.card{
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.normal_card_a {
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 2px 0 #ddd;
}
/*test*/
.float_card_div {
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 15px;
}

.float_card_a {
  transition: bottom .3s;
  display: block;
  width: 100%;
  /*height: 100%;*/
  box-shadow: 0 1px 2px 0 #ddd;
  position: relative;
  bottom: 0;
}

.float_card_a:hover {
  box-shadow: 0 4px 20px 4px #ddd;
  bottom: 10px;
}

.float_card_img {
  height: 130px;
  width: 100%;

}

.float_card_text_div {
  width: 100%;
  background: #fff;

}

.float_card_text_p {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 30px 0 15px;
  font-size: 18px;
  color: #666;
}
.card{
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  position: relative;
  /*background: #409eff;*/
}
.card:hover .card_text{
  opacity: 1;
  transform:  translateY(0);
}
.card_text{
  position: absolute;
  bottom: 0;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(34,34,34,0.35);
  text-align: center;
  overflow: hidden;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  transition: 0.3s;
  opacity: 0;
  transform:  translateY(100%);
}
</style>