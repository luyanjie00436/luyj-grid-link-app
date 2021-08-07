<template>
	<view >
		<luyj-grid-link :list="list" @gridExc="clickGrid"></luyj-grid-link>
	</view>
</template>

<script>
	import data from '@/common/data/data.js';	// 数据
	export default {
		data() {
			return {
				list : data.system_list
			}
		},
		onLoad() {
			
		},
		methods: {
			clickGrid : function(e){
				console.log("点击宫格",e.currentTarget.dataset.exec);
			}
		}
	}
</script>

<style>
	
</style>
