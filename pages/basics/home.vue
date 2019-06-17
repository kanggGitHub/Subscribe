<template name="basics">
	<view>
		
		<scroll-view scroll-y class="page">
			<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="2000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
			 indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</view>
				</swiper-item>
			</swiper>
			<!-- 按钮  列表 -->
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 相册列表
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">创建相册</button>
				</view>
			</view>
			<!-- 相册 -->
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
			
			<!-- 新建 -->
			<view class="cu-modal" :class="modalName=='menuModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop>
					<button class="cu-btn bg-green " @click="addPhoto()">创建相册</button>
				</view>
			</view>
			
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				cardCur: 0,
				dotStyle:false,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}],
				elements: [{
						title: '布局',
						name: 'layout',
						color: 'cyan',
						cuIcon: 'newsfill'
					},
					{
						title: '背景',
						name: 'background',
						color: 'blue',
						cuIcon: 'colorlens'
					},
					{
						title: '文本',
						name: 'text',
						color: 'purple',
						cuIcon: 'font'
					},
					{
						title: '图标 ',
						name: 'icon',
						color: 'mauve',
						cuIcon: 'cuIcon'
					}
				],
			};
		},
		onShow() {
			console.log("success")
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			addPhoto(){
				// let addPhotos = {
				// 		title: '按钮',
				// 		name: 'button',
				// 		color: 'pink',
				// 		cuIcon: 'btn'
				// 	},
				// this.elements.push(addPhotos),
				uni.showToast({
					title:"创建成功"
				})
				
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
