
import ChartCard from "../../components/charts/ChartCard"
import Feeds from "../../components/StructuralUI/feeds/Feeds"
import Header from "../../components/StructuralUI/Header"
import Insights from "../../components/StructuralUI/Insights"
import style from "../../Style/Main/Dashboard.module.css"
const Dashboard = () =>{
    return(
        <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Dashboard'}/>
                <Insights section={'dashboard'}/>
                <div className={style.Overview} >
                    <ChartCard/>
                    <Feeds/>
                </div>
            </div>
        </>
    )
}

export default Dashboard