import React from 'react'
import { Bar } from 'react-chartjs-2'
import {chart as ChartJS} from 'chart.js/auto'

export default function Barchart({chartData}) {
  return <Bar data={chartData}/>
}
