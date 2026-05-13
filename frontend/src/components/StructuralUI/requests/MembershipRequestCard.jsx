import { patch } from "../../../api/client"
import femaleProfile from '../../../assets/femaleProfile.png'
import maleProfile from '../../../assets/maleProfile.png'
import style from "../../../Style/StructuralUI/requests/MembershipRequestCard.module.css"

const MembershipRequestCard = ({Gender ,fullName, cin ,Email , Phone , Status ,Age , createdAt , updatedAt,requestId , onStatusUpdate}) => {
    const statusClass = Status.toLowerCase() === "accepted"
        ? style.statusAccepted
        : Status.toLowerCase() === "rejected"
            ? style.statusRejected
            : style.statusPending
        
        const handleAccept = async() =>{

        }
        const handleReject = async() =>{
            try{
                await await patch(`/auth/rejectedRequest/${requestId}`)
                onStatusUpdate()
            }catch(e){
                console.error(e)
            }
        }
    return(
        <>
            <tr className={style.MembershipCard}>
                <td className={style.profiles}>
                    {Gender == 'f' && <img src={femaleProfile} alt="" className={style.profile}/>}
                    {Gender == 'm' && <img src={maleProfile} alt="" className={style.profile}/>}
                </td>
                <td className={style.Name}>
                    <p>{fullName}</p>
                </td>
                <td className={style.Name}>
                    {Gender == 'f' && <p>Female</p>}
                    {Gender == 'm' && <p>Male</p>}
                </td>
                <td className={style.Age}>
                    <p>{cin}</p>
                </td>
                <td className={style.Age}>
                    <p>{Age}</p>
                </td>
                <td className={style.Email}>
                    {Email}
                </td>
                <td className={style.Phone}>
                    <p>{Phone}</p>
                </td>
                <td className={style.requestDate}>
                    <p>{createdAt}</p>
                </td>
                <td className={style.Status}>
                    <p className={`${style.statusPill} ${statusClass}`}>{Status}</p>
                </td>
                {Status === 'pending' ?      
                    <td className={style.buttons}>
                        <button type="button" className={style.Reject} onClick={handleReject}>Reject</button>
                        <button type="button" className={style.Accept} onClick={handleAccept}>Accept</button>
                    </td>
                    :
                    <td className={style.requestDate}>
                        <p>{updatedAt}</p>
                    </td>
                }
            </tr>
        </>
    )
}

export default MembershipRequestCard