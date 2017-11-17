/**
 * 功能：图标配置
 * 日期：2017/11/13
 **/
// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('test'), "dark");
//console.log(myChart);

// 指定图表的配置项和数据
const option = {
	// 图表标题
	title: {
		show: true,
		link: "https://www.baidu.com",
		target: "blank",
		// 标题的文本内容设置
		text: 'ECharts 入门示例',
		textStyle: {
			fontFamily: "羿创小公主体",
			fontSize: 24,
			color: "#ff8365"
		}
	},
	// 鼠标悬浮提示工具
	tooltip: {},
	// 图注
	legend: {
		// 系列项
		data:['产量','销量'],
		orient: 'vertical',
		top: 50,
		right: 10,
		textStyle: {
			fontSize: 18
		}
	},
	// X轴
	xAxis: {
		data: [],
		axisLabel: {
			textStyle: {
				fontFamily: 'Microsoft YaHei',
				fontSize: 18
			}
		}
	},
	// Y轴
	yAxis: {},
	// 系列配置
	series: [
		{
			name: '产量',
			// “bar”是柱状图，“line”是折线图，“pie”是饼状图
			type: 'bar',
			data: []
		},
		{
			name: '销量',
			type: 'bar',
			data: []
		}
	],
	grid: {
		left: 50,
		top: 50,
		right: 90,
		bottom: 50,
	}
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 显示加载动画
myChart.showLoading();

const btnLoadData = document.getElementById("btnLoadData");
btnLoadData.onclick = function () {
	axios.get("data/product-info.json").then(function (res) {
		// 隐藏加载动画
		myChart.hideLoading();
		myChart.setOption({
			xAxis: {
				data: res.data.goodsType
			},
			series: [
				{
					data: res.data.yield
				},
				{
					data: res.data.sales
				}
			]
		})
	}).catch(function () {
		console.error("请求失败！");
	});
};


