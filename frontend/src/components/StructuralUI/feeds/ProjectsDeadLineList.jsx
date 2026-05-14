import { useContext, useEffect, useState } from "react"
import style from "../../../Style/StructuralUI/feeds/ProjectDeadlineList.module.css"
import ProjectDeadLine from "./ProjectDeadLine"
import { AuthContext } from "../../../context/AuthContext"
import { get } from "../../../api/client"
const ProjectDeadLineList = ({id}) => {
    const {user} =useContext(AuthContext)
    const [ projectDeadLine , setProjectDeadLine ] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try{
                if(!id){
                    const {teamId} = await get(`/auth/userTeam/${user.id}`)
                    if(teamId){
                        const response = await get(`/projects/projectDeadlineInfo/${teamId}`)
                        if(response){
                            setProjectDeadLine(response);
                        }
                    }
                }else{
                    const response = await get(`/projects/projectDeadlineInfo/${id}`)
                    if(response){
                    setProjectDeadLine(response);
                    }
                }
            }catch(e){
                console.error(e.message);
            }
        }
        fetchdata()
    },[user.id , id])
    return(
        <>
        <div className={style.List}>
            {
                projectDeadLine.map((data) => (
                        <ProjectDeadLine
                            key={data.projectid}
                            Name={data.projectName} 
                            DeadLine={data.deadLine.split('T')[0]}
                            totalTasks={data.totalTasks}
                            completedTasks={data.completedTasks}
                            remainingDays={data.remaining}
                            />
                ))
            }
        </div>
        </>
    )
}

export default ProjectDeadLineList