<template>
	<view>
		<view v-for="(item , i) in tabber_list" :key="i">
			<!-- 标题 -->
			<view v-if="item.iconsList.length > 0 && item.title_show" class="cu-bar bg-white solid-top ">
				<view class="action">
					<text class="cuIcon-title " :class="'text-'+item.color"></text> {{ item.title}}
				</view>
			</view>
			<!-- 宫格 -->
			<view v-if="item.iconsList.length > 0" class="cu-list grid no-border solid-bottom "
			:class="'col-' + item.colNumber  +  ' ' + item.bgColor"
				 :data-cur="item.cur">
				<!-- 总宫格数小于等于item.colNumber*2 || 总宫格大于item.colNumber*2 ， index < item.colNumber*2 -1-->
				<view class="cu-item " v-for="(icon,index) in item.iconsList" :key="index"
					v-if="(item.iconsList.length <= item.colNumber*2) || (item.iconsList.length > item.colNumber*2 && index < item.colNumber*2 -1)"
					@tap="navigateTo" :data-url="icon.url" :data-exec="icon.exec">
					<view :class="['cuIcon-' + icon.cuIcon,'text-' + icon.color]">
					</view>
					<text>{{icon.name}}</text>
				</view>

				<!-- 总宫格大于item.colNumber*2 ，index > item.colNumber*2-1 -->
				<view class="cu-item " v-for="(icon,index) in item.iconsList" :key="index"
				v-if="item.iconsList.length > item.colNumber*2 && index >= item.colNumber*2 -1 && item.showAll"
					@tap="navigateTo" :data-url="icon.url">
					<view :class="['cuIcon-' + icon.cuIcon,'text-' + icon.color]">
					</view>
					<text>{{icon.name}}</text>
				</view>
				<!-- 全部或折叠按钮 -->
				<view v-if="item.iconsList.length >item.colNumber*2" class="cu-item" :data-cur="item.cur"
					@click="showAllGrid">
					<view class=" text-blue" :class="item.showAll ? 'cuIcon-fold' : 'cuIcon-apps'">
					</view>
					<text>{{ item.showAll ? '折叠' :'全部' }}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	/**
	 * 宫格的展示
	 * @description  依据ColorUI的宫格样式。只要以数组形式传入宫格
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=5746
	 * @property {Array}  list 列表，用于传递数据（传递每一行宫格对象）
	 * @event {Function()} gridExc 若对象没有Url属性，点击宫格时传出该宫格的值
	 */
	export default {
		name: 'luyj-grid-link',
		props:{
			list: {
				type : Array,
				default: new Array
			}
		},
		data(){
			return{
				tabber_list : this.list,		// 列表 , 由于参数不可改变值
			}
		},
		created:function(){
			
		},
		methods:{
			/** 连接到页或执行方法
			 * @param {Object} e
			 */
			navigateTo(e) {
				var url = e.currentTarget.dataset.url; // 连接的页面
				if (url != undefined) {
					// 跳转到页面
					uni.navigateTo({
						url: url
					});
				} else {
					var exec = e.currentTarget.dataset.exec;
					this.$emit("gridExc" ,e);			// 点击某一宫格时执行方法
				}
			},
			/** 展开或折叠当前宫格
			 * @param {Object} e
			 */
			showAllGrid(e) {
				var cur_grid = e.currentTarget.dataset.cur;
				// 获取当前列
				var tabber = this.tabber_list.find(function(item) {
					return item.cur == cur_grid;
				})
				if (tabber != undefined) {
					tabber.showAll = !tabber.showAll;
				}
			},
		}
	}
</script>
<style>
</style>
