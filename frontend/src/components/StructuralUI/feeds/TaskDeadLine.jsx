import style from "../../../Style/StructuralUI/feeds/TaskDeadLine.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
const TaskDeadLine = ({TaskName,ProjectName,remainingDays,DeadLine}) => {
    const urgencyClass = remainingDays <= 2 ? style.red : remainingDays <= 7 ? style.yellow : style.green
    return(
        <>
            <div className={`${style.ProjectItem} ${urgencyClass}`}>
                <div className={style.icon}><FontAwesomeIcon icon={faListCheck} /></div>
                <div className={style.ProjectData}>
                    <p className={style.Name}>{TaskName}</p>
                    <p className={style.Team}>{ProjectName}</p>
                    <p className={style.Team}>{DeadLine}</p>
                </div>
                {
                    <p className={style.status}>DeadLine in : {remainingDays} days</p>
                }
            </div>
        </>
    )
}

export default TaskDeadLine