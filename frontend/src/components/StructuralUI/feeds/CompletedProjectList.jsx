import style from "../../../Style/StructuralUI/feeds/CompletedProjectList.module.css"
import CompletedProject from "./CompletedProject"
const CompletedProjectList = () => {
    const data = [
        {
            Name : "project 1",
            id : 1,
            Team : "Team 1"
        },
        {
            Name : "project 2",
            id: 2,
            Team : "Team 2"
        },
        {
            Name : "project 3",
            id:3,
            Team : "Team 3"
        },
        {
            Name : "project 4",
            id:4,
            Team : "Team 4"
        },
        {
            Name : "project 5",
            id:5,
            Team : "Team 5"
        },
    ]
    return(
        <>
            <div className={style.completedList}>
                {
                    data.map((d)=>(
                        <CompletedProject key={d.id} Name={d.Name} Team={d.Team} Time={'7h'}/>
                    ))
                }
            </div>
        </>
    )
}
export default CompletedProjectList