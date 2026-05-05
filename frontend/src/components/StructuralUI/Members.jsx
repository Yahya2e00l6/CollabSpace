import { useState } from "react"
import style from "../../Style/StructuralUI/Members.module.css"
import profile from '../../assets/profile.png'

function Members(){
    const [ Role , setRole ] = useState("Member")
    const handleRole = async (e) =>{
        e.preventDefault()
        setRole(e.target.value);
        //API
    }
    return(
        <>
        <div className={style.MembersItem}>
            <img src={profile} alt="user image" className={style.profile} />
            <div className={style.MembersData}>
                <p className="Name">Yahya Elmaoui</p>
                <p className="Email">yahya@example.com</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <p className="CIN">BW12345</p>
                    <p className="Date">2000/02/22</p>
                </div>
            </div>
            <div className={style.select}>
                <select name="role" id="role" onChange={handleRole}>
                    <option value="Member" className={style.option}>Member</option>
                    <option value="Manager" className={style.option}>Manager</option>
                </select>
            </div>
        </div>
        </>
    )
}
export default Members