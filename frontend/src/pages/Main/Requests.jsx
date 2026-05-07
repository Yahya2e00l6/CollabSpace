import style from "../../Style/Main/Requests.module.css"
import Header from "../../components/StructuralUI/Header"
import AdminRequest from "../../components/StructuralUI/requests/AdminRequest"
import MembershipRequestCardList from "../../components/StructuralUI/requests/MembershipRequestCardList"

const Requests = () =>{
    return(
        <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Requests'}/>
                <div >
                    <AdminRequest/>
                </div>
            </div>
        </>
    )
}

export default Requests