import StatusForm from "../../components/forms/StatusForm";
import style from "../../Style/RequestStatus.module.css"
import RequestStatusBox from "../../components/Structural & UI/RequestStatusBox";
const RequestStatus = ()=>{
    return(
        <>
        <div className={style.Register}>
            <div className={style.sideBox}>
                <div className={style.logo}>CollabSpace</div>
                <div className={style.introduction}>
                    <h1 className={style.mainTitle}>Track Your <span className={style.accentText}>Request.</span></h1>
                    <p className={style.heroMeta}>
                        Check the real-time status of your workspace application.
                    </p>
                </div>
                <div className={style.formSection}>
                    <div className={style.formContainer}>
                        <StatusForm/>
                    </div>
                </div>
            </div>
            <div className={style.statusBox}>
                <div className={style.requestStatus}>
                    <RequestStatusBox/>
                </div>
            </div>
        </div>
        </>
    )
}
export default RequestStatus;