<template>
  <div>
    <el-container>
<!--    动态将图片轮播图的容器高度设置成与图片一致-->
      <el-header style="height: auto;background:#545c64;text-align: right">
        <div class="head" style="text-align: center;margin-top: 30px ;font-size: 40px">
          精品课程
        </div>
        <el-button @click="login" type="info" icon="el-icon-user" style="background: #545c64 ">登陆</el-button>
      </el-header>

      <el-container>

        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu @select="handleselect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu v-for="(item,index) in $router.options.routes " :index="index+''" v-if="!item.hidden && !item.manager">
              <template slot="title">{{item.name}}</template>
              <el-menu-item v-for="(item2,index2) in item.children" :index="item.path+'/'+item2.path">{{item2.name}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name:'index',
  methods:{
    handleselect(index){
      this.$router.push(index);
      // console.log(index);
      // alert(index);
    },
    login(){
      this.$router.push("/login")
    }
  }
};
</script>

<style>

</style>
