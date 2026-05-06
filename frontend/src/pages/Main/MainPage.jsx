import { useState } from "react"
import ChartBox from "../../components/charts/ChartBox"
import MainLayout from "../../components/layouts/MainLayout"
import Feeds from "../../components/StructuralUI/feeds/Feeds"
import HeaderDash from "../../components/StructuralUI/HeaderDash"
import Insights from "../../components/StructuralUI/Insights"
import style from "../../Style/Main/MainPage.module.css"
import Dashboard from "./Dashboard"
import Projects from "./Projects"
import Requests from "./Requests"
import Tasks from "./Tasks"
import Social from "./Social"
import Teams from "./Teams"

const MainPage = () =>{
    const [ selected , setSelected ] = useState("Dashboard")
    return(
        <>
        <div className={style.MainPage}>
            <MainLayout setSelected={setSelected}/>
            {selected === "Dashboard" && <Dashboard/>}
            {selected === "Projects" && <Projects/>}
            {selected === "Requests" && <Requests/>}
            {selected === "Tasks" && <Tasks/>}
            {selected === "Social" && <Social/>}
            {selected === "Teams" && <Teams/>}
        </div>
        </>
    )
}

export default MainPage