<template name="mycenter">
	<view>
		<!-- <view class="bg-gradual-purple">
			<view class="flex solid-bottom padding align-center">
				<view class="cu-avatar xl round " style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);height: 200upx;width: 200upx;"></view>
				<view class="bg-gradual-purple padding-sm margin-xs radius" style="font-size: 30upx;">{{pickername}}
				<view  style="font-size: 30upx;margin-top:10upx;color: #F43F3B;">{{pickername}}</view>
				</view>
				
			</view>
		</view> -->
		 <view class="UCenter-bg">
					<image src="../../static/guide/logo.png" class="png" mode="widthFix"></image>
					<view class="text-xl">{{pickername}}
					  <text class="text-df">0.2</text>
					</view>
					<view class="margin-top-sm">
					  <text>By:李馥含</text>
					</view>
					<image src="https://image.weilanwl.com/gif/wave.gif" mode="scaleToFill" class="gif-wave"></image>
			</view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
		
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 我的
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button>
				</view>
			</view>
			<view class="cu-modal" :class="modalName=='menuModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop>
					<view class="cu-list menu text-left solid-top">
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">短边框</text>
							</view>
							<view class="action">
								<switch @change="MenuBorder" :class="menuBorder?'checked':''" :checked="menuBorder?true:false"></switch>
							</view>
						</view>
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
			</view>
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/certification" >
						<image src="/static/center/authentication_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >实名认证</text>
					</navigator>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/clockin" >
						<image src="/static/center/sign_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >签到</text>
					</navigator>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					
					<navigator class="content" hover-class="none" url="../mycenter/clockin" >
						<image src="/static/center/upload_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >上传照片</text>
					</navigator>
					<view class="action">
						<button class="cu-btn round bg-green shadow-warp">
							<text class="cuIcon-upload"></text> 上传</button>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/upload" >
						<image src="/static/center/beautify_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >照片美化</text>
					</navigator>
				</view>
				
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/feedback" >
						<image src="/static/center/feedback_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >反馈信息</text>
					</navigator>
				</view>
				
				
			</view>

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 系统
				</view>
			</view>
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/systemset" >
						<image src="/static/center/systemset_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >系统设置</text>
					</navigator>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/aboutus" >
						<image src="/static/center/aboutus_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >更新日志</text>
					</navigator>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/aboutus" >
						<image src="/static/center/aboutus_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >关于我们</text>
					</navigator>
				</view>
			</view>
			
			

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pickername:"我露娜贼溜",
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: true,
				menuCard: false,
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
			Gridchange(e) {
				this.gridCol = e.detail.value
			},
			Gridswitch(e) {
				this.gridBorder = e.detail.value
			},
			MenuBorder(e) {
				this.menuBorder = e.detail.value
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value
			},
			MenuCard(e) {
				this.menuCard = e.detail.value
			},
			SwitchSex(e) {
				this.skin = e.detail.value
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
			},
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
	.UCenter-bg {
		  background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
		  background-size: cover;
		  height: 400upx;
		  display: flex;
		  justify-content: center;
		  padding-top: 30upx;
		  overflow: hidden;
		  position: relative;
		  flex-direction: column;
		  align-items: center;
		  color: #fff;
		  font-weight: 300;
		  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
		}
	
	.UCenter-bg text {
	  opacity: 0.8;
	}
	
	.UCenter-bg image {
	  width: 200upx;
	  height: 200upx;
	}
	
	.UCenter-bg .gif-wave{
	  position: absolute;
	  width: 100%;
	  bottom: 0;
	  left: 0;
	  z-index: 99;
	  mix-blend-mode: screen;  
	  height: 100upx;   
	}
	.mapBox{
	  left: 0;
	  z-index: 99;
	  mix-blend-mode: screen;  
	  height: 100upx;   
	}
	
	.mapBox{
	  width: 750upx;
	  height: 300upx;
	}
	
</style>
