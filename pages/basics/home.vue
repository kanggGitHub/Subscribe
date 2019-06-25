<template name="basics">
	<view>
		<!-- 轮播图 -->
		<scroll-view scroll-y class="page">
			<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="2000" duration="1000" @change="cardSwiper" indicator-color="#8799a3"
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
			<view  v-if="showtap==1"  class="nav-list">
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
					<view class="grid col-2">
						<view class="margin-tb-sm text-center">
							<button class="cu-btn round bg-olive shadow" @click.stop="modPhoto()">修改</button>
						</view>
						<view class="margin-tb-sm text-center" >
							<button class="cu-btn round bg-olive shadow" @click.stop="delPhoto()" >删除</button>
						</view>
					</view>
				</navigator>
			</view>
			<view v-else-if="showtap==2">
				<view class="margin radius bg-gradual-green shadow-blur">
					<image src="https://image.weilanwl.com/gif/wave.gif" mode="scaleToFill" class="gif-black response" style="height:100upx"></image>
				</view>
				<view class="margin radius bg-gradual-green shadow-blur">
					<image src="../../static/img/camera.jpg" mode="scaleToFill" class="gif-black response" style="height:550upx"></image>
				</view>
			</view>
			<!-- 新建 -->
			<view class="cu-modal" :class="modalName=='menuModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop>
					<view class="cu-card dynamic">
						<view class="cu-item shadow">
							<view class="cu-list menu-avatar">
								<view class="cu-item text-center">
									<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
									<view class="content flex-treble">
										<view>创建相册</view>
									</view>
								</view>
							</view>
							<view class="cu-list menu-avatar comment solids-top">
								<form>
									<view class="cu-form-group margin-top">
										<view class="title">名称</view>
										<input placeholder="例如:我的相册"  v-model="addphoto.title" name="input"></input>
									</view>
									<view class="cu-form-group">
										<view class="title">名称</view>
										<input placeholder="例如:MyPhoto" v-model="addphoto.name" name="input"></input>
									</view>
									<view class="cu-bar bg-white solid-bottom">
										<view class="action">
											<text class="cuIcon-titles text-orange "></text> 相册颜色
										</view>
									</view>
									<view class="cu-form-group margin-top col-5">
											<radio-group class="block" @change="RadioChange">
												<radio class='red  margin-left-sm'   style="border:3upx solid #ff001f;border-radius:50%" :class="[radio=='red'?'':'radio',radio=='red'?'checked':'']" :checked="radio=='red'?true:false" value="red"></radio>
												<radio class='yellow margin-left-sm' style="border:3upx solid yellow;border-radius:50%" :class="[radio=='yellow'?'':'radio',radio=='yellow'?'checked':'']" :checked="radio=='yellow'?true:false" value="yellow"></radio>
												<radio class='orange margin-left-sm' style="border:3upx solid orange;border-radius:50%" :class="radio=='orange'?'checked':''" :checked="radio=='orange'?true:false" value="orange"></radio>
												<radio class='green  margin-left-sm' style="border:3upx solid green;border-radius:50%" :class="radio=='green'?'checked':''" :checked="radio=='green'?true:false" value="green"></radio>
												<radio class='cyan margin-left-sm'   style="border:3upx solid cyan;border-radius:50%" :class="radio=='cyan'?'checked':''" :checked="radio=='cyan'?true:false" value="cyan"></radio>
												<radio class='purple margin-left-sm' style="border:3upx solid purple;border-radius:50%" :class="radio=='purple'?'checked':''" :checked="radio=='purple'?true:false" value="purple"></radio>
												<radio class='mauve  margin-left-sm' style="border:3upx solid #9c26b0;border-radius:50%" :class="radio=='mauve'?'checked':''" :checked="radio=='mauve'?true:false" value="mauve"></radio>
												<radio class='pink margin-left-sm'   style="border:3upx solid pink;border-radius:50%" :class="radio=='pink'?'checked':''" :checked="radio=='pink'?true:false" value="pink"></radio>
												<radio class='brown margin-left-sm'  style="border:3upx solid brown;border-radius:50%" :class="radio=='brown'?'checked':''" :checked="radio=='brown'?true:false" value="brown"></radio>
												<radio class='grey  margin-left-sm'  style="border:3upx solid grey;border-radius:50%" :class="radio=='grey'?'checked':''" :checked="radio=='grey'?true:false" value="grey"></radio>
												<radio class='gray margin-left-sm'   style="border:3upx solid gray;border-radius:50%" :class="radio=='gray'?'checked':''" :checked="radio=='gray'?true:false" value="gray"></radio>
												<radio class='black margin-left-sm'  style="border:3upx solid black;border-radius:50%" :class="radio=='black'?'checked':''" :checked="radio=='black'?true:false" value="black"></radio>
											</radio-group>
									</view>
									<button class="cu-btn bg-cyan " @click="addPhoto()">创建相册</button>
								</form>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import swiperjson from "../../static/datajson/swiperJson.json"
	export default {
		name: "basics",
		data() {
			return {
				cardCur: 0,
				showtap:0,
				dotStyle:true,
				modalName: null,
				swiperList: [],
				radio: 'red',
				elements: [
					// {
					// 	title: '布局',
					// 	name: 'layout',
					// 	color: 'cyan',
					// 	cuIcon: 'newsfill'
					// },
					// {
					// 	title: '背景',
					// 	name: 'background',
					// 	color: 'blue',
					// 	cuIcon: 'colorlens'
					// },
					// {
					// 	title: '文本',
					// 	name: 'text',
					// 	color: 'purple',
					// 	cuIcon: 'font'
					// },
					// {
					// 	title: '图标 ',
					// 	name: 'icon',
					// 	color: 'mauve',
					// 	cuIcon: 'cuIcon'
					// }
				],
				addphoto:{
					title:'',
					name:'',
					color:'',
					cuIcon:'camera',
				},
			};
		},
		onShow() {
		},
		created() {
			//初始化轮播图 相册列表
			let that = this
			that.getPhotos()
			that.getSwiperList()
		},
		methods: {
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			//创建相册
			addPhoto(){
				this.elements.push({title:this.addphoto.title,
									name:this.addphoto.name,
									color:this.addphoto.color==''?'cyan':this.addphoto.color,
									cuIcon:this.addphoto.cuIcon})
				this.modalName=null
				this.showtap=1
				uni.request({
					url: 'http://localhost:8088/photo/savePhotoList', //请求后台接口返回数据。
					method:'POST',
					data:this.addphoto,
					header:{
						'content-type':'application/json'
					},
					dataType:"json",
					success: (res) => {
						console.log(this.addphoto);
					},
					fail() {
						this.showtap=2
					}
				});
				uni.showToast({
					title:"创建成功"
				})
			},
			//初始化相册
			getPhotos(){
				let that = this
				that.showtap=2
				uni.request({
					url: 'http://localhost:8088/photo/getPhotoList', //请求后台接口返回数据。
					method:'GET',
					header: {
						'content-type': 'application/json' //自定义请求头信息
					},
					success: (res) => {
						if(res.data!=null&&res.data.length>0){
							that.elements = res.data
							that.showtap=1
						}else{
							that.showtap=2
						}
					},
					fail() {
						that.showtap=2
					}
				});
			},
			
			//初始化轮播图
			getSwiperList(){
				let that = this
				that.swiperList=swiperjson
				// uni.request({
				// 	url: 'http://localhost:8088/photo/getSwiperList', //请求后台接口返回数据。
				// 	method:'GET',
				// 	header: {
				// 		'content-type': 'application/json' //自定义请求头信息
				// 	},
				// 	success: (res) => { //成功
				// 		if(res.data!=null){
				// 			that.swiperList = res.data
				// 		}
				// 		if(that.swiperList.length=0)
				// 			that.swiperList=swiperjson
				// 			
				// 	},
				// 	fail() { //失败
				// 		that.swiperList=swiperjson
				// 	}
				// });
			},
			//显示创建页面
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			//隐藏
			hideModal(e) {
				this.modalName = null
			},
			delPhoto() {
				console.log(1111)
			},
			modPhoto() {
				console.log(2222)
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
	.margin-tb-sm {
		margin-top: 7px;
		margin-bottom: -8px;
	}
</style>
