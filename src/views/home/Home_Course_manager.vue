<template>
  <div>
<!--    <el-container>-->
<!--      <el-header style="height: auto;background:#545c64;text-align: right">-->
<!--        <div class="head" style="text-align: center;margin-top: 30px;font-size: 40px">-->
<!--          精品课程-->
<!--        </div>-->
<!--        <el-button @click="login" type="info" icon="el-icon-user" style="background: #545c64 ">登陆</el-button>-->
<!--      </el-header>-->
    <div class="header">
      <el-row style="padding-left: 200px;vertical-align: center;padding-top: 10px">
        <img src="../../assets/lanqiaoyunke.png" width="120px" height="40px">
        <el-input v-model="input" placeholder="请输入内容" style="width: 200px;margin-left: 650px"></el-input>
        <el-button>上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-button icon="el-icon-user" @click="login" style="margin: auto">登陆</el-button>
      </el-row>
    </div>
      <el-container>

        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 5px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu @select="handleselect" background-color=" #4c5157" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
            <el-submenu v-for="(item,index) in $router.options.routes " :index="index+''" v-if="!item.hidden && item.manager">
              <template slot="title">
                <i class="el-icon-s-management"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item v-for="(item2,index2) in item.children" :index="item.path+'/'+item2.path">{{item2.name1}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
<!--    </el-container>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
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
.header{
  height: 75px;
  width: 100%;
  background: white;
}
</style>
