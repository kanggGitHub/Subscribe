<template name="waterfall">
	<view class="content">
		111
		<waterfalltemp :list='list' :space='16' :column='3'></waterfalltemp>
	</view>
</template>

<script>
  import waterfalltemp from '../../components/kcy-waterfall/waterfalltemp.vue'
  import dataList from '../../static/kcy-waterfall/data.json'
	export default {
    components: {
      waterfalltemp
    },
		data() {
			return {
				list: [
						{
							"url": "https://cdn2.thecatapi.com/images/1si.jpg",
							"width": 500,
							"height": 376,
							"id": "1si",
							"breeds": []
						},
						{
							"url": "https://cdn2.thecatapi.com/images/1te.gif",
							"width": 166,
							"height": 141,
							"id": "1te",
							"breeds": []
						},
						{
							"url": "https://cdn2.thecatapi.com/images/28t.png",
							"width": 400,
							"height": 262,
							"id": "28t",
							"breeds": []
						},
						{
							"url": "https://cdn2.thecatapi.com/images/2f9.jpg",
							"width": 500,
							"height": 333,
							"id": "2f9",
							"breeds": []
						},
						{
							"url": "https://cdn2.thecatapi.com/images/2v7.jpg",
							"width": 960,
							"height": 960,
							"id": "2v7",
							"breeds": []
						},
						{
							"url": "https://cdn2.thecatapi.com/images/306.jpg",
							"width": 2048,
							"height": 1536,
							"id": "306",
							"breeds": []
						},
						{
							"url": "https://cdn2.thecatapi.com/images/3hd.jpg",
							"width": 640,
							"height": 396,
							"id": "3hd",
							"breeds": []
						},
						{
							"url": "https://cdn2.thecatapi.com/images/3ok.gif",
							"width": 500,
							"height": 281,
							"id": "3ok",
							"breeds": []
						},
						{
							"url": "https://cdn2.thecatapi.com/images/3qe.jpg",
							"width": 500,
							"height": 358,
							"id": "3qe",
							"breeds": []
						},
					   
						{
							"url": "https://cdn2.thecatapi.com/images/J-yqiiK5z.jpg",
							"width": 1100,
							"height": 619,
							"id": "J-yqiiK5z",
							"breeds": []
						}
					]
			}
		},
		onLoad() {
			console.log(this.list)
        //this.list = dataList
      
		},
		methods: {}
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
