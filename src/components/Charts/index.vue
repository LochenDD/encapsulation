<template>
    <div :id="id" ref="chart" :class="className" :style="`width: ${width};height:${height};`"></div>
</template>

<script>
import debounce from 'lodash/debounce'
import * as echarts from 'echarts'

export default {
  name: 'Chart',
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    chartOption: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      chart: null
    }
  },
  methods: {
    resize: debounce(function () {
      this.chart && this.chart.resize()
    }, 300),
    setOption () {
      this.chart.setOption(this.chartOption)
    }
  },
  watch: {
    chartOption: {
      handler () {
        this.setOption()
      },
      deep: true
    }
  },
  mounted () {
    this.chart = echarts.init(this.$refs.chart)
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    this.chart && this.chart.dispose()
    this.chart = null
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style lang="less" scoped>

</style>
