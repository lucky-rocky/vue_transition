<template>
  <div class="hello">
    <h3>支付金额:</h3>
    <div id="hello" :style="{ width: '500px', height: '200px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  components: {},
  props: {
    numData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.formShowBar()
  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    // 数据小于10 补0
    addZERO(arr, length = 10) {
      if (arr.length < length) {
        arr.push(0)
        this.addZERO(arr)
      }
      return arr
    },

    // 排序后合并序号5往后的数据
    mergeData(arr) {
      arr = arr.sort((a, b) => b - a)
      const [, , , , , ...mergeNum] = arr
      let mergedNum = 0 // 合并后的数据
      mergeNum.forEach((item, i) => {
        mergedNum = mergeNum[i] - 0 + mergedNum
      })
      arr = arr.slice(0, 5)
      arr.push(mergedNum)
      return arr
    },

    // form echarts
    formShowBar() {
      // 重组数据
      let barData = JSON.parse(JSON.stringify(this.numData))
      // 补
      barData = this.addZERO(this.numData)
      // 合
      barData = this.mergeData(barData)
      // 根据数据得到配置
      const option = {
        tooltip: {
          // trigger: 'axis',
          // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          //     type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          // }
        },
        // legend: {
        //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        // },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'category',
          data: ['周一']
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            barWidth: 15, //柱图宽度
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [barData[0]]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            barWidth: 30, //柱图宽度
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [barData[1]]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            barWidth: 30, //柱图宽度
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [barData[2]]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            barWidth: 30, //柱图宽度
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [barData[3]]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            barWidth: 30, //柱图宽度
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [barData[4]]
          },
          {
            name: 'abcd',
            type: 'bar',
            stack: '总量',
            barWidth: 30, //柱图宽度
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [barData[5]]
          }
        ]
      }
      // 实例化
      const myChart = this.$echarts.init(document.getElementById('hello'))
      myChart.setOption(option)
    }
  },
  filter: {},
  computed: {},
  watch: {}
}
</script>

<style lang="css" scoped>
/* 组件全局 */
.hello {
  height: 100px;
}
/* echarts */
#hello {
  position: absolute;
  top: -20px;
  left: -20px;
}
</style>
