import style from "../../../Style/StructuralUI/requests/AdminRequest.module.css"
// import { useState } from "react"
import MembershipRequestCardList from "./MembershipRequestCardList"
import TeamRequestCardList from "./TeamRequestCardList"
const AdminRequest = () => {
    // const [ selectedList , setSelectedList ] = useState("Membership")
    return(
        <>
            <div className={style.feedList}>
                {/* <div className={style.BtnsBox}>
                    <button type="button" onClick={()=>setSelectedList("Membership")} 
                    className={`${style.button} ${selectedList === "Membership" ? style.active : ""}`}>
                        Membership Request
                    </button>
                    <button type="button" onClick={()=>setSelectedList("Teams")}
                        className={`${style.button} ${selectedList === "Teams" ? style.active : ""}`}>
                        Teams Request
                    </button>
                </div>
                {selectedList === 'Membership' && <MembershipRequestCardList/>}
                {selectedList === 'Teams' && <TeamRequestCardList/>} */}
                <MembershipRequestCardList/>
            </div>
        </>
    )
}

export default AdminRequest