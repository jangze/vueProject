<template>
  <div class="right-container">
    <div class="input-area">
      <div style="margin-bottom: 20px">
        <el-select v-model="modelSelect" placeholder="请选择算法模型">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
      <el-input
        class="input-item"
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="inputText"
      >
      </el-input>
      <el-button
        class="el-button1"
        type="primary"
        size="medium"
        @click="getNer"
        >一键识别</el-button
      >
    </div>

    <div class="output-area">
      <!-- <el-input
        class="input-item"
        type="textarea"
        :rows="4"
        placeholder=""
        v-model="outputText"
        disabled
      >
      </el-input> -->
      <div class="output-container">
        <el-row v-for="item in entitiesRes" :key="item.start" :gutter="20">
          <el-col :span="18">
            <div class="grid-content bg-purple">{{item.word}}&nbsp;===>&nbsp;{{enToCh[item.type]}}</div>
          </el-col>
          <el-col :span="3">
            <el-button size="small" type="success">准确</el-button>
          </el-col>
          <el-col :span="3">
            <el-button size="small" type="danger">不准确</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>

import { getResult } from '@/control/ner.js'
export default {
  name: 'nermodel',
  data () {
    return {
      inputText: '',
      outputText: '',
      entitiesRes: [],
      enToCh: {
        'ANT': '部位',
        'DIS': '疾病名称',
        'REA': '病因',
        'SYM': '临床表现',
        'TES': '检查方法',
        'TSV': '检查指标值',
        'DRU': '药品名称',
        'FRE': '用药频率',
        'AMO': '用药剂量',
        'MET': '用药方法',
        'TRE': '非药治疗',
        'OPE': '手术',
        'SID': '不良反应',
        'LEV': '程度',
        'DUR': '持续时间'
      },
      options: [{
        value: 'BERT-PCA-BiLSTM-CRF',
        label: 'BERT-PCA-BiLSTM-CRF'
      }, {
        value: 'BiLSTM-GCN-CRF',
        label: 'BiLSTM-GCN-CRF'
      }],
      modelSelect: ''
    };
  },
  methods: {
    getNer () {
      getResult(this.inputText).then(res => {
          console.log('=====>', res.data);
          let { entities } = res.data;
          this.entitiesRes = [...entities]; // 存放入数组；
          const N = entities.length;
          let result = '';
          for (let i = 0; i < N; i++) {
            // console.log(entities[i].word, '----', entities[i].type);
            let tmp = `${entities[i].word}=====>${this.enToCh[entities[i].type]};`;
            result += tmp;
          }
          this.outputText = result;
      })
    }
  }
};
</script>
<style scoped>
.right-container {
  padding: 20px;
  border: 1px solid #e6e6e6;
  min-height: 90%;
}
.input-area {
  margin: 30px 0px;
}
.input-item {
  min-width: 1000px;
  max-width: 1200px;
}
.el-button1 {
  margin: 20px 0px;
  /* position: relative; */
  float: right;
}
.output-container {
  margin-top:100px;
}
.el-row {
  text-align: center;
  line-height: 36px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    font-size: 14px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
