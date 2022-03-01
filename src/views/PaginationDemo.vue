<template>
  <div class="page">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
      <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <Pagination
      :pageSizes="[1,2,3]"
      background
      :page.sync="page"
      :size.sync="size"
      @pagination="getList"
      autoScroll
      :total="total"
      layout="sizes, prev, pager, next, jumper, ->, total, slot"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      page: 1,
      size: 2,
      total: 0,
      list: [],
      originList: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '1 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '1 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '2 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '2 1516 弄'
      },
      {
        date: '2016',
        name: '王',
        address: '上海市 3'
      }]
    }
  },
  methods: {
    getList () {
      this.list = this.originList.slice(this.size * (this.page - 1), this.size * this.page)

      this.total = this.originList.length
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>

</style>
