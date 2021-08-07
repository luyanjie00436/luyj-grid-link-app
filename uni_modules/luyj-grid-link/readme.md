# luyj-grid-link
> **组件名：luyj-grid-link**
> 代码块： `luyj-grid-link`

### 说明
由于是基于[ColorUI-uniAPP](https://ext.dcloud.net.cn/plugin?id=239)模板，列表下的宫格。为了更专注于页面的数据，我将宫格的代码打包成插件形式。

![alt 宫格](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c07243ab-98a3-4f90-9b4d-2fa60aba2ee9/38647539-c303-4451-a9e3-68ed7abeaabc.png)
基于Color UI 的宫格的主要功能包括：
* 按组显示宫格信息
* 每组可以选择标题是否展示、背景色
* 超过两行，自动设置折叠/展开的形式。点击：**展开** 或**折叠**按钮显示宫格内容。
![alt 宫格折叠](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c07243ab-98a3-4f90-9b4d-2fa60aba2ee9/7576e49f-b5e0-4e4e-81f8-dc2cd0942e83.png)

![alt 宫格展开](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c07243ab-98a3-4f90-9b4d-2fa60aba2ee9/6a7ec0a3-4d42-49fb-97cf-42d31fd08d0a.png)
### 安装方式

* 本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。
* 本组件的样式基于ColorUI 。所以，若要使用先依照官网下载并下源码解压，复制根目录的 /colorui 文件夹到你的根目录。然后在App.vue 引入关键Css `main.css` `icon.css`。

``` html
<style>
    @import "colorui/main.css";
    @import "colorui/icon.css";
    @import "app.css"; /* 你的项目css */
    ....
</style>
```

### 基本用法

在 ``template`` 中的使用

```html
	<luyj-grid-link :list="list" @gridExc="clickGrid"></luyj-grid-link>
```

这里 `list`对应列表数据;@gridExc,对应没有链接属性时，宫格的执行方法,其中`e.detail.dataset.exec`对应列表中宫格的**`exec`**属性。这里引用了数据：

```javascript
list: [{
			title: '成员管理',
			cur: 'applications',
			bgColor: 'bg-blue light', // 背景颜色
			color: 'blue',
			title_show: false,
			showAll: false,
			colNumber: 3, // 显示的列数
			iconsList: [{
					cuIcon: 'group_fill',
					color: 'blue',
					name: '组织机构',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'friendadd',
					color: 'blue',
					name: '无URL',
					exec : 'add'
				},
				{
					cuIcon: 'friendaddfill',
					color: 'blue',
					name: '无Url',
					exec: 'invite'
				},
			]
		},
		{
			title: '基础数据',
			cur: 'basic',
			bgColor: '', // 背景颜色
			color: 'blue',
			title_show: true,
			showAll: false,
			colNumber: 5, // 显示的列数
			iconsList: [{
					cuIcon: 'text',
					color: 'yellow',
					name: '基本信息',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'peoplelist',
					color: 'blue',
					name: '员工管理',
					url: '/pages/toUrl/toUrl'
				},

			]
		}, {
			title: '产品目录',
			cur: 'goods',
			bgColor: '', // 背景颜色
			color: 'blue',
			title_show: true,
			showAll: false,
			colNumber: 5, // 显示的列数
			iconsList: [{
					cuIcon: 'list',
					color: 'yellow',
					name: '分类',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'goodsnew',
					color: 'blue',
					name: '型号',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'shake',
					color: 'olive',
					name: '设备',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'questionfill',
					color: 'yellow',
					name: '常见问题',
					url: '/pages/toUrl/toUrl'
				}
			]
		},
		{
			title: '权限管理',
			cur: 'goods',
			bgColor: '', // 背景颜色
			color: 'blue',
			title_show: true,
			showAll: false,
			colNumber: 5, // 显示的列数
			iconsList: [{
				cuIcon: 'goodsfill',
				color: 'red',
				name: '权限设置',
				url: '/pages/toUrl/toUrl'
			}]
		}
	], 
```

### 属性说明

|属性名					|类型			|默认值		|说明																
|:-:					|:-:			|:-:		|:-:																
| list					|Arrary			|[]			|宫格组，其中里面的每一组对象表示每一组宫格的展示

#### list 内对象的参数说明

|属性名					|类型			|是否必填		|说明
|:-:					|:-:			|:-:			|:-:
|title					|String			|是				|标题
|cur					|String			|是				|当前宫格组的名称（每组不能重名）
|bgColor				|String			|是				|宫格的背景颜，(可以为''),参考Color UI的样式
|color					|String			|是				|标题字体的颜色
|title_show				|Boolean		|是				|是否显示标题
|showAll				|Boolean		|是				|是否默认展开所有宫格
|colNumber				|Number			|是				|每行展示宫格的列数
|iconsList				|Array			|是				|宫格的图标列表

##### iconsList 内对象的参数说明

|属性名					|类型			|是否必填		|说明
|:-:					|:-:			|:-:			|:-:
|cuIcon					|String			|是				|图标名称，参考ColorUI库
|color					|String			|是				|宫格颜色
|name					|String			|是				|名称
|url					|String			|否				|宫格默认的跳转路径
|exec					|String			|否				|存储参数（无Url时），宫格的参数。点击宫格是，@gridExc传递参数

### 事件说明
| 事件名		| 说明		|	返回参数 
| :-:			| :-:		| :-:	
|@gridExc		| 宫格无跳转路径时，返回参数，用于区分宫格，执行不同操作			| value= {e.detail.dataset.exec}
