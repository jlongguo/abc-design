import { BarChart, GaugeChart, LineChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts'
import {
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import { graphic, init, use as registerEchartsModules, type EChartsType } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts'

// 按需注册企业后台高频图表与坐标系组件，避免全量 import * as echarts 造成包体积膨胀
registerEchartsModules([
  BarChart,
  LineChart,
  PieChart,
  GaugeChart,
  RadarChart,
  ScatterChart,
  TitleComponent,
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  MarkLineComponent,
  MarkPointComponent,
  CanvasRenderer,
])

export const echarts = {
  init,
  graphic,
}

export { graphic }
export type { EChartsOption, EChartsType }
