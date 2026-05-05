import style from "../../../Style/feeds/CompletedProjectList.module.css"
import CompletedProject from "./CompletedProject"
const CompletedProjectList = () => {
    const data = [
        {
            Name : "project 1",
            Team : "Team 1"
        },
        {
            Name : "project 2",
            Team : "Team 2"
        },
        {
            Name : "project 3",
            Team : "Team 3"
        },
        {
            Name : "project 4",
            Team : "Team 4"
        },
        {
            Name : "project 5",
            Team : "Team 5"
        },
    ]
    return(
        <>
            <div className={style.completedList}>
                {
                    data.map((d)=>(
                        <CompletedProject Name={d.Name} Team={d.Team} Time={'7h'}/>
                    ))
                }
            </div>
        </>
    )
}
export default CompletedProjectList