<template>
    <div id="map" ref="map">
    </div>
</template>

<script>
export default {
    data(){
      return {
         myChart:null,
         schoolCityMap:[
            // {
            //     name:"",
            //     value:['经度','维度'],
            // }
         ],
         city:[
            {name:"北京",value:99},
            {name:"天津",value:14},
            {name:"辽宁",value:16},
            {name:"上海",value:53},
            {name:"江苏",value:36},
            {name:"河南",value:22},
            {name:"安徽",value:109},
            {name:"湖南",value:19},
            {name:"重庆",value:26},
            {name:"四川",value:17},


            {name:"河北",value:0},
            {name:"山西",value:0},
            {name:"内蒙古",value:0},
            {name:"吉林",value:0},
            {name:"黑龙江",value:0},
            {name:"浙江",value:0},
            {name:"福建",value:0},
            {name:"江西",value:0},
            {name:"山东",value:0},
            {name:"湖北",value:0},
            {name:"贵州",value:0},
            {name:"云南",value:0},
            {name:"西藏",value:0},
            {name:"陕西",value:0},
            {name:"甘肃",value:0},
            {name:"青海",value:0},
            {name:"宁夏",value:0},
            {name:"新疆",value:0},
            {name:"广东",value:0},
            {name:"广西",value:0},
            {name:"海南",value:0},
            {name:"台湾",value:0},
         ],
         addScript:false,
      }
    },
    computed:{
    },
    created(){
        
    },
    mounted(){
         this.createdMap()
    },
    methods:{
      
       createdMap(){
                    this.myChart = echarts.init(document.getElementById('map'));
                    let schoolCityMap = [{
                        name:'北京',
                        value:"111",
                        msg:{}
                    }]
                    let data = this.city;
                    var geoCoordMap = {}; // 存储地区名和经纬度
                    /*获取地图数据*/
                    this.myChart.showLoading();
                    var mapFeatures = echarts.getMap('china').geoJson.features;
                    this.myChart.hideLoading();
                    mapFeatures.forEach(function(v) {
                        // 地区名称
                        var name = v.properties.name;
                        // 地区经纬度
                        geoCoordMap[name] = v.properties.cp;

                    });
                //    console.log(mapFeatures)

                    var  option = {
                            title: {
                                show:false,
                                text: "全国29个城市 我们总在你身边",
                                subtext: "",
                                x: 'center',
                                textStyle: {
                                    color: '#259FB4',
                                    fontFamily: "微软雅黑",
                                    fontSize: "26"
                                },
                                subtextStyle:{
                                    fontSize:"",
                                    fontFamily:""
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: function(params) {
                                     let toolTiphtml = `${params.name}`
                                     return toolTiphtml;
                                }
                            },
                            /**
                             * 地图颜色调节
                             */
                            
                            visualMap: {
                                show: false,
                                min: 0,
                                max: 200,
                                left: 'left',
                                top: 'bottom',
                                text: ['高', '低'], // 文本，默认为数值文本
                                calculable: true,
                                seriesIndex: [1],
                                inRange: {
                                    // color: ['#3B5077', '#031525'] // 蓝黑
                                    // color: ['#ffc0cb', '#800080'] // 红紫
                                    // color: ['#3C3B3F', '#605C3C'] // 黑绿
                                    // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                                    // color: ['#23074d', '#cc5333'] // 紫红
                                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                                    // color: ['#1488CC', '#2B32B2'] // 浅蓝
                                    color: ['#D3E56F', '#D3E56F'] //
                                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                                    // color: ['#00467F', '#A5CC82'] // 蓝绿

                                }
                            },
                            geo: {
                                show: true,
                                map: "china", // 中国地图
                                label: {
                                    normal: {
                                        show: true
                                    },
                                    emphasis: {
                                        show: false,
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            color: '#666',
                                            fontSize: 12,
                                        }
                                    }
                                },
                                zoom: 1.2,  // 放大
                                roam: false, // 禁止拖动
                                itemStyle: {
                                    normal: {
                                        areaColor: '#cccccc',
                                        borderColor: '#fff',
                                    },
                                    emphasis: {
                                        areaColor: '#ef8700',
                                    },
                                   
                                },
                                tooltip: {
                                        trigger: 'item',
                                        formatter:function(params){
                                            let toolTiphtml = ""
                                            if(params.data){
                                                   toolTiphtml = `
                                                                 ${params.data.name}-龙文教育
                                                                 <br/>
                                                                  ● 总共：${params.data.value}家
                                                               `;
                                            }
                                           

                                             return toolTiphtml;
                                        }
                                    }
                            },
                            series: [
                                {
                                    name: '散点',
                                    type: 'scatter',
                                    coordinateSystem: 'geo',
                                    data: [],
                                    symbolSize: function(val) { // 控制散点大小
                                        return val[2] / 10;
                                    },
                                    label: {
                                        normal: {
                                            formatter: '{b}',
                                            position: 'right',
                                            show: true
                                        },
                                        emphasis: {
                                            show: true
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: '#05C3F9'
                                        }
                                    }
                                }, 
                                {
                                    type: 'map',
                                    map: "china",
                                    scaleLimit:{
                                        min:1,
                                        max:1.2,
                                    },
                                    geoIndex: 0,
                                    aspectScale: 0.75, //长宽比
                                    showLegendSymbol: false, // 存在legend时显示
                                    label: {
                                        normal: {
                                            show: true
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                color: '#fff'
                                            }
                                        }
                                    },
                                    roam: true,
                                    itemStyle: {
                                        normal: {
                                            areaColor: '#031525',
                                            borderColor: '#3B5077',
                                        },
                                        emphasis: {
                                            areaColor: '#2B91B7'
                                        }
                                    },
                                    animation: true,
                                    data: data
                                },
                                {
                                    name: '城市',
                                    type: 'scatter',
                                    coordinateSystem: 'geo',
                                    symbol: 'pin', //气泡
                                    symbolSize: function(val) {
                                        // var a = (maxSize4Pin - minSize4Pin) / (max - min);
                                        // var b = minSize4Pin - a * min;
                                        // b = maxSize4Pin - a * max;
                                        // return a * val[2] + b;
                                        return 30;
                                        
                                    },
                                    label: {
                                        normal: {
                                            show: false,
                                            textStyle: {
                                                color: '#fff',
                                                fontSize: 9,
                                            }
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: '#F62157', //标志颜色
                                        }
                                    },
                                    zlevel: 6,
                                    // data: convertData(data),
                                    data:schoolCityMap,
                                    tooltip: {
                                        trigger: 'item',
                                        formatter:function(params){
                                             let toolTiphtml = `
                                                                 ${params.data.name}龙文教育
                                                                 <br/>
                                                                  ● 电话：${params.data.msg.phone}
                                                               `;

                                             return toolTiphtml;
                                        }
                                    }
                                },
                                {
                                    name: '城市',
                                    type: 'effectScatter',
                                    coordinateSystem: 'geo',
                                    // data: convertData(),
                                    data:schoolCityMap,
                                    
                                    symbolSize: function(val) {
                                        // return val[2] / 10;
                                        return 6;
                                    },
                                    showEffectOn: 'render',
                                    rippleEffect: {
                                        brushType: 'stroke'
                                    },
                                    hoverAnimation: true,
                                    label: {
                                        normal: {
                                            formatter: '{b}',
                                            position: 'right',
                                            color: '#05C3F9',
                                            show: true
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: 'yellow',
                                            shadowBlur: 10,
                                            shadowColor: 'yellow'
                                        }
                                    },
                                    zlevel: 1,
                                    tooltip: {
                                        trigger: 'item',
                                        formatter:function(params){
                                             let toolTiphtml = `
                                                                 ${params.data.name}-龙文教育
                                                                 <br/>
                                                                  ● 电话：${params.data.msg.phone}
                                                               `;

                                             return toolTiphtml;
                                        }
                                    }
                                },

                            ]
                        };

                        this.myChart.setOption(option);
                        this.myChart.on('click', (params)=> {
                            this.$emit("mapClick",params)
                        });

       }
    },
}
</script>

<style lang="less" scoped>
#map{
     width:100%;
     height:100%;
}
</style>