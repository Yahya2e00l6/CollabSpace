import { useContext, useEffect, useState } from "react"
import style from "../../../Style/StructuralUI/projects/ProjectList.module.css"
import ProjectCard from "./ProjectCard";
import { AuthContext } from "../../../context/AuthContext";
import { get } from "../../../api/client";
import ConfirmationBox from "../ConfirmationBox"
import AddProjectMember from "../../forms/AddProjectMember";

const ProjectList = ({Project ,setProjectId}) => {
    const [ searchTerm , setSearchTerm ] = useState("")
    const [ projectsData , setProjectsData] = useState([])
    const {user} = useContext(AuthContext)
    const [isDeleteProjectOpen, setIsDeleteProjectOpen] = useState(false)
    const [isAddProjectMemberOpen, setIsAddProjectMemberOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const deleteToggle = () => setIsDeleteProjectOpen(!isDeleteProjectOpen)
    const addProjectMemberToggel = () => setIsAddProjectMemberOpen(!isAddProjectMemberOpen);
    const openDelete = (user) => {
        setSelectedProject(user)
        setIsDeleteProjectOpen(true)
    }
    const openAdd = (team) => {
        setSelectedProject(team)
        setIsAddProjectMemberOpen(true)
    }
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                if(user.role === 'admin'){
                    const response = await get('/projects/projects')
                    setProjectsData(response)
                    setProjectId(response[0].id|| [])
                }else if (user.role === 'manager'){
                    const response = await get(`/teams/userTeamProjects/${user.teamId}`)
                    setProjectsData(response)
                    setProjectId(response[0].id || [])
                }else {
                    const response = await get(`/auth/userProjects/${user.teamId}/${user.id}`)
                    setProjectsData(response)
                    setProjectId(response[0].id || [])
                }
            }catch(e){
                console.error(e.message)
            }
        }
        fetchData()
    },[user.role ,user.teamId  ,setProjectId , user.id])
    const filtredData = projectsData.filter(
        (project) => project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const removeUserFromState = (id) => {
        setProjectsData((prevList) => prevList.filter((team) => team.id !== id));
    }; 
    return(
        <>
        <div className={style.Container}>
            <div className={style.inputContainer}>
                <input 
                    type="text"
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder="Search projects..."
                    value={searchTerm}
                    className={style.input}
                />
            </div>
            <div className={style.list}>
            {
                filtredData.length > 0 ? 
                (
                    filtredData.map((d) => (
                        <div key={`${d.id}${d.projectName}`} onClick={()=>setProjectId(d.id)}>
                            <ProjectCard 
                                ProjectName={d.projectName}  
                                ProjectTeam={d.teamName} 
                                Project={Project}
                                onDelete={(e) => { e.stopPropagation(); openDelete(d); }}
                                onAdd={(e) => { e.stopPropagation(); openAdd(d); }}
                                />
                        </div>
                    ))
                )
                :
                <p className={style.noResults}>No project found matching "{searchTerm}"</p>
            }
            </div>
            {isDeleteProjectOpen && (
                <div className={style.modal} onClick={deleteToggle}>
                    <ConfirmationBox
                        type='project'
                        Name={selectedProject?.projectName}
                        onClose={deleteToggle}
                        projectId={selectedProject?.id}
                        onSuccess={() => removeUserFromState(selectedProject.id)}
                    />
                </div>
            )}
            {isAddProjectMemberOpen && (
                <div className={style.modal} onClick={addProjectMemberToggel}>
                    <AddProjectMember
                        onClose={addProjectMemberToggel}
                        projectId={selectedProject.id}
                        projectName={selectedProject.projectName}
                        teamId={user.teamId}
                    />
                </div>
            )}

        </div>
        </>
    )
}

export default ProjectList