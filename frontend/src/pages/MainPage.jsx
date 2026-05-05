import ChartBox from "../components/charts/ChartBox"
import MainLayout from "../components/layouts/MainLayout"
import Feeds from "../components/StructuralUI/feeds/Feeds"
import HeaderDash from "../components/StructuralUI/HeaderDash"
import Insights from "../components/StructuralUI/Insights"
import style from "../Style/MainPage.module.css"
const MainPage = () =>{
    return(
        <>
        <div className={style.MainPage}>
            <MainLayout/>
            <div className={style.selectedSection}>
                <HeaderDash/>
                <Insights/>
                <div className={style.Overview} >
                    <ChartBox/>
                    <Feeds/>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainPage