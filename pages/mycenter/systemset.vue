<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">系统设置</block>
		</cu-custom>
		<view class="bg-white">
			<view class="flex solid-bottom padding justify-center">
			<view class="cu-avatar xl round margin-left" style="background-image:url(static/guide/logo.png);"></view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> 设置
			</view>
		</view>
		
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<view class="cu-list menu" :class="'card-menu margin-top'">
				<view class="cu-list menu" :class="'sm-border'">
					<view class="cu-item" :class="''">
						<view class="content" @click="onCache()" >
							<image src="/static/system/cache.png"  class="png" mode="aspectFit"></image>
							<text class="text-grey" >清除缓存</text>
						</view>
					</view>
					<view class="cu-item" :class="''">
						<view class="content" hover-class="none" >
							<image src="/static/center/sign_ct.png"  class="png" mode="aspectFit"></image>
							<text class="text-grey" >版本更新</text>
						</view>
					</view>
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
