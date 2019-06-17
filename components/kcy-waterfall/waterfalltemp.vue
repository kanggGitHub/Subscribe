<template>
	<view class="waterfall" :style='{paddingRight: space + "px"}'>
		<view class="ul" v-for="(list, idx) in dataList" :key='idx'>
      <view class="item" v-for="(item, index) in list" :key='index' :style='{marginLeft: space + "px", marginTop: space + "px", width: itemWidth + "px"}'>
        <image class="cover" mode='widthFix' :src="item.url"></image>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
    props: {
      list: {  // 页面列表数据
        type: Array,
        default: []
      },
      column: {
        type: Number
      }, // 显示列数
      space: {
        type: Number
      }, // 图片间间隔
    },
		data() {
			return {
				dataList: [],
        totalHeight: [],
        itemWidth: 0
			};
		},
    watch: {
      list: {
        deep: true,
        handler (newList, oldList) {
          // if (newList.length === 0) {
          //   this.dataList = []
          //   this.totalHeight = []
          //   return
          // }
          let dataList = []
          let totalHeight = []
          this.column = this.column < 2 ? 2 : this.column
          let itemWidth = parseInt((uni.getSystemInfoSync().windowWidth - (this.column + 1) * this.space) / this.column)
          if (this.dataList.length === 0) {
            for (let i = 0; i < this.column; i++) {
              dataList.push([])
            }
            totalHeight = new Array(this.column).fill(0)
          } else {
            dataList = JSON.parse(JSON.stringify(this.dataList))
            totalHeight = JSON.parse(JSON.stringify(this.totalHeight))
          }
          let nList = newList.filter(newItem => {
            let b = true
            oldList.forEach(oldItem => {
              if (newItem.url === oldItem) {
                b = false
              }
            })
            return b
          })
          nList.forEach(item => {
            let minIndex = this.getMinIndex(totalHeight)
            totalHeight[minIndex] += parseInt(item.height * (itemWidth / item.width))
            dataList[minIndex].push(item)
          })
          this.dataList = dataList
          this.totalHeight = totalHeight
          this.itemWidth = itemWidth
        }
      }
    },
    methods: {
      getMinIndex (totalHeight) {
        let minIndex = 0
        let minValue = totalHeight[0]
        for (let i = 0; i < totalHeight.length; i++) {
          if (totalHeight[i] < minValue) {
            minIndex = i
          }
        }
        return minIndex
      }
    }
	}
</script>

<style lang="scss">
  .waterfall {
    background: #f8f8f8;
    .ul {
      display: inline-block;
      vertical-align: top;
      .item {
        .cover {
          width: 100%;
          vertical-align: top;
          border-radius: 8upx;
        }
      }
    }
  }
</style>
