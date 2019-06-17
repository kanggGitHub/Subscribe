<template name="mycenter">
	<view>
		<view class="bg-gradual-purple">
			<view class="flex solid-bottom padding align-center">
				<view class="cu-avatar xl round " style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);height: 200upx;width: 200upx;"></view>
				<view class="bg-gradual-purple padding-sm margin-xs radius" style="font-size: 30upx;">{{pickername}}
				<view  style="font-size: 30upx;margin-top:10upx;color: #F43F3B;">{{pickername}}</view>
				</view>
				
			</view>
		</view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
		
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 自定义
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
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/systemset" >
						<image src="/static/center/systemset_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >系统设置</text>
					</navigator>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../mycenter/clockin" >
						<image src="/static/center/aboutus_ct.png"  class="png" mode="aspectFit"></image>
						<text class="text-grey" >关于我们</text>
					</navigator>
				</view>
				
				<!-- <view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-emojiflashfill text-pink"></text>
						<text class="text-grey">头像组</text>
					</view>
					<view class="action">
						<view class="cu-avatar-group">
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
						</view>
						<text class="text-grey text-sm">4 人</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-btn text-green"></text>
						<text class="text-grey">按钮</text>
					</view>
					<view class="action">
						<button class="cu-btn round bg-green shadow">
							<text class="cuIcon-upload"></text> 上传</button>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-tagfill text-red  margin-right-xs"></text>
						<text class="text-grey">标签</text>
					</view>
					<view class="action">
						<view class="cu-tag round bg-orange light">音乐</view>
						<view class="cu-tag round bg-olive light">电影</view>
						<view class="cu-tag round bg-blue light">旅行</view>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-warn text-green"></text>
						<text class="text-grey">文本</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">小目标还没有实现！</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view>
							<text class="cuIcon-clothesfill text-blue margin-right-xs"></text> 多行Item</view>
						<view class="text-gray text-sm">
							<text class="cuIcon-infofill margin-right-xs"></text> 小目标还没有实现！</view>
					</view>
					<view class="action">
						<switch class="switch-sex" @change="SwitchSex" :class="skin?'checked':''" :checked="skin?true:false"></switch>
					</view>
				</view> -->
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
