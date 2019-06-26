<template>
	<view 		@touchstart="drag_start" @touchmove="drag_hmove">
		<view  	:class="['ball', colse ? 'hide':'']" :style="'left:'+moveX+'px;top :'+moveY+'px;'"	>{{title}}</view>
		<view 	:class="['ball',!colse ? 'hide':'']" :style="'left:'+x+'px;top :'+y+'px;'"			>{{title}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			x: {
				type: String
			},
			y: {
				type: String
			},
			title: {
				type: String
			}
		},
		data() {
			return {
				start:[266,666],
				moveY:0,
				moveX:0,
				colse:true
			}
		},
		created() {
		},
		methods: {
			drag_start(event){
				this.start[0]= event.touches[0].clientX-event.target.offsetLeft;
				this.start[1]= event.touches[0].clientY-event.target.offsetTop;
				console.log(event)
				console.log(event)
			},
			drag_hmove(event){
					let	 tag 	 = event.touches;
					this.moveX	 = tag[0].clientX-this.start[0];
					this.moveY	 = tag[0].clientY-this.start[1];
					this.colse ? this.colse = false : this.colse;
			}
		}}
</script>

<style lang="less">
	.ball{
		width: 70upx;height: 70upx;
		background:linear-gradient(to bottom, #F8F8FF,#87CEFA);
		border-radius: 50%;
		box-shadow: 0 0 15upx #87CEFA;
		color: #fff;
		font-size: 30upx;
		display: flex;justify-content: center;align-items: center;
		position: fixed!important;
	}
	.hide{
		display: none;
	}
</style>
