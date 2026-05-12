import StatusForm from "../../components/forms/StatusForm";
import style from "../../Style/auth/RequestStatus.module.css"
import RequestStatusBox from "../../components/StructuralUI/RequestStatusBox";
import { useState } from "react";
const RequestStatus = ()=>{
    const [ status , setStatus ] = useState("none")
    const [ firstName , setFirstName ] = useState("")
    const [ lastName , setLastName ] = useState("")
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
                        <StatusForm 
                            setStatus={setStatus} 
                            setFirstName={setFirstName}
                            setLastName={setLastName}
                            />
                    </div>
                </div>
            </div>
            <div className={style.statusBox}>
                <div className={style.requestStatus}>
                    <RequestStatusBox 
                        status={status}
                        firstName={firstName}
                        lastName={lastName}
                        />
                </div>
            </div>
        </div>
        </>
    )
}
export default RequestStatus;