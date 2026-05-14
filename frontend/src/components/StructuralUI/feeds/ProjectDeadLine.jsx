import style from '../../../Style/StructuralUI/feeds/ProjectsDeadLine.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
const ProjectDeadLine = ({Name,totalTasks,completedTasks,remainingDays,DeadLine}) =>{
    const urgencyClass = remainingDays <= 2 ? style.red : remainingDays <= 7 ? style.yellow : style.green
    return(
        <>
            <div className={`${style.ProjectItem} ${urgencyClass}`}>
                <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                <div className={style.ProjectData}>
                    <p className={style.Name}>{Name}</p>
                    <p className={style.Team}>{DeadLine}</p>
                    <p className={style.Team}>{completedTasks}/{totalTasks}</p>
                </div>
                {
                    <p className={style.status}>DEADLINE IN:{remainingDays} {remainingDays ===1 ? 'Day' : 'days'}</p>
                }
            </div>
        </>
    )
}

export default ProjectDeadLine