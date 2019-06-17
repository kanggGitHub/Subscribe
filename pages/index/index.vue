<template>
	<view></view>
</template>
<script>
	export default {
		onReady() {
			if(uni.getStorageSync('ifLaunch')) 
				uni.reLaunch({
					url: '../main/main'
				})
			else 
				uni.navigateTo({
				url: '../main/guide'
			})
		},
		methods: {

		}
	}
</script>