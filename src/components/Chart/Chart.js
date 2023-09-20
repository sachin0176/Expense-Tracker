import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart =(props) =>{

    const dataPointsValue=props.dataPoints.map((expense) => expense.value);
    const totalMaxValue=Math.max(...dataPointsValue);

    return <div className="chart">
        {
            props.dataPoints.map((dataPoint) => (
                <ChartBar 
                key={dataPoint.id}
                value={dataPoint.value}
                maxValue={totalMaxValue}
                label={dataPoint.label}
                />
            ))
        }

    </div>

}

export default Chart;