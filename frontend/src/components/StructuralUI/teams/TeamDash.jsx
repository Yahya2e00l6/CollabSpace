import style from "../../../Style/StructuralUI/teams/TeamDash.module.css"
import Insights from "../Insights"
import DoughtnutChart from "../../charts/DoughnutChart"
import ProjectDeadLineList from "../feeds/ProjectsDeadLineList"
import { useState } from "react"

const TeamDash = ({teamId}) =>{
    const [doughnut , setDoughnut] = useState({})
    const doughnutData = {
    labels: ['Completed', 'Ongoing', 'Pending'],
    datasets: [{
    data: [doughnut.completedProjects, doughnut.ongoingProjects, doughnut.pendingProjects],
    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b'],
    hoverOffset: 4
}]
};
    return(
        <>
            <div className={style.selectedSection}>
                <Insights section={'teams'} id={teamId} setDoughnut={setDoughnut}/>
                <div className={style.Overview}>
                    <DoughtnutChart chartData={doughnutData} title={'Tasks doughtnut'} Axis={'y'}/>
                        <div className={style.projectListCards}>
                            <p className={style.name}>Doughnut</p>
                            <ProjectDeadLineList id={teamId}/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default TeamDash