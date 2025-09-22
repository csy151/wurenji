<template>
  <div class="box sku-sale-collect">
    <div class="dashboard-charts">
      <div class="chart-container">
        <div class="chart-header">
          <h3>销售趋势</h3>
          <div class="chart-filters">
            <button class="filter-button active">月度</button>
            <button class="filter-button">季度</button>
            <button class="filter-button">年度</button>
          </div>
        </div>
        <div class="chart-placeholder">
          <slot name="sales-trend-chart"></slot>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3>热门产品</h3>
          <div class="chart-filters">
            <button class="filter-button active">销量</button>
            <button class="filter-button">收入</button>
          </div>
        </div>
        <div class="chart-placeholder">
          <slot name="popular-products-chart"></slot>
        </div>
      </div>
    </div>

<!--    <div class="dashboard-recent">-->
<!--&lt;!&ndash;      <div class="section-header">&ndash;&gt;-->
<!--&lt;!&ndash;        <h3>最近活动</h3>&ndash;&gt;-->
<!--&lt;!&ndash;        <a href="#" class="view-all-link">查看全部</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="recent-activities">&ndash;&gt;-->
<!--&lt;!&ndash;        <slot name="recent-activities"></slot>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<script setup>
// 该组件仅用于样式布局，不包含任何逻辑
</script>

<style lang="scss" scoped>
.sku-sale-collect {
  display: flex;
  flex-direction: column;
  // 设置和销售热榜相同的高度计算方式，确保两者高度一致
  //height: calc((100vh - 120px) * 0.6);
  min-height: 538px;
  margin-top: 20px;
  background: #FFFFFF;
  border-radius: 20px;
  flex-shrink: 0;

  .charts {
    flex: 1;
    display: flex;
  }
}

.dashboard-charts {
  display: flex;
  padding: 20px;
  gap: 20px;
  // 添加这行，让图表区域能够占据可用空间
  flex: 1;
  min-height: 0;
}

.chart-container {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  // 添加这行，让图表容器使用flex布局
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 16px;
  border-bottom: 1px solid #f0f0f0;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
}

.chart-filters {
  display: flex;
  gap: 8px;

  .filter-button {
    padding: 6px 12px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 16px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: #1a73e8;
      color: #1a73e8;
    }

    &.active {
      background: #1a73e8;
      border-color: #1a73e8;
      color: #fff;
    }
  }
}

.chart-placeholder {
  padding: 16px;
  flex: 1;
  min-height: 0;
}

.dashboard-recent {
  padding: 0 20px 20px;
  border-top: 1px solid #f0f0f0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }

  .view-all-link {
    color: #1a73e8;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
}

.recent-activities {
  .activity-item {
    display: flex;
    align-items: flex-start;
    padding: 12px 0;

    &:not(:last-child) {
      border-bottom: 1px solid #f0f0f0;
    }
  }

  .activity-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    flex-shrink: 0;
  }

  .activity-content {
    flex: 1;
  }

  .activity-text {
    margin: 0 0 4px;
    font-size: 14px;
    color: #333;
    line-height: 1.4;
  }

  .activity-time {
    margin: 0;
    font-size: 12px;
    color: #999;
  }
}
</style>
