import style from '../../../Style/StructuralUI/feeds/CompletedProject.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
function CompletedProject({Name , Team , Time}){
    
    return(
        <>
            <div className={style.ProjectItem}>
                <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                <div className={style.ProjectData}>
                    <p className={style.Name}>{Name}</p>
                    <p className={style.Team}>{Team}</p>
                    <p className={style.Team}>{Time}</p>
                </div>
                <p className={style.status}>completed</p>
            </div>
        </>
    )
}
export default CompletedProject