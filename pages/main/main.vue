<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<mycenter v-if="PageCur=='mycenter'"></mycenter>
		<waterfall v-if="PageCur=='waterfall'"></waterfall>
		<view  class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="waterfall">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/index' + [PageCur == 'waterfall'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='waterfall'?'text-blue':'text-gray'">主页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-pink':'text-gray'">分类</view>
			</view>
			
			<!-- 
			<view class="action text-gray add-action"  @click="NavChange">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				
			</view> -->
			
			<view class="action"  @click="NavChange" data-cur="mycenter">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/mycenter' + [PageCur == 'mycenter'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='mycenter'?'text-green':'text-gray'">个人中心</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'waterfall'
			}
		},
		onLoad() {

		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
