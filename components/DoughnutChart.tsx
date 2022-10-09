import React, { FC, PureComponent } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement,Tooltip, } from 'chart.js'
Chart.register(ArcElement,Tooltip, );

export interface LRBProps {
  lbr: {
    lang: string,
    count: number
  }[]
}

const DoughnutChart:FC<LRBProps> = ({lbr}) => {
  const colors = [
    "#628E90",
    "#FF7C7C",
    "#905E96",
    "#DFF6FF",
    "#7895B2",
    "#D8D8D8",
    "#9FC9F3",
    "#B9FFF8",
    "#96E5D1",
    "#7FB77E",
    "#E9DAC1",
    "#8FE3CF",
    "#400D51",
    "#FF9551",
    "#3AB0FF",
    "#7F8487",
  ]

  const data = {
    labels: lbr.map( lbr => lbr.lang),
    datasets: [{
      data: lbr.map( lbr => lbr.count),
      backgroundColor: colors.slice(0, lbr.length)
    }]
  }

  return (
    <div>
      <Doughnut data={data}/>
    </div>
  )
}

export default DoughnutChart