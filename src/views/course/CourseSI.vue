<template>
  <div>
    <el-input
      type="textarea"
      :rows="20"
      placeholder="请输入内容"
       :v-model="course.introduction"
      :disabled="noedit">
    </el-input>
    <el-button type="primary" icon="el-icon-edit" @click="startEdit">编辑</el-button>
    <el-button type="primary" @click="commit">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course:[
        {
          uid:'1',
          name:'',
          introduction:''
        }
      ],
      noedit:true
    }
  },
  created() {
    this.course.name=this.$route.name;
    this.getCourseSI();
    // alert(this.course.introduction)
  },
  methods:{
    startEdit(){
      this.noedit=false;
    },
    commit(){
      debugger
      this.$axios.post("/CourseSI/updateCourseSI",this.course).then( (resp)=>{
          this.$message.success("修改成功！");
          this.noedit=true;
      }).catch((error)=>{
        this.$message({
          message: '数据修改失败，原因是'+error.data.message,
          type: 'error'
        })
      });
    },
    getCourseSI() {
      let _this = this
      this.$axios.get("/CourseSI/findAllCourseSIs")
          .then((res) => {
            debugger
            _this.course= res.data
            debugger
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是" + error.data.message
            });
          });
    },
  }
}
</script>