import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import style from '../../Style/Charts/ChartBox.module.css'
import BarChart from './BarChart'
import DoughtnutChart from './DoughnutChart'

const barData = {
  labels: ['The Penguins', 'Byte Knights', 'Cyber Eagles', 'Pixel Pioneers', 'Alpha Coders', 'Data Wizards', 'DevOps Dynamos', 'Cloud Titans', 'Script Kings', 'Logic Hunters'],
  datasets: [{
    label: 'Projects Done',
    data: [12, 5, 9, 10, 7, 8, 11, 6, 4, 3],
    backgroundColor: '#2563eb',
    borderRadius: 5
  }]
};

const doughnutData = {
  labels: ['Completed', 'Ongoing', 'Pending'],
  datasets: [{
    data: [75, 42, 18],
    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b'],
    hoverOffset: 4
  }]
};

const ChartBox = () =>{
  const role = 'manager'
    return(
        <>
        <div className={style.charts}>
          {
            role === 'user' &&
            <DoughtnutChart chartData={doughnutData} title={'Tasks doughtnut'} Axis={'y'}/>
          }
          {
            role === 'admin' &&
            <BarChart chartData={barData} title={'Total Projects Finished'} Axis={'y'}/>
          }

          {
            role==='manager' && 
            <BarChart chartData={barData} title={'Total Projects Finished'} Axis={'y'}/>
          }
        </div>
        </>
    )
}
export default ChartBox