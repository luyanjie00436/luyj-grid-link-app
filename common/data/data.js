/**
 * 目录的宫格索引
 */

module.exports = {
	current_list: [{
		title: '成员管理',
		cur: 'applications',
		bgColor: '', // 背景颜色
		color: 'blue',
		title_show: false,
		showAll: false,
		colNumber: 5, // 显示的列数
		iconsList: [{
				cuIcon: 'group_fill',
				color: 'blue',
				name: '1',
			},
			{
				cuIcon: 'friendadd',
				color: 'yellow',
				name: '2',
				exec: 'add'
			},
			{
				cuIcon: 'friendaddfill',
				color: 'green',
				name: '3',
				exec: 'invite'
			},
			{
					cuIcon: 'group_fill',
					color: 'red',
					name: '4',
				},
				{
					cuIcon: 'friendadd',
					color: 'orange',
					name: '5',
					exec: 'add'
				},
				{
					cuIcon: 'friendaddfill',
					color: 'purple',
					name: '6',
					exec: 'invite'
				},
			{
					cuIcon: 'group_fill',
					color: 'pink',
					name: '7',
				},
				{
					cuIcon: 'friendadd',
					color: 'cyan',
					name: '8',
					exec: 'add'
				},
				{
					cuIcon: 'friendaddfill',
					color: 'blue',
					name: '9',
					exec: 'invite'
				},
			{
					cuIcon: 'group_fill',
					color: 'blue',
					name: '10',
				},
				{
					cuIcon: 'friendadd',
					color: 'blue',
					name: '11',
					exec: 'add'
				},
				{
					cuIcon: 'friendaddfill',
					color: 'blue',
					name: '12',
					exec: 'invite'
				},
			
		]
	}],
	system_list: [{
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
					exec: 'add'
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
}
