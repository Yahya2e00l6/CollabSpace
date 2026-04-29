import {
            Chart as ChartJS ,
            CategoryScale,
            LinearScale,
            BarElement,
            Tooltip,
            Legend,
            Title
        } from "chart.js/auto"
import {Doughnut} from "react-chartjs-2"
function BarChart({chartData , title}){
    return(
        <>
        <div>
            <Doughnut 
            data={chartData}
            options={{
                responsive : true,
                plugins : {
                    legend : false,
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

export default BarChart