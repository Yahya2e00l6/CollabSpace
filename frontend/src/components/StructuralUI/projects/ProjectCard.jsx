import style from "../../../Style/StructuralUI/projects/ProjectCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
function ProjectCard({ProjectName}) {
    return (
        <div className={style.projectCard}>
            <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
            <div className={style.projeectData}>
                <p className={style.name}>{ProjectName}</p>
            </div>
        </div>
    )
}

export default ProjectCard