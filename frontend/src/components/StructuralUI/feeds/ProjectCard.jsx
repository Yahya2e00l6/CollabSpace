import style from "../../../Style/StructuralUI/feeds/ProjectCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
const ProjectCard = ({ProjectName,CreateAt,ProjectStatus}) => {
    const statusClass = ProjectStatus?.toLowerCase();
    const statusStyle = statusClass === "completed"
        ? style.statusCompleted
        : statusClass === "ongoing"
            ? style.statusOngoing
            : statusClass === "pending"
                ? style.statusPending
                : "";
    return(
        <>
            <div className={style.ProjectItem}>
                <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                <div className={style.ProjectData}>
                    <p className={style.ProjectName}>{ProjectName}</p>
                    <p className={style.CreateAt}>{CreateAt}</p>
                        <p className={`${style.ProjectStatus} ${statusStyle}`}> {ProjectStatus}</p>
                    
                </div>
                {
                }
            </div>
        </>
    )
}

export default ProjectCard