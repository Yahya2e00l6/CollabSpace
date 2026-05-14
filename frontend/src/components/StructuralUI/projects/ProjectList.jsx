import { useContext, useEffect, useState } from "react"
import style from "../../../Style/StructuralUI/projects/ProjectList.module.css"
import ProjectCard from "./ProjectCard";
import { AuthContext } from "../../../context/AuthContext";
import { get } from "../../../api/client";
import ConfirmationBox from "../ConfirmationBox"
import AddProjectMember from "../../forms/AddProjectMember";
import AddTask from "../../forms/AddTask"
import UpdateStatusBox from "../UpdateStatusBox";

const ProjectList = ({Project ,setProjectId ,Task}) => {
    const [ searchTerm , setSearchTerm ] = useState("")
    const [ projectsData , setProjectsData] = useState([])
    const {user} = useContext(AuthContext)
    const [isDeleteProjectOpen, setIsDeleteProjectOpen] = useState(false)
    const [isAddProjectMemberOpen, setIsAddProjectMemberOpen] = useState(false)
    const [isTAddTaskOpen, setIsTAddTaskOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [selectedProjectTask, setSelectedProjectTask] = useState(null)
    const [isUpdateStatusOpen , setIsUpdateStatusOpen ] = useState(false)
    const UpadteStatusToggel = () => setIsUpdateStatusOpen(!isUpdateStatusOpen);
    const deleteToggle = () => setIsDeleteProjectOpen(!isDeleteProjectOpen)
    const addProjectMemberToggel = () => setIsAddProjectMemberOpen(!isAddProjectMemberOpen);
    const addTaskToggel = () => setIsTAddTaskOpen(!isTAddTaskOpen);
    const openUpdateStatusBox = (project) => {
        setSelectedProject(project),
        setIsUpdateStatusOpen(true)
    }
    const openDelete = (user) => {
        setSelectedProject(user)
        setIsDeleteProjectOpen(true)
    }
    const openAdd = (team) => {
        setSelectedProject(team)
        setIsAddProjectMemberOpen(true)
    }
    const openAddTask = (project) => {
        setSelectedProjectTask(project)
        setIsTAddTaskOpen(true)
    }
    const updateProjectStatusInState = (projectId, newStatus) => {
        setProjectsData((prevProjects) => 
            prevProjects.map((project) => 
                project.id === projectId ? { ...project, status: newStatus } : project
            )
        );
    };
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                if(user.role === 'admin'){
                    const response = await get('/projects/projects')
                    setProjectsData(response)
                    setProjectId(response[0].id|| [])
                    console.log(response)
                }else if (user.role === 'manager' && user.teamId){
                    const response = await get(`/teams/userTeamProjects/${user.teamId}`)
                    setProjectsData(response)
                    setProjectId(response[0].id || [])
                } else if(user.role === 'member' && user.teamId) {
                    const response = await get(`/auth/userProjects/${user.teamId}/${user.id}`)
                    setProjectsData(response)
                    setProjectId(response[0].id || [])
                    console.log(response)
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
                                projectId={d.projectId}
                                Project={Project}
                                Task={Task}
                                status={d.status}
                                onDelete={(e) => { e.stopPropagation(); openDelete(d); }}
                                onAdd={(e) => { e.stopPropagation(); openAdd(d); }}
                                openAddTask={(e) => { e.stopPropagation(); openAddTask(d); }}
                                onUpdate={(e) => { e.stopPropagation(); openUpdateStatusBox(d); }}
                                onStatusUpdate={updateProjectStatusInState}
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
            {isTAddTaskOpen && (
                <div className={style.modal} onClick={addTaskToggel}>
                    <AddTask
                        onClose={addTaskToggel}
                        projectId={selectedProjectTask.id}
                        projectName={selectedProjectTask.projectName}
                    />
                </div>
            )}

            {isUpdateStatusOpen && (
                <div className={style.modal} onClick={UpadteStatusToggel}>
                    <UpdateStatusBox 
                        onClose={UpadteStatusToggel}
                        projectId={selectedProject.id}
                        status={selectedProject.status}
                        onStatusUpdate={updateProjectStatusInState}
                    />
                </div>
            )}

        </div>
        </>
    )
}

export default ProjectList