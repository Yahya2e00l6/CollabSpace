import {useEffect, useState } from "react"
import style from "../../../Style/StructuralUI/feeds/CompletedProjectList.module.css"
import CompletedProject from "./CompletedProject"
import { AuthContext, AuthProvider } from "../../../context/AuthContext"
import { get } from "../../../api/client"
const CompletedProjectList = () => {
    const [ completedList ,setCompletedList ] = useState([]) 
    const getRelativeTime = (diffInHours) => {
        if (diffInHours < 1) return "Just now";
        if (diffInHours < 24) return `${diffInHours}h ago`;
        return `${Math.floor(diffInHours / 24)}d ago`;
    };
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await get('/projects/completedProjectsInfo')
                if(response){
                    setCompletedList(response)
                }
            }catch(e){
                console.error(e.message)
            }
        }
        fetchData()
    },[])
    return(
        <>
            <div className={style.completedList}>
                {
                    completedList.map((data)=>(
                        <CompletedProject 
                            key={data.id} 
                            Name={data.projectName} 
                            Team={data.teamName} 
                            Time={getRelativeTime(data.diffInHours)}
                            />
                    ))
                }
            </div>
        </>
    )
}
export default CompletedProjectList