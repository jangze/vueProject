<template>
  <div>
    <div class="title">电子病历</div>

    <el-form v-if="!this.userName || this.userName === 'other'" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
      <el-form-item label="患者唯一标识符" prop="his">
          <el-input :disabled="isDisable" v-model="ruleForm.his"></el-input>
      </el-form-item>
      <el-form-item label="患者病案号" prop="bah">
        <el-input :disabled="isDisable" v-model="ruleForm.bah"></el-input>
      </el-form-item>
      <el-form-item label="患者病历号" prop="blh">
        <el-input :disabled="isDisable" v-model="ruleForm.blh"></el-input>
      </el-form-item>
      <el-form-item label="患者住院号" prop="zyh">
        <el-input :disabled="isDisable" v-model="ruleForm.zyh"></el-input>
      </el-form-item>
      <el-form-item label="患者年龄" prop="age">
        <el-input  :disabled="isDisable" v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="患者性别" prop="gender">
        <el-input  :disabled="isDisable" v-model="ruleForm.gender"></el-input>
      </el-form-item>
      <el-form-item label="入院时间" prop="admission_time">
        <el-input  :disabled="isDisable" v-model="ruleForm.admission_time"></el-input>
      </el-form-item>
      <el-form-item label="出院时间" prop="descharge_time">
        <el-input  :disabled="isDisable" v-model="ruleForm.descharge_time"></el-input>
      </el-form-item>
      <el-form-item label="主诉" prop="chief_complaint">
        <el-input  :disabled="isDisable" v-model="ruleForm.chief_complaint"></el-input>
      </el-form-item>
      <el-form-item label="现病史" prop="present_history">
        <el-input  :disabled="isDisable" v-model="ruleForm.present_history"></el-input>
      </el-form-item>
      <el-form-item label="既往史" prop="past_history">
        <el-input  :disabled="isDisable" v-model="ruleForm.past_history"></el-input>
      </el-form-item>
      <el-form-item label="婚育史" prop="menstrual_history">
        <el-input  :disabled="isDisable" v-model="ruleForm.menstrual_history"></el-input>
      </el-form-item>
      <el-form-item label="个人史" prop="personal_history">
        <el-input  :disabled="isDisable" v-model="ruleForm.personal_history"></el-input>
      </el-form-item>
      <el-form-item label="家族史" prop="family_history">
        <el-input  :disabled="isDisable" v-model="ruleForm.family_history"></el-input>
      </el-form-item>
      <el-form-item label="体格检查" prop="physical_examination">
        <el-input  :disabled="isDisable" v-model="ruleForm.physical_examination"></el-input>
      </el-form-item>
      <el-form-item label="辅助检查" prop="auxiliary_examination">
        <el-input  :disabled="isDisable" v-model="ruleForm.auxiliary_examination"></el-input>
      </el-form-item>
      <el-form-item label="主要诊断" prop="primary_diagnosis">
        <el-input  :disabled="isDisable" v-model="ruleForm.primary_diagnosis"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :type="this.isDisable ? 'danger' : 'primary'" @click="submitForm('ruleForm')">{{ this.isDisable ? "编辑" : "保存"}}</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 90%;margin: 0 auto"
      v-if=" this.userName === 'doctor'"
      height="90%">
      <el-table-column
        fixed
        prop="id"
        label="主键ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="his"
        label="患者唯一标识符"
        width="120">
      </el-table-column>
      <el-table-column
        prop="blh"
        label="患者病历号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zyh"
        label="患者住院号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="age"
        label="患者年龄"
        width="300">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="患者性别"
        width="120">
      </el-table-column>
      <el-table-column
        prop="admission_time"
        label="入院时间"
        width="120">
      </el-table-column><el-table-column
        prop="descharge_time"
        label="出院时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="chief_complaint"
        label="主诉"
        width="120">
      </el-table-column>
      <el-table-column
        prop="present_history"
        label="现病史"
        width="120">
      </el-table-column>
      <el-table-column
        prop="past_history"
        label="既往史"
        width="120">
      </el-table-column>
      <el-table-column
        prop="menstrual_history"
        label="婚育史"
        width="120">
      </el-table-column>
      <el-table-column
        prop="personal_history"
        label="个人史"
        width="120">
      </el-table-column>
      <el-table-column
        prop="family_history"
        label="家族史"
        width="120">
      </el-table-column>
      <el-table-column
        prop="physical_examination"
        label="体格检查"
        width="120">
      </el-table-column>
      <el-table-column
        prop="auxiliary_examination"
        label="辅助检查"
        width="120">
      </el-table-column>
      <el-table-column
        prop="primary_diagnosis"
        label="主要诊断"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import OtherArr from '@/utils/otherData'
    export default {
        name: 'ElecticRecord',
        data () {
            return {
                tableData: [],
                isDisable: false,
                ruleForm: {
                   id: '',
                    his: '',
                    bah: '',
                    blh: '',
                    zyh: '',
                    age: '',
                    gender: '',
                    admission_time: '',
                    descharge_time: '',
                    chief_complaint: '',
                    present_history: '',
                    past_history: '',
                    menstrual_history: '',
                    personal_history: '',
                    family_history: '',
                    physical_examination: '',
                    auxiliary_examination: '',
                    primary_diagnosis: ''
                },
                rules: {
                    his: [
                        { required: true, message: '请输入患者唯一标识符', trigger: 'blur' }
                    ],
                    bah: [
                        { required: true, message: '请输入患者病案号', trigger: 'blur' }
                    ],
                    blh: [
                        { required: true, message: '请输入患者病历号', trigger: 'blur' }
                    ],
                    zyh: [
                        { required: true, message: '请输入患者住院号', trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: '请输入患者年龄', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: '请输入患者性别', trigger: 'blur' }
                    ],
                    admission_time: [
                        { required: true, message: '请输入入院时间', trigger: 'blur' }
                    ],
                    descharge_time: [
                        { required: true, message: '请输入出院时间', trigger: 'blur' }
                    ],
                    chief_complaint: [
                        { required: true, message: '请输入主诉', trigger: 'blur' }
                    ],
                    present_history: [
                        { required: true, message: '请输入现病史', trigger: 'blur' }
                    ],
past_history: [
                        { required: true, message: '请输入既往史', trigger: 'blur' }
                    ],
menstrual_history: [
                        { required: true, message: '请输入婚育史', trigger: 'blur' }
                    ],
personal_history: [
                        { required: true, message: '请输入个人史', trigger: 'blur' }
                    ],
family_history: [
                        { required: true, message: '请输入家族史', trigger: 'blur' }
                    ],
physical_examination: [
                        { required: true, message: '请输入体格检查', trigger: 'blur' }
                    ],
auxiliary_examination: [
                        { required: true, message: '请输入辅助检查', trigger: 'blur' }
                    ],
primary_diagnosis: [
                        { required: true, message: '请输入主要诊断', trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {
            userName () {
                return this.$store.state.user
            }
        },
        created () {
            if (sessionStorage.getItem('medicalRecords')) {
                this.tableData = JSON.parse(sessionStorage.getItem('medicalRecords'))
            } else {
                this.tableData = OtherArr;
            }
        },
        methods: {
            submitForm (formName) {
                if (this.isDisable) {
                    // eslint-disable-next-line no-return-assign
                    return this.isDisable = false;
                }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const arr = OtherArr.concat([this.ruleForm]);
                        sessionStorage.setItem('medicalRecords', JSON.stringify(arr));
                        this.isDisable = true;
                    } else {
                        return false;
                    }
                });
            },
            resetForm (formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
  .title{font-size: 24px;margin-bottom: 20px}
.demo-ruleForm{width: 80%}
</style>
