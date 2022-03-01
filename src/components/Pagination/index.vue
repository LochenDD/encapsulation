<template>
    <el-pagination
      :background="background"
      :layout="layout"
      :total="total"
      :current-page.sync="currentPage"
      @current-change="currentChange"
      :page-size.sync="pageSize"
      @size-change="sizeChange"
      :disabled="disabled"
      :pageSizes="pageSizes"
    />
</template>

<script>
// import scrollTo from '@/utils/scroll-to.js'
import { scrollTo } from '@/utils/scroll-to'

export default {
  props: {
    autoScroll: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 100]
    },
    layout: {
      type: String,
      default: 'prev, pager, next, jumper, ->, total'
    },
    background: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {

    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (page) {
        this.$emit('update:page', page)
      }
    },
    pageSize: {
      get () {
        return this.size
      },
      set (size) {
        this.$emit('update:size', size)
      }
    }
  },
  methods: {
    currentChange () {
      this.$emit('pagination', { page: this.currentPage, size: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    sizeChange () {
      this.$emit('pagination', { page: this.currentPage, size: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
