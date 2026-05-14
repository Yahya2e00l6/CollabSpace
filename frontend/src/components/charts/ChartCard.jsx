import style from '../../Style/Charts/ChartCard.module.css'
import BarChart from './BarChart'
import DoughtnutChart from './DoughnutChart'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { get } from '../../api/client';

const ChartCard = () =>{
    const { user } = useContext(AuthContext)
    const [ data , setData ] = useState([])
    const chartColors = [
        '#3b82f6', 
        '#10b981', 
        '#f59e0b', 
        '#f43f5e', 
        '#6366f1', 
        '#8b5cf6', 
        '#14b8a6', 
        '#d946ef', 
        '#f97316', 
        '#64748b'  
    ];
    useEffect(() => {
    const fetchdata = async () =>{
        if(user.role === 'manager'){
        try{
            const {teamId }= await get(`/auth/userTeam/${user.id}`)
            if(teamId){
                const response = await get(`/teams/teamMembersTasks/${teamId}`)
                if(response){
                    setData(response)
                }
            }
        }catch(e){
            console.error(e.message || 'somthing happend')
        }
        }else if(user.role === 'admin' ){
        try{
            const response = await get('/teams/teamProjects');
            if(response){
                setData(response)
            }
        }catch(e){
            console.error(e.message || 'somthing happend')
        }
        }else{
            try{
                const response = await get(`/tasks/tasksInsights/${user.id}`)
                if(response){
                    setData(response)
                }
            }catch(e){
                console.error(e.message || "Failed to load stats");
            }
        }
    }
    fetchdata()
},[user.id , user.role] )
const doughnutData = {
labels: ['Completed', 'Ongoing', 'Pending'],
datasets: [{
    data: [data.completed,data.ongoing,data.pending],
    backgroundColor: ['#10b981', '#3b82f6', '#f43f5e'],
    hoverOffset: 4
}]
};
const getChartData = () => {
        if (user.role === 'admin') {
            return {
                labels: data.map(item => item.name || 'Unknown Team'),
                datasets: [{
                    label: 'Completed Projects',
                    data: data.map(item => Number(item.projectCount)),
                    backgroundColor: chartColors,
                    borderRadius: 5
                }]
            };
        }
        if (user.role === 'manager') {
            return {
                labels: data.map(item => item.fullName || 'Unknown Member'),
                datasets: [{
                    label: 'Completed Tasks',
                    data: data.map(item => Number(item.taskCount)),
                    backgroundColor: chartColors,
                    borderRadius: 5
                }]
            };
        }
        return { labels: [], datasets: [] };
    };

    const formattedData = getChartData();
    return(
        <>
        <div className={style.charts}>
            {
            user.role === 'member' &&
            <DoughtnutChart chartData={doughnutData} title={'Tasks Breakdown'} Axis={'y'}/>
            }
            {
            user.role === 'admin' &&
            <BarChart chartData={formattedData} title={'Completed Projects by Team'} Axis={'y'}/>
            }
            {
            user.role==='manager' && 
            <BarChart chartData={formattedData} title={'Completed Tasks by Member'} Axis={'y'}/>
            }
        </div>
        </>
    )
}
export default ChartCard