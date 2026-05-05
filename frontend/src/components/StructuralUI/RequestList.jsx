import profile from '../../assets/profile.png'
import style from "../../Style/StructuralUI/RequestList.module.css"
function RequestList(){
    return(
        <>
            <div className={style.RequestItem}>
                <img src={profile} alt="user image" className={style.profile} />
                <div className={style.RequestData}>
                    <p className="Name">Yahya Elmaoui</p>
                    <p className="Email">yahya@example.com</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <p className="CIN">BW12345</p>
                        <p className="Date">2000/02/22</p>
                    </div>
                </div>
                <div className={style.btns}>
                    <button className={style.approve}>approve</button>
                    <button className={style.decline}>decline</button>
                </div>
            </div>
        </>
    )
}
export default RequestList