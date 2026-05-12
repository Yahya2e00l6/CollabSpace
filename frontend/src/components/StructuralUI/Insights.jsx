import DataBox from "./DataBox"
import style from '../../Style/StructuralUI/Insights.module.css'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { get } from "../../api/client"

const Insights = ({section ,id , setDoughnut}) =>{
    const { user } = useContext(AuthContext)
    const [ projectStats ,setProjectStats ] =useState({})
    const [ tasksStats ,setTasksStats ] =useState({})
    
    useEffect(()=>{
        const fetchState = async () =>{
            if(user.role === 'admin'){
                if(section === 'dashboard'){
                    try{
                        const response = await get('/projects/projectsInsights')
                        if(response){
                            setProjectStats(response)
                        }
                    }catch(e){
                        console.error(e.message || "Failed to load stats");
                    }
                }else if( section === 'teams' ){
                    try{
                        const response = await get(`/teams/projectsInsights/${id}`)
                        if(response){
                            setProjectStats(response)
                            setDoughnut(response)
                        }
                    }catch(e){
                        console.error(e.message || "Failed to load stats");
                    }
                }else if( section === 'social'){
                    console.log('')
                }else if(section === 'projects'){
                    console.log('')
                }
            }else{
                try{
                    if( section === 'dashboard'){
                        const response = await get(`/tasks/tasksInsights/${user.id}`)
                        if(response){
                            setTasksStats(response)
                        }
                    }else if( section === 'teams'){
                    try{
                        const response = await get(`/teams/projectsInsights/${id}`)
                        console.log(response)
                        if(response){
                            setProjectStats(response)
                            setDoughnut(response)
                        }
                    }catch(e){
                        console.error(e.message || "Failed to load stats");
                    }
                    }
                }catch(e){
                    console.error(e.message || "Failed to load stats");
                }
                
            }
        }
        fetchState()
    },[user.id , user.role ,section ,id ,setDoughnut])

    return(
        <>
        {
            user.role==='admin'?
            <div className={style.Insights}>
                {Object.entries(projectStats).map(([key,value])=>(
                    <DataBox key={key} name={key} value={value}/>
                ))}
            </div>
            :
            <div className={style.Insights}>
                {Object.keys(projectStats).length > 0
                    ? Object.entries(projectStats).map(([key, value]) => (
                        <DataBox key={key} name={key} value={value} />
                    ))
                    : Object.entries(tasksStats).map(([key, value]) => (
                        <DataBox key={key} name={key} value={value} />
                    ))
                }
            </div>
        }
        </>
    )
}

export default Insights