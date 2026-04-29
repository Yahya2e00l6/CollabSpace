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
function DoughtnutChart({chartData , title}){
    return(
        <>
        <div>
            <Bar 
            data={chartData}
            options={{
                responsive : true,
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
        
        </>
    )
}

export default DoughtnutChart