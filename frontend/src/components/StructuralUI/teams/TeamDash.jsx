import style from "../../../Style/StructuralUI/teams/TeamDash.module.css"
import Insights from "../Insights"
import DoughtnutChart from "../../charts/DoughnutChart"
import ProjectDeadLineList from "../feeds/ProjectsDeadLineList"

const TeamDash = () =>{
    const doughnutData = {
    labels: ['Completed', 'Ongoing', 'Pending'],
    datasets: [{
    data: [75, 42, 18],
    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b'],
    hoverOffset: 4
}]
};
    return(
        <>
            <div className={style.selectedSection}>
                <Insights/>
                <div className={style.Overview}>
                    <DoughtnutChart chartData={doughnutData} title={'Tasks doughtnut'} Axis={'y'}/>
                        <div className={style.projectListCards}>
                            <p className={style.name}>Doughnut</p>
                            <ProjectDeadLineList/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default TeamDash