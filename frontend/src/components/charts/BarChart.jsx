import {
            Chart as ChartJS ,
            CategoryScale,
            LinearScale,
            BarElement,
            Tooltip,
            Legend,
            Title
        } from "chart.js/auto"
import {Bar} from "react-chartjs-2"
import style from '../../Style/Charts/BarChart.module.css'
function BarChart({chartData , title , Axis}){
    return(
        <>
            {
                Axis === 'x' &&
                <div className={style.chartContainer}>
                    <Bar 
                    data={chartData}
                    options={{
                        indexAxis : 'x',
                        responsive : true,
                        maintainAspectRatio: false,
                        datasets: {
                            bar: {
                                barThickness: 14,
                                maxBarThickness: 22,
                                categoryPercentage: 0.7,
                                barPercentage: 0.8
                            }
                        },
                        plugins : {
                            legend : true,
                            title : {
                                display:true,
                                text: title
                            }
                        },
                        animation : {
                            duration : 800,
                            easing : "easeInOutBounce"
                        }
                    }}
                    />
                </div>
            }
            {
                Axis === 'y' &&
                <div className={style.chartContainer}>
                    <Bar 
                    data={chartData}
                    options={{
                        indexAxis : 'y',
                        responsive : true,
                        maintainAspectRatio: false,
                        datasets: {
                            bar: {
                                barThickness: 14,
                                maxBarThickness: 22,
                                categoryPercentage: 0.7,
                                barPercentage: 0.8
                            }
                        },
                        plugins : {
                            legend : true,
                            title : {
                                display:true,
                                text: title
                            }
                        },
                        animation : {
                            duration : 800,
                            easing : "easeInOutBounce"
                        }
                    }}
                    />
                </div>
            }
        </>
    )
}

export default BarChart