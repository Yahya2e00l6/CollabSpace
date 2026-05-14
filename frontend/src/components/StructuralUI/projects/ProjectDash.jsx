import style from "../../../Style/StructuralUI/projects/ProjectDash.module.css"
import Insights from "../Insights"
import DoughtnutChart from "../../charts/DoughnutChart"
import MemberCardList from "../feeds/MemberCardList"
import TaskCardList from "../feeds/TaskCardList"
import { useState } from "react"

const ProjectDash = ({projectId}) =>{
    const [doughnut , setDoughnut] = useState({})
    const totalTasks = (doughnut?.completedTasks || 0) + 
                        (doughnut?.ongoingTasks || 0) + 
                        (doughnut?.pendingTasks || 0);
    const doughnutData = {
    labels: ['Completed', 'Ongoing', 'Pending'],
    datasets: [{
    data: [
                doughnut?.completedTasks || 0, 
                doughnut?.ongoingTasks || 0, 
                doughnut?.pendingTasks || 0
            ],
    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b'],
    hoverOffset: 4
}]
};
    return(
        <>
            <div className={style.selectedSection}>
                <Insights section={'project'} id={projectId} setDoughnut={setDoughnut}/>
                <div className={style.Overview}>
                    {totalTasks > 0 ? (
                        <DoughtnutChart chartData={doughnutData} title={'Tasks Breakdown'} Axis={'y'}/>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '2px dashed #cbd5e1', color: '#64748b', fontWeight: '500' }}>
                            No tasks available for this project yet.
                        </div>
                    )}
                        <div className={style.projectListCards}>
                            <p className={style.name}>PROJECT TASKS</p>
                            <TaskCardList projectId={projectId} section={'project'}/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDash