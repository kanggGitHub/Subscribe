<template>
	<view 	@click=""	@touchstart="drag_start" @touchmove="drag_hmove">
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
				start:[0,0],
				moveY:0,
				moveX:0,
				colse:true
			}
		},
		methods: {
			drag_start(event){
				this.start[0]= event.touches[0].clientX-event.target.offsetLeft;
				this.start[1]= event.touches[0].clientY-event.target.offsetTop;
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
		background:linear-gradient(to bottom, #1212ea, #01eccc);
		border-radius: 50%;
		box-shadow: 0 0 15upx #f32c00;
		color: #fff;
		font-size: 30upx;
		display: flex;justify-content: center;align-items: center;
		position: fixed;
		z-index: 10;
		opacity:0.6;
	}
	.hide{
		display: none;
	}
</style>
