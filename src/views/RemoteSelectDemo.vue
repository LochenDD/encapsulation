<template>
  <div class="remote-select-demo">
    <RemoteSelect placeholder="输点什么" v-model="selected" multiple :remoteBack="remoteBack" :optionProps="{
        key: 'index',
        label: 'name',
        value: 'name'
    }"></RemoteSelect>
  </div>
</template>

<script>
import RemoteSelect from '@/components/RemoteSelect'
export default {
  components: {
    RemoteSelect
  },
  data () {
    return {
      selected: '',
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming']
    }
  },
  methods: {
    remoteBack (query, resolve) {
      const newArr = this.states.filter(cur => cur?.toUpperCase().indexOf(query?.toUpperCase()) !== -1).map((cur, index) => ({
        index: index,
        name: cur
      }))
      console.log('🚀 ~ file: RemoteSelectDemo.vue ~ line 49 ~ newArr', newArr)
      setTimeout(() => {
        resolve(newArr)
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
