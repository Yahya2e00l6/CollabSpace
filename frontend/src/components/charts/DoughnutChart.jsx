import {
            Chart as ChartJS ,
            CategoryScale,
            LinearScale,
            BarElement,
            Tooltip,
            Legend,
            Title
        } from "chart.js/auto"
import style from '../../Style/Charts/DoughnutChart.module.css'
import {Doughnut} from "react-chartjs-2"
function DoughtnutChart({chartData , title}){
    return(
        <>
        <div className={style.chartContainer}>
            <Doughnut 
            data={chartData}
            options={{
                responsive : true,
                maintainAspectRatio: false,
                plugins : {
                    legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                        usePointStyle: true,
                        pointStyle: "circle"
                        }
                    },
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
        
        </>
    )
}

export default DoughtnutChart