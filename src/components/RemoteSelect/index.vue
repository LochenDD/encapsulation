<template>
    <el-select
        :value="value"
        @input="handleInput"
        :multiple="multiple"
        filterable
        remote
        reserve-keyword
        :placeholder="placeholder"
        :remote-method="remoteMethod"
        :loading="loading"
        :loading-text="loadingText"
        :disabled="disabled"
        :clearable="clearable"
    >
        <el-option
            v-for="item in options"
            :key="item[optionProps.key]"
            :label="item[optionProps.label]"
            :value="item[optionProps.value]"
        />
    </el-select>
</template>

<script>
export default {
  name: 'RemoteSelect',
  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '加载中'
    },
    placeholder: {
      type: String,
      default: '请输入关键词'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    optionProps: {
      type: Object,
      default: () => ({
        key: 'key',
        label: 'label',
        value: 'value'
      })
    },
    value: {
      type: [String, Number, Array],
      required: true
    },
    remoteBack: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      options: [],
      loading: false
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    },
    remoteMethod (query) {
      const resolve = (data = []) => {
        this.options = data
        this.loading = false
      }
      if (query !== '') {
        this.loading = true
        this.remoteBack(query, resolve)
      } else {
        this.options = []
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
