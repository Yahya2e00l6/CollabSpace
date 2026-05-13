import style from "../../../Style/StructuralUI/projects/ProjectDash.module.css"
import Insights from "../Insights"
import DoughtnutChart from "../../charts/DoughnutChart"
import MemberCardList from "../feeds/MemberCardList"
import TaskCardList from "../feeds/TaskCardList"
import { useState } from "react"

const ProjectDash = ({projectId}) =>{
    const [doughnut , setDoughnut] = useState({})
    const doughnutData = {
    labels: ['Completed', 'Ongoing', 'Pending'],
    datasets: [{
    data: [doughnut.completedTasks, doughnut.ongoingTasks, doughnut.pendingTasks],
    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b'],
    hoverOffset: 4
}]
};
    return(
        <>
            <div className={style.selectedSection}>
                <Insights section={'project'} id={projectId} setDoughnut={setDoughnut}/>
                <div className={style.Overview}>
                    <DoughtnutChart chartData={doughnutData} title={'Tasks doughtnut'} Axis={'y'}/>
                        <div className={style.projectListCards}>
                            <p className={style.name}>project's List</p>
                            <TaskCardList projectId={projectId} section={'project'}/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDash