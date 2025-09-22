<template>
  <SkuSaleCollectChartStyle>
      <!-- 销售趋势图表 -->
      <template #sales-trend-chart>
        <!-- 销售趋势图表 - 使用 ECharts -->
        <div ref="salesTrendChartRef"
             style="width: 100%; height: 100%;"></div>
      </template>

    <template #popular-products-chart>
      <!-- 热门产品图表 - 使用 ECharts -->
      <div ref="popularProductsChartRef"
           style="width: 100%; height: 100%;"></div>
    </template>

<!--    <template #recent-activities>-->
<!--      <div class="activity-item" v-for="activity in recentActivities" :key="activity.id">-->
<!--        <div class="activity-icon" :style="{ backgroundColor: activity.color }">-->
<!--          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="white"/>-->
<!--          </svg>-->
<!--        </div>-->
<!--        <div class="activity-content">-->
<!--          <p class="activity-text">{{ activity.text }}</p>-->
<!--          <p class="activity-time">{{ activity.time }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
  </SkuSaleCollectChartStyle>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, nextTick,onUnmounted} from 'vue';
import dayjs from 'dayjs';
import CommonWeekMonthYear from '@/components/week-month-year/index.vue';
import SkuSaleCollectChartStyle from './sku-sale-collect-chart-style.vue';

// 定义变量
const datePickerSel = ref([]);
const datePickerFormat = ref([]);
const radioGroupSel = ref('week');
const userTaskStatus = ref([]);
const lineChartOption = ref({
  xAxisData: [
    "2024-05-13",
    "2024-05-14",
    "2024-05-15",
    "2024-05-16"
  ],
  seriesData: [5,10,12,15],
  yAxisName: '单位：元',
});
const collectType = ref(1); // 统计时间类型，1:按日统计，2:按月统计
const barChartOption = ref({
  xAxisData: ["北京平西府街道", "霍营街道"],
  seriesData: [866,523],
  yAxisName: '单位：元',
});

// ECharts实例引用
const salesTrendChartRef = ref(null);
const popularProductsChartRef = ref(null);
let salesTrendChart = null;
let popularProductsChart = null;
// 模拟最近活动数据
const recentActivities = ref([
  {
    id: 1,
    text: "用户张三购买了5寸穿越机 x1",
    time: "2分钟前",
    color: "#4285f4"
  },
  {
    id: 2,
    text: "用户李四购买了工业级无人机 x2",
    time: "15分钟前",
    color: "#ea4335"
  },
  {
    id: 3,
    text: "用户王五购买了超轻固定翼 x1",
    time: "1小时前",
    color: "#fbbc05"
  }
]);
// 初始化销售趋势图表
const initSalesTrendChart = () => {
  if (!salesTrendChartRef.value) return;

  salesTrendChart = echarts.init(salesTrendChartRef.value);

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '30',
      right: '5',
      top: '30',
      bottom: '60'
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
      axisLine: {
        lineStyle: {
          color: '#f0f0f0'
        }
      },
      axisLabel: {
        color: '#999'
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#999',
        formatter: (value) => {
          return value === 0 ? value : value / 1000 + 'k';
        }
      },
      splitLine: {
        lineStyle: {
          color: '#f0f0f0'
        }
      }
    },
    series: [{
      data: [10000, 15000, 10000, 17000, 7000, 20000, 8000, 14000, 20000],
      type: 'line',
      smooth: true,
      symbolSize: 8,
      lineStyle: {
        width: 3,
        color: '#1a73e8'
      },
      itemStyle: {
        color: '#1a73e8',
        borderWidth: 2,
        borderColor: '#fff'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#1a73e8'
          }, {
            offset: 1, color: '#4285f4'
          }]
        },
        opacity: 0.2
      }
    }]
  };

  salesTrendChart.setOption(option);
};

// 初始化热门产品图表
const initPopularProductsChart = () => {
  if (!popularProductsChartRef.value) return;

  popularProductsChart = echarts.init(popularProductsChartRef.value);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '30',
      right: '10',
      top: '30',
      bottom: '60'
    },
    xAxis: {
      type: 'category',
      data: ['5寸穿越机', '7寸穿越机', '10寸穿越机', '超轻固定翼', '工业级无人机', '配件套装'],
      axisLine: {
        lineStyle: {
          color: '#f0f0f0'
        }
      },
      axisLabel: {
        color: '#666',
        interval: 0, // 强制显示所有标签
        rotate: 30, // 旋转30度，避免标签重叠

      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#999'
      },
      splitLine: {
        lineStyle: {
          color: '#f0f0f0'
        }
      }
    },
    series: [{
      data: [180, 250, 220, 270, 200, 230],
      type: 'bar',
      barWidth: 20,
      itemStyle: {
        color: (params) => {
          const colors = ['#4285f4', '#1a73e8', '#0d47a1', '#1565c0', '#1976d2', '#1e88e5'];
          return colors[params.dataIndex];
        },
        borderRadius: 6
      },
      label: {
        show: true,
        position: 'top',
        color: '#333',
        fontWeight: 500
      }
    }]
  };

  popularProductsChart.setOption(option);
};

onMounted(()=>{
  handleRadioGroupSelChange(radioGroupSel.value)
  nextTick(() => {
    initSalesTrendChart();
    initPopularProductsChart();
  });
})

const handleRadioGroupSelChange = (radioGroup) => {
  radioGroupSel.value = radioGroup;
  const startFormat = dayjs()
      .startOf(radioGroupSel.value)
      .format('YYYY.MM.DD')
  const endFormat = dayjs()
      .endOf('day')
      .format('YYYY.MM.DD')
  datePickerFormat.value = [startFormat, endFormat]
};
// 窗口大小改变时重绘图表
  window.addEventListener('resize', () => {
    if (salesTrendChart) {
      salesTrendChart.resize();
    }
    if (popularProductsChart) {
      popularProductsChart.resize();
    }
  });
// 组件卸载时清理事件监听器
  onUnmounted(() => {
    window.removeEventListener('resize', () => {
      if (salesTrendChart) {
        salesTrendChart.resize();
      }
      if (popularProductsChart) {
        popularProductsChart.resize();
      }
    });
    if (salesTrendChart) {
      salesTrendChart.dispose();
    }
    if (popularProductsChart) {
      popularProductsChart.dispose();
    }
  });
</script>
