<template>
  <div>
    <h1>实体标注</h1>
    <el-input
       v-if="!isP"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="textarea2"
    >
    </el-input>
    <p class="text" v-else>
      <span v-for="val in textarea2" :key="val.id">{{val}}</span>
    </p>
    <el-button @click="this.handleClick" type="primary" size="large">{{this.isP ? "重新查询" : "一键查询"}}</el-button>

    <el-table
      v-if="this.isShowTab && this.isP"
      :data="tableData"
      stripe
      class="tableData"
      style="width: 90%">
      <el-table-column
        prop="password"
        label="关键词"
        >
      </el-table-column>
      <el-table-column
        prop="mark"
        label="标识"
        >
        <template slot-scope="scope">
          <div>
            <el-input v-model="scope.row.mark" />
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="add" type="primary">添加关键词</el-button>
  </div>
</template>

<script>
  import MarkType from '@/utils/keyword'
export default {
  name: 'trainmodel',
  data () {
    return {
      textarea2: '',
        isP: false,
        tableData: [],
        isShowTab: false
    };
  },
    methods: {
      add () {
          const text1 = window.prompt('请输入关键词')
          const text2 = window.prompt('请输入标识')
          this.tableData.push({
              password: text1,
              mark: text2
          })
      },
        handleClick () {
            this.isP = !this.isP;
            if (this.isP) {
                let arr = []
                for (let i = 0; i < this.tableData.length; i++) {
                    if (this.textarea2.includes(this.tableData[i].password)) {
                        arr.push(this.tableData[i]);
                    }
                }
                this.tableData = arr;
                console.log(arr, 'ss')
                this.isShowTab = arr.length > 0;
            }
        }
    },
    created () {
        for (let i = 0; i < MarkType.length; i++) {
            const obj = {
                password: MarkType[i],
                mark: MarkType[i]
            }
            this.tableData.push(obj)
        }
    }
};
</script>

<style scoped>
  .text{
    width: 90%;
    margin: 0 auto;
    text-align: left;
  }
  .tableData{
    margin: 20px auto;
  }
</style>
