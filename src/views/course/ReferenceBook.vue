<template>
  <div>
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
    <el-table-column
        label="操作"
      align="left"
        v-if="this.$route.path.startsWith('/manager')">
      <template slot-scope="scope">
        <el-button
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog :title="dialogTitle[dialogStatus]" :visible.sync="dialogFormVisible" center>
    <el-form :model="form" ref="info">
      <el-form-item label="姓名">
        <el-input v-model="form.name" autocomplete="off" placeholder="请输入书名："></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" autocomplete="off" placeholder="请输入作者名："></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitInfo">确 定</el-button>
    </div>
  </el-dialog>
    <el-button icon="el-icon-upload2" type="primary" style="margin-left:10px;margin-bottom: 20px;margin-top: 10px" @click="showDialog"
               v-if="this.$route.path.startsWith('/manager')">新增数据</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[],
      dialogTitle: {
        addBook: "新增教师",
        editBook: "编辑教师"
      },
      dialogStatus: "",
      dialogFormVisible: false,
      form:{
        id:'',
        name:'',
        author:''
      }
    }
  },
  created() {
    this.findAllbooks();
  },
  methods: {
    findAllbooks() {
      this.$axios.get("/public/book/findAllBooks")
          .then((res) => {
            debugger
            this.tableData = res.data
            debugger
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是" + error.data.message
            });
          });
    },
    handleDelete (row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        debugger
        this.$axios.post("/book/deleteBook?uid="+row.id).then ((resp)=>{
          this.$message.success("删除成功!")
          this.findAllbooks();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleEdit(row){
      this.form.id=row.id;
      this.form.name=row.name;
      this.form.author=row.author;
      this.dialogFormVisible=true;
      this.dialogTitle="edit";
      this.dialogStatus='edit'
    },
    showDialog(){
      this.form.id='';
      this.form.name = '';
      this.form.author='';
      this.dialogFormVisible = true;
      this.dialogStatus = "add";
    },
    submitInfo () {
      if (this.dialogStatus === 'add'){
        this.addBook();
      } else if(this.dialogStatus === "edit") {
        this.editBook();
      }
    },
    addBook () {
      this.$axios.post("/book/addBook",this.form).then( (resp)=>{
        if (resp) {
          this.dialogFormVisible = false;
          this.$message.success("添加成功！");
          this.findAllbooks();
        }
      }).catch((error)=>{
        this.$message({
          message: '添加数据失败，原因是'+error.data.message,
          type: 'error'
        })
      });
    },
    editBook () {
      this.$axios.post("/book/updateBook",this.form).then( (resp)=>{
        this.dialogFormVisible = false;
        this.$message.success("修改成功!");
        this.findAllbooks();
      }).catch( (error)=> {
        this.$message({
          message: '数据更新失败，原因是'+error.data.message,
          type: 'error'
        })
      });
    }
  }
}
</script>
<style scoped>
.table {
  margin: 0 auto;
  clear: both;
}
</style>