/**
 * @description 趋势数据echarts的option
 * @param { number[] } myData Y轴我的线条数据
 * @param { number[] } producerData Y轴出品方平均线条数据
 * @param { number[]|string[] } date X轴日期数据
 */
export const getTrendDataOptions = (myData = [], producerData = [], date = []) => {
  const obj = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [
        '我的',
        '出品方平均'
      ],
      bottom: '0',
      selected: {
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date,
      axisLabel: {
        interval: 0,
        rotate: 40
      }
    },
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '我的',
        type: 'line',
        data: myData
      },
      {
        name: '出品方平均',
        type: 'line',
        data: producerData
      }
    ]
  }

  return obj
}
