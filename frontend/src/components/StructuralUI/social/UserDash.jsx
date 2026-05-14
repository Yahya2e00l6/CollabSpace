import style from "../../../Style/StructuralUI/social/UserDash.module.css"
import Insights from "../Insights"
import DoughtnutChart from "../../charts/DoughnutChart"
import ProjectCardList from "../feeds/ProjectCardList";
import { useState } from "react";
import TaskCardList from "../feeds/TaskCardList";

const UserDash = ({userId}) =>{
    const [doughnut , setDoughnut] = useState({})
    const doughnutData = {
    labels: ['Completed', 'Ongoing', 'Pending'],
    datasets: [{
    data: [doughnut.completed, doughnut.ongoing, doughnut.pending],
    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b'],
    hoverOffset: 4
}]
};
    return(
        <>
            <div className={style.selectedSection}>
                <Insights section={'social'} id={userId} setDoughnut={setDoughnut}/>
                <div className={style.Overview}>
                    <DoughtnutChart chartData={doughnutData} title={'Tasks Breakdown'} Axis={'y'}/>
                        <div className={style.projectListCards}>
                            <p className={style.name}>TASKS STATUS</p>
                            <TaskCardList userId={userId} section={'user'}/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default UserDash