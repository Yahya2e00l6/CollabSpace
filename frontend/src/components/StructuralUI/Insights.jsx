import DataBox from "./DataBox"
import style from '../../Style/StructuralUI/Insights.module.css'
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { get } from "../../api/client"

const Insights = ({section ,id , setDoughnut}) =>{
    const { user } = useContext(AuthContext)
    const [insightsData, setInsightsData] = useState({});
    
    useEffect(() => {
        const fetchInsights = async () => {
            let endpoint = "";
            if (section === 'dashboard' && user.role === 'admin') {
                endpoint = '/projects/projectsInsights';
            } else if (section === 'dashboard') {
                endpoint = `/tasks/tasksInsights/${user.id}`;
            } else if (section === 'teams') {
                endpoint = `/teams/projectsInsights/${id}`;
            } else if (section === 'social') {
                endpoint = `/tasks/tasksInsights/${id}`;
            }else if ( section === 'project' ) {
                endpoint = `/projects/tasksInsights/${id}`
            }
            if (!endpoint) return;
            try {
                const response = await get(endpoint);
                if (response) {
                    setInsightsData(response); 
                    setDoughnut?.(response); 
                }
            } catch (e) {
                console.error("Insights Error:", e.message);
            }
        };

        fetchInsights();
    }, [user.id, user.role, section, id, setDoughnut]);
    return(
        <>
        <div className={style.Insights}>
            {Object.entries(insightsData).length > 0 ? (
                Object.entries(insightsData).map(([key, value]) => (
                    <DataBox key={key} name={key} value={value} />
                ))
            ) : (
                <p className={style.loading}>No stats available...</p>
            )}
        </div>
        </>
    )
}

export default Insights