<template>
  <div class="charts-demo">
    <Charts id="charts" className="charts" height="350px" :chartOption="chartOption"></Charts>
  </div>
</template>

<script>
import Charts from '@/components/Charts'
import { getTrendDataOptions } from '@/components/Charts/options'
export default {
  components: {
    Charts
  },
  data () {
    return {
      chartOption: {}
    }
  },
  methods: {
  },
  mounted () {
    const myData = [10, 5, 20, 4]
    const producerData = [5, 20, 4, 10]
    const date = ['20220102', '20220103', '20220104', '20220105']
    this.chartOption = getTrendDataOptions(myData, producerData, date)
  }
}
</script>

<style lang="less" scoped>

</style>
