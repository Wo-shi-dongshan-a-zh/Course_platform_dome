<template>
  <div>
    <div style="margin-top:50px;">
      <el-input v-model="teacherName" placeholder="请输入教师姓名" style="width:80%" clearable></el-input>
      <el-button type="primary" style="margin-left: 10px;" @click="searchTeacherByName">搜索</el-button>
      <el-button type="primary" style="margin-left:10px;margin-bottom: 20px;" @click="showDialog">新增教师</el-button>
    </div>
    <div>
      <el-table
              @selection-change="handleSelectionChange"
              :data="teachers"
              border>
        <el-table-column
                type="selection"
                width="50">
        </el-table-column>
        <el-table-column
                prop="uid"
                label="编号"
                width="50">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="70">
        </el-table-column>
        <el-table-column
                prop="sex"
                label="性别"
                width="70">
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄"
            width="70">
        </el-table-column>
        <el-table-column
            prop="married"
            label="婚姻情况"
            width="70">
        </el-table-column>
        <el-table-column
            prop="height"
            label="身高(CM)"
            width="100">
        </el-table-column>
        <el-table-column
            prop="weight"
            label="体重(KG)"
            width="100">
        </el-table-column>
        <el-table-column
                prop="birthday"
                label="生日"
                width="120">
        </el-table-column>
        <el-table-column
            prop="party_member"
            label="党员"
            width="90">
        </el-table-column>
        <el-table-column
            prop="cars"
            label="车"
            width="90">
        </el-table-column>
        <el-table-column
            prop="pets"
            label="宠物"
            width="90">
        </el-table-column>
        <el-table-column
            prop="address"
            label="住址"
            width="150">
        </el-table-column>
        <el-table-column
            prop="school"
            label="学校"
            width="150">
        </el-table-column>
        <el-table-column
          prop="college"
          label="学院"
          width="150">
        </el-table-column>
        <el-table-column
          prop="habits"
          label="爱好"
          width="150">
        </el-table-column>
        <el-table-column
            prop="salary"
            label="工资"
            width="70">
        </el-table-column>
        <el-table-column
                prop="phone"
                label="电话"
                width="150">
        </el-table-column>
        <el-table-column
            prop="wechat"
            label="微信"
            width="150">
        </el-table-column>
        <el-table-column
            prop="qq"
            label="QQ"
            width="150">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="200">
        </el-table-column>
        <el-table-column
                label="操作">
                align="left">
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
      <el-button type="danger" size="mini" style="margin-top: 12px" :disabled="multipleSelection.length === 0" @click="deleteTeachers">批量删除</el-button>
    </div>
    <el-dialog :title="dialogTitle[dialogStatus]" :visible.sync="dialogFormVisible" center>

      <el-form :model="form" :rules="rules" ref="teacher" >
        <el-form :model="form" :rules="rules" ref="teacher1"  inline="true">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入姓名（中文）"></el-input>
        </el-form-item>

        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择" style="width: 100%">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model.number="form.age" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="生日" :label-width="formLabelWidth" prop="birthday">
          <el-date-picker
              v-model="form.birthday"
              type="date"
              placeholder="请选择日期"
              value-format="yyyy-MM-dd"
              format="yyyy年MM月dd日"
              :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="学校" :label-width="formLabelWidth" prop="school">
          <el-select v-model="form.school" clearable placeholder="请选择学校">
            <el-option
               v-for="item in schooloptions"
              :key="item.value"
              :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="学院":label-width="formLabelWidth" prop="college">
          <el-select v-model="form.college" filterable placeholder="请选择">
            <el-option
              v-for="item in collegeoptions"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="住址" :label-width="formLabelWidth" prop="address">
            <el-cascader
                v-model="form.address"
                clearable
                :options="addressoptions"
                :props="{expandTrigger:'hover'}"
            ></el-cascader>
        </el-form-item>

        <el-form-item label="爱好":label-width="formLabelWidth" prop="habits">
          <el-select v-model="form.habits" multiple allow-create filterable default-first-option placeholder="请选择">
            <el-option
                v-for="item in habitsoptions"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

          <el-form-item label="车":label-width="formLabelWidth" prop="cars">
            <el-input v-model="form.cars"></el-input>
          </el-form-item>

          <el-form-item label="电话" :label-width="formLabelWidth" prop="phone" >
            <el-input v-model.number="form.phone" autocomplete="off" placeholder="请输入电话号码" type="text" maxlength="11" show-word-limit></el-input>
          </el-form-item>

          <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email" >
            <el-input v-model="form.email" autocomplete="off" size="small"></el-input>
          </el-form-item>

          <el-form-item label="微信" :label-width="formLabelWidth" prop="wechat" >
            <el-input v-model="form.wechat" autocomplete="off" size="small"></el-input>
          </el-form-item>

          <el-form-item label="QQ" :label-width="formLabelWidth" prop="qq">
            <el-input v-model.number="form.qq" autocomplete="off" size="small"></el-input>
          </el-form-item>

          <el-form-item label="工资" :label-width="formLabelWidth" prop="salary">
            <el-input v-model="form.salary" autocomplete="off" size="small"></el-input>
          </el-form-item>

        <el-form-item label="婚姻情况" :label-width="formLabelWidth" prop="married">
          <el-radio-group v-model="form.married" >
            <el-radio label="已婚" border size="mini">已婚的</el-radio>
            <el-radio label="未婚" border size="mini" style="margin-left: 5px">未婚的</el-radio>
          </el-radio-group>
        </el-form-item>

          <el-form-item label="党员":label-width="formLabelWidth" prop="party_member">
            <el-switch
                v-model="form.party_member"
                inactive-color="#9B9EA2"
                active-color="#1989FA"
                active-value="是"
                inactive-value="否"
                active-text="是"
                inactive-text="否">
            </el-switch>
          </el-form-item>

          <el-form-item label="宠物":label-width="formLabelWidth" prop="pets">
            <el-checkbox-group v-model="form.pets">
              <el-checkbox label="猫"></el-checkbox>
              <el-checkbox label="狗"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <el-form-item label="身高":label-width='formLabelWidth' prop="height">
          <el-slider
              v-model="form.height"
              :marks="height_marks"
              :min="100"
              :max="250"
              show-stops
              show-input>
          </el-slider>
        </el-form-item>

        <el-form-item label="体重":label-width="formLabelWidth" prop="weight">
          <el-slider
              v-model="form.weight"
              :marks="weight_marks"
              :min="40"
              :max="150"
              show-stops
              show-input>
          </el-slider>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitTeacher">确 定</el-button>
      </div>
    </el-dialog>

    <el-upload
            style="margin-top:20px;"
            action="/upload"
            multiple
            :on-success="handleSuccess"
            :limit="3"
            :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      height_marks:{
        100:"100",
        150:"150",
        160:"160",
        170:"170",
        180:"180",
        190:"190",
        200:"200",
        236:"cm",
      },
      weight_marks:{
        40:"40",
        50:"50",
        140:"kg",
        60:"60",
        70:"70",
        80:"80",
        90:"90",
        100:"100",
      },
      fileList: [],
      teacherName: '',
      multipleSelection:[],
      dialogTitle: {
        addTeacher: "新增教师",
        editTeacher: "编辑教师"
      },
      dialogStatus: "",
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur',pattern:/^[\u4e00-\u9fa5]{2,10}$/ }//pattern 可以进行前端验证
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        age: [
          { required: true, message: '年龄不合理',pattern:/^[2-9]{1}[0-9]{1}$/},//只能输入2位数字且十位数至少为2
          {type: 'number', message: '年龄必须为数字值'}
        ],
        birthday:[
          {required:true,message:'请输入生日',trigger:'blur'}
        ],
        salary:[
          {required:true,message:'请输入工资',trigger:'blur',pattern:/^[1-9]{1}[0-9]{3,4}$/}//输入4-5位数
        ],
        school:[
          {required:true,message:'请输入学校',trigger:'blur'}
        ],
        address:[
          {required:true,message:'请选择地址',trigger:'change'}
        ],
        married:[
          {required:true,message:'请选择婚姻情况',trigger:'change'}
        ],
        email:[
          {required:true,message:'请输入邮箱',trigger:'blur',pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}
        ],
        qq:[
          {required:true,message:'请输入QQ',trigger:'blur',pattern:/^[1-9]{1}[0-9]{5,9}$/}
        ],
        phone:[
          {required:true,message:'请输入电话',trigger:'blur',pattern:/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/}
        ],
        wechat:[
          {required:true,message:'请输入微信',trigger:'blur'}
        ],
        college: [
          {required:true,message:'请选择学院',trigger:'change'}
        ]
      },
      options: [{
        value: '1',
        label: '男'
      }, {
        value: '2',
        label: '女'
      }],
      pickerOptions:{
        disabledDate(time){
          const date = new Date();
          return time.getTime()>date.getTime()-3600*100*24*365*200;
        }
      },
      addressoptions:[{
        value: '重庆市',
        label: '重庆市',
        children: [{
          value: '区',
          label: '区',
          children: [{
            value: '江北区',
            label: '江北区'
          }, {
            value: '渝北区',
            label: '渝北区'
          }, {
            value: '渝中区',
            label: '渝中区'
          }, {
            value: '沙坪坝区',
            label: '沙坪坝区'
          }, {
            value: '九龙坡区',
            label: '九龙坡区'
          }, {
            value: '北碚区',
            label: '北碚区'
          }, {
            value: '巴南区',
            label: '巴南区'
          }, {
            value: '南岸区',
            label: '南岸区'
          }, {
            value: '大渡口区',
            label: '大渡口区'
          },{
            value: '永川区',
            label: '永川区'
          },{
            value: '涪陵区',
            label: '涪陵区'
          },{
            value: '长寿区',
            label: '长寿区'
          },{
            value: '江津区',
            label: '江津区'
          },{
            value: '合川区',
            label: '合川区'
          },{
            value: '双桥区',
            label: '双桥区'
          },{
            value: '万盛区',
            label: '万盛区'
          },{
            value: '南川区',
            label: '南川区'
          },{
            value: '璧山区',
            label: '璧山区'
          },{
            value: '大足区',
            label: '大足区'
          },{
            value: '开州区',
            label: '开州区'
          },{
            value: '梁平区',
            label: '梁平区'
          },{
            value: '綦江区',
            label: '綦江区'
          },{
            value: '黔江区',
            label: '黔江区'
          },{
            value: '荣昌区',
            label: '荣昌区'
          },{
            value: '铜梁区',
            label: '铜梁区'
          },{
            value: '潼南区',
            label: '潼南区'
          },{
            value: '万州区',
            label: '万州区'
          },{
            value: '武隆区',
            label: '武隆区'
          },{
            value: '其他区',
            label: '其他区'
          }],
        }, {
          value: '县',
          label: '县',
          children: [{
            value: '城口县',
            label: '城口县'
          }, {
            value: '垫江县',
            label: '垫江县'
          }, {
            value: '丰都县',
            label: '丰都县'
          }, {
            value: '奉节县',
            label: '奉节县'
          }, {
            value: '彭水苗族土家族自治县',
            label: '彭水苗族土家族自治县'
          }, {
            value: '石柱土家族自治县',
            label: '石柱土家族自治县'
          }, {
            value: '巫山县',
            label: '巫山县'
          }, {
            value: '巫溪县',
            label: '巫溪县'
          }, {
            value: '秀山土家族苗族自治县',
            label: '秀山土家族苗族自治县'
          },{
            value: '酉阳土家族苗族自治县',
            label: '酉阳土家族苗族自治县'
          },{
            value: '云阳县',
            label: '云阳县'
          },{
            value: '忠县',
            label: '忠县'
          }],
        }],
      }],
      schooloptions:[{
        value:"重庆大学",
        label:"重庆大学"
      },{
        value:"西南大学",
        label: "西南大学"
      },{
        value:"重庆师范大学",
        label: "重庆师范大学"
      },{
        value: "重庆理工大学",
        label: "重庆理工大学"
      },{
        value:"重庆交通大学",
        label:"重庆交通大学"
      },{
        value:"重庆工商大学",
        label: "重庆工商大学"
      },{
        value:"四川美术学院",
        label: "四川美术学院"
      },{
        value: "西南政法大学",
        label: "西南政法大学"
      },{
        value:"重庆文理学院",
        label: "重庆文理学院"
      }],
      collegeoptions:[{
        value:'计算机与信息科学学院'
      },{
        value:'教育科学学院'
      },{
        value: '地理与旅游学院'
      },{
        value:'文学院'
      },{
        value:'体育学院'
      },{
        value:'物理学院'
      } ,{
        value:'化学学院'
      },{
        value:'生物科学学院'
      },{
        value: '数学学院'
      }],
      habitsoptions:[{
        value:"篮球"
      },{
        value:"羽毛球"
      },{
        value:"乒乓球"
      },{
        value:"足球"
      },{
        value:"网球"
      },{
        value:"排球"
      },{
        value:"台球"
      },{
        value:"跑步"
      }],
      msg: '',
      teachers:[],
      search: '',
      dialogFormVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birthday:'',
        phone:'',
        school:'',
        married:'',
        address:[],
        email:'',
        wechat:'',
        qq:'',
        salary:'',
        cars:'',
        height:'',
        weight:'',
        party_member:'',
        habits:[],
        college:'',
        pets:[]
      },
      formLabelWidth: '120px',
    }
  },
  created() {
    this.findAllTeachers();
  },
  watch:{
    teacherName () {
        this.findAllTeachers();
    }
  },
  methods: {
    // deleteFile (file) {
    //   console.log(file)
    // },
    handleSuccess (file) {
      const filename = file.name;
      this.$message({
        message: '文件上传成功！',
        type: 'success'
      });
    },
    searchTeacherByName () {
        if (this.teacherName !== '') {
            this.$axios.get("/teacher/findTeacherByName?name="+this.teacherName).then( (resp)=> {
                this.teachers = resp.data;
            }).catch( (error)=>{
                this.$message({
                    type: 'error',
                    message: "查询失败，原因是"+error.data.message
                });
            })
        }
    },
    deleteTeachers () {
      this.$confirm('此操作将永久删除教师, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = '?';
        this.multipleSelection.forEach( (item)=>{
          ids += 'ids='+item.uid+'&'
        });
        this.$axios.post("/teacher/deleteTeachersByIds"+ids).then( (resp)=> {
          if (resp) {
            this.findAllTeachers();
            this.$message.success("删除成功！");
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    submitTeacher () {
      if (this.dialogStatus === 'addTeacher'){
        this.addTeacher();
      } else if(this.dialogStatus === "editTeacher") {
        this.editTeacher();
      }
    },
    findAllTeachers () {
      this.$axios.get("/teacher/findAllTeachers")
              .then((res) => {
                this.teachers = res.data
                debugger
              })
              .catch(error => {
                this.$message({
                  type: 'error',
                  message: "查询失败，原因是"+error.data.message
                });
              });
    },
    handleEdit (row) {
      this.form.uid = row.uid;
      this.form.name = row.name;
      this.form.age = row.age;
      this.form.sex = row.sex;
      this.form.birthday=row.birthday;
      this.form.phone=row.phone;
      this.form.school=row.school;
      this.form.address=row.address.split('/');
      this.form.married=row.married;
      this.form.salary=row.salary;
      this.form.wechat=row.wechat;
      this.form.qq=row.qq;
      this.form.email=row.email;
      this.form.cars=row.cars;
      this.form.height=row.height;
      this.form.weight=row.weight;
      this.form.party_member=row.party_member;
      this.form.habits=row.habits.split('/');
      this.form.college=row.college;
      this.form.pets=row.pets.split('/');
      this.dialogStatus = "editTeacher";
      this.dialogFormVisible = true;
      this.$refs.teacher1.clearValidate();
    },
    handleDelete (row) {
      this.$confirm('此操作将永久删除该教师, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post("/teacher/deleteTeacher?uid="+row.uid).then ((resp)=>{
          this.$message.success("删除成功!")
          this.findAllTeachers();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    showDialog () {
      this.form.uid = '';
      this.form.name = '';
      this.form.age = '';
      this.form.sex = '';
      this.form.birthday='2000-01-01';
      this.form.phone='';
      this.form.school='';
      this.form.address=[];
      this.form.married='';
      this.form.salary='';
      this.form.wechat='';
      this.form.qq='';
      this.form.email='';
      this.form.cars='';
      this.form.height=165;
      this.form.weight=52;
      this.form.habits=[];
      this.form.college='';
      this.form.party_member='否';
      this.form.pets=[];
      this.dialogStatus = "addTeacher";
      this.dialogFormVisible = true;
      this.$refs.teacher1.clearValidate();
    },
    addTeacher () {
      this.$refs.teacher1.validate((valid) => {//叫做callback，回调函数
        if (valid) {
          //将数据转换为String类型
          this.form.address=this.form.address.join("/");
          this.form.pets=this.form.pets.join('/');
          this.form.habits=this.form.habits.join('/');
          this.$axios.post("/teacher/addTeacher",this.form).then( (resp)=> {//等价于Promise p=this.$axios.post();
            if (resp) {
              this.dialogFormVisible = false;
              this.$message.success("添加成功！ ");
              this.findAllTeachers();
            }
          }).catch((error)=>{
              this.$message({
                message:'添加数据失败，原因是'+error.data.message,
                type:'error'
              })
          });
          // this.$axios.post("/teacher/addTeacher",this.form).then( (resp)=>{//等价于Promise p=this.$axios.post();
          //                                                                      //p.then();p.catch();
          //   if (resp.data==true) {//从后台接受数据resp.data ,为true代表存入数据库,为false代表数据不合法
          //     debugger
          //     this.dialogFormVisible = false;
          //     this.$message.success("添加成功！");
          //     this.findAllTeachers();
          //   }else {
          //     //将数据转换为array类型
          //     this.form.address = this.form.address.join("/");
          //     this.form.pets=this.form.pets.join('/');
          //     this.form.habits=this.form.habits.join('/')
          //     this.$message({
          //       message: '数据非法',
          //       type: 'error'
          //     })
          //   }
          // }).catch((error)=>{
          //   this.$message({
          //     message: '添加数据失败，原因是'+error.data.message,
          //     type: 'error'
          //   })
          // })
        }else {
          this.$message({
            message: '请输入所有字段',
            type: 'error'
          })
          return false;
        }
      });
    },
    editTeacher () {
      this.$refs.teacher1.validate((valid) => {
        if (valid) {
          //将数据转换为String类型
          this.form.address = this.form.address.join("/");
          this.form.pets=this.form.pets.join('/');
          this.form.habits=this.form.habits.join('/');
          this.$axios.post("/teacher/updateTeacher", this.form).then((resp) => {
            if(resp){
              this.dialogFormVisible=false;
              this.$message.success("修改成功！");
              this.findAllTeachers();
            }
            // if(resp.data==true) {//从后台接受数据resp.data ,为true代表存入数据库,为false代表数据不合法
            //   this.dialogFormVisible = false;
            //   this.$message.success("修改成功!");
            //   this.findAllTeachers();
            // }else{
            //   this.form.address = this.form.address.split("/");
            //   this.form.pets=this.form.pets.split('/');
            //   this.form.habits=this.form.habits.split('/')
            //   this.$message({
            //     message: '数据非法',
            //     type: 'error'
            //   })
            // }
          }).catch((error) => {
            this.$message({
              message: '数据更新失败，原因是' + error.data.message,
              type: 'error'
            })
          });
        }else {
          this.$message({
            message: '请输入所有字段',
            type: 'error'
          })
          return false;
        }
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
