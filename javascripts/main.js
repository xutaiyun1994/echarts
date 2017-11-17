
// 基于准备好的dom，初始化echarts实例
//"dark"主题设置
var myChart = echarts.init(document.getElementById('text'),"dark");
// 指定图表的配置项和数据
var option = {
    title: {
        show:true,
        link:"http://baidu.com",
        target:"blank",
        //标题的文本设置
        text: 'ECharts 入门示例'
    },
    testStyle:{
        fontFamily:"微软雅黑",
        fontSize:24,
        color:"red"
    },
    //鼠标悬浮提示工具
    tooltip: {},
    //图注
    legend: {
        //系列项
        data:['产量','销量']
    },
    //x轴
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    //y轴
    yAxis: {},
    //状图之间的间距
    barGap:"5%",
    //系列配置
    series: [
        {
        //”bar“是柱状图，“line”是折线图.“pie”是饼状图
        name: '产量',
        type: 'bar',
        data: [15, 10, 26, 5, 20, 30]
    } ,
    {
        //”bar“是柱状图，“line”是折线图.“pie”是饼状图
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }
    ],
    //设置柱状图的大小
    grid:{
        left:10,
        top:0,
        right:10,
        bottom:30
    }
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
//窗口缩放
window.onresize = myChart.resize;