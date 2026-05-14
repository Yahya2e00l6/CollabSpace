import { useEffect, useState } from 'react'
import style from '../../../Style/StructuralUI/feeds/TaskCardList.module.css'
import TaskCard from './TaskCard'
import { get } from '../../../api/client'
const TaskCardList = ({userId , projectId , section}) =>{
    const [ Data , setData ] =useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            let endpoint = "";
            if(section === 'user'){
                endpoint = `/auth/taskInfo/${userId}`
            }else if (section === 'project'){
                endpoint = `/projects/taskInfo/${projectId}`
            }
            try{
                const response = await get(endpoint)
                if (response) {
                    setData(Array.isArray(response) ? response : []);
                } else {
                    setData([]);
                }
            }catch(e){
                console.error(e.message)
            }
        }
        fetchData()
    },[userId , projectId , section])
return(
    <>
        <div className={style.List}>
            {
                Data.map((d) => (
                    <div key={`${d.taskId}${d.taskName}`}>
                        <TaskCard
                            taskName={d.taskName}
                            createdAt={d.createdAt ? d.createdAt.split('T')[0] : ''}
                            taskStatus={d.taskStatus}
                            projectName={d.project}
                        />
                    </div>
                ))
            }
        </div>
    </>
)
}

export default TaskCardList