<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">问题和意见</block>
		</cu-custom>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<!-- <view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 自定义
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button>
				</view>
			</view> -->
			<!-- <view class="cu-modal" :class="modalName=='menuModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop>
					<view class="cu-list menu text-left solid-top">
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">箭头</text>
							</view>
							<view class="action">
								<switch @change="MenuArrow" :class="menuArrow?'checked':''" :checked="menuArrow?true:false"></switch>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">卡片</text>
							</view>
							<view class="action">
								<switch @change="MenuCard" :class="menuCard?'checked':''" :checked="menuCard?true:false"></switch>
							</view>
						</view>
					</view>
				</view>
			</view> -->
			<view class="cu-list menu" :class="'sm-border'">
				<view class="cu-item" :class="''">
					<view class="content" @click="onCache()" >
						<image src="/static/system/cache.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >清除缓存</text>
					</view>
				</view>
				<view class="cu-item" :class="''">
					<navigator class="content" hover-class="none" url="../mycenter/clockin" >
						<image src="/static/center/sign_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >签到</text>
					</navigator>
				</view>
				
			</view>

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 消息列表
				</view>
			</view>
			
			

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName:"",
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			SwitchSex(e) {
				this.skin = e.detail.value
			},
			onCache(){
				uni.removeStorage({
				key: 'ifLaunch',
				success: function (res) {
					uni.showToast({
						title:"清除本地缓存成功！",
						icon:"success"
					})
				}
			});
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	
</style>
