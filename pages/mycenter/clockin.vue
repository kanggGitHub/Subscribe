<template>
    <view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">签到</block>
		</cu-custom>
		
		<view class="cu-card case" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" @click="onSign();" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-grey text-sm flex justify-between">正义天使 凯尔
								<view class="text-gray text-sm">
									<view class="cu-tag bg-img" @click="onSign();" style="background-image:url(../../static/center/sign.png);width: 2rem;height: 1.5rem;">
									</view>
									点我
								</view>
							</view>
							<view class="text-gray text-sm flex justify-between">
								累计签到
								<view class="text-gray text-sm">
									{{signdate}}天
								</view>
							</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
        <calendar 
        :date="date"
        :lunar="true" 
        :disable-before="false" 
        :start-date="'2017-3-2'"
        :end-date="'2230-5-20'"
        @change="change"
        @to-click="toClick"
		 theme="#fffff"
         ></calendar>

    </view>
</template>




<script>
	import calendar from "@/components/uni-calendar/uni-calendar"
export default {
    components: {
        calendar
    },
    data() {
        return {
            date:new Date(),
			isCard: false,
			signdate:30
        };
    },
    methods: {
        change(e) {
            console.log(e);
        },
        toClick(e) {
            console.log(e);
        },
		IsCard(e) {
				this.isCard = e.detail.value
		},
		onSign() {
			this.date="2019-06-15",
			this.signdate=this.signdate+1
			uni.showToast({
				title:"签到成功！",
				icon:"success"
			})
		}
    }
};
</script>