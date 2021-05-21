<template>
  <div style="background:#f8f9fa;">
    <div class="header">
    <el-row style="padding-left: 200px;vertical-align: center;padding-top: 10px">
      <img src="../../assets/lanqiao_logo.svg">
      <el-link type="primary" underline='false' style="margin-left: 270px;font-size: 20px">课程</el-link>
      <el-link type="primary" underline='false' style="margin-left: 20px;font-size: 20px">竞赛</el-link>
      <el-link type="primary" underline='false' style="margin-left: 20px;font-size: 20px">蓝桥杯</el-link>
      <el-link type="primary" underline='false' style="margin-left: 20px;font-size: 20px">社区</el-link>
      <el-link type="primary" underline='false' style="color: white">会员</el-link>
      <el-input v-model="input" placeholder="请输入内容" style="width: 200px"></el-input>
      <el-button>上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <el-button icon="el-icon-user" @click="login">登陆</el-button>
    </el-row>
    </div>
    <div style="box-shadow: 10px 10px 5px #888888;height: 1px;background: white"></div>
    <div class="body" >
      <div class="body-2" style="float: right;">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="Linux系统简介" name="1">
            <div>知识点: 1.linux为何物 2.linux历史简介 3.linux重要人物 4.linux与windows的不同 5.如何学习linux</div>
          </el-collapse-item>
          <el-collapse-item title="基本概念及操作" name="2">
            <div>控知识点: 1.Linux基本命令 2.通配符的使用 3.查看帮助文档</div>
          </el-collapse-item>
          <el-collapse-item title="用户及文件权限管理" name="3">
            <div>知识点: 1.Linux用户管理 2.Linux权限管理</div>
          </el-collapse-item>
          <el-collapse-item title="Linux 目录结构及文件基本操作" name="4">
            <div>知识点: 1.每个目录的大体内容 2.文件的属性 3.touch，file，rm，mv等基本命令</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="body-1">
        <div class="body-1-1">
          <span style="font-weight: bold;font-size: 30px">Linux入门基础</span>
          <el-divider></el-divider>
          <p>329759 人学过 43773 次评价 作者: Edward 难度: 初级  综合评分:  9.4</p>
          <p>本课程教你如何熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。</p>
        </div>
        <div class="body-1-2">
          <span>你能学到的</span>
          <el-button icon="el-icon-upload2" style="margin-left:680px;" size="mini" @click="showDialog"
                     v-if="this.$route.path.startsWith('/manager')">新增数据</el-button>
          <el-divider></el-divider>
          <el-table
              :data="tableData"
              border
              style="width: 100%">
            <el-table-column
                prop="id"
                label="ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="书名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="author"
                label="作者">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "course",
  data() {
    return {
      tableData: [],
      dialogTitle: {
        addBook: "新增教师",
        editBook: "编辑教师"
      },
      dialogStatus: "",
      dialogFormVisible: false,
      form: {
        id: '',
        name: '',
        author: ''
      },
      address:'',
      coursename:'',
      title:'',
      content:'',
    }
  },
  created() {
    this.title=this.$route.name;
    this.findAllbooks();
    // this.findCourseSI();
  },
  methods: {
    login(){
      this.$router.push("/login")
    },
    findAllbooks() {
      this.address = this.$route.path;
      this.$axios.get("/book/findAllBooks")
          .then((res) => {
            this.tableData = res.data
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是" + error.data.message
            });
          });
    },
    findCourseSI() {
      this.$axios.get("/public/coursesi/findCourseSIByName?name=" + this.coursename).then((resp) => {
        this.content= resp.data;
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: "查询失败，原因是" + error.data.message
        });
      })
    }
  }
}
</script>

<style scoped>
.header{
  height: 75px;
  width: 100%;
  background: white;
}
.body{
  height: 1200px;
  width: 1050px;
  margin-left: 200px;
  padding-top: 10px;
}
.body-1{
  padding-top: 10px;
  width: 800px;
  float: left;
}
.body-1-1{
  /*height: 200px;*/
  width: 800px;
  background: white;
  padding-left: 20px;
  padding-top: 20px;
  color: #4c5157;
}
.body-1-2{
  /*height: 200px;*/
  width: 800px;
  background: white;
  margin-top: 15px;
  padding-left: 20px;
  padding-top: 10px;
  color: #4c5157;
}
.body-2{
  width: 220px;
  height: 100%;
  background: white;
  margin-top: 10px;
  float: right;
  color: #4c5157;
}
</style>