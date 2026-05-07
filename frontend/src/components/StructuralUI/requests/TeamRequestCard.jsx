import style from "../../../Style/StructuralUI/requests/TeamRequestCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
const TeamRequestCard = ({Gender , firstName , lastName , teamName , Email , Phone , Status ,Age , requestDate }) => {
    const statusClass = Status.toLowerCase() === "accepted"
        ? style.statusAccepted
        : Status.toLowerCase() === "rejected"
            ? style.statusRejected
            : style.statusPending
    return(
        <>
            <tr className={style.MembershipCard}>
                <td className={style.profiles}>
                    <div className={style.icon}><FontAwesomeIcon icon={faDiagramProject} /></div>
                </td>
                <td className={style.Name}>
                    <p>{firstName} {lastName}</p>
                </td>
                <td className={style.Name}>
                    {Gender == 'f' && <p>Female</p>}
                    {Gender == 'm' && <p>Male</p>}
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
                <td className={style.teamName}>
                    <p>{teamName}</p>
                </td>
                <td className={style.requestDate}>
                    <p>{requestDate}</p>
                </td>
                <td className={style.Status}>
                    <p className={`${style.statusPill} ${statusClass}`}>{Status}</p>
                </td>
                <td className={style.buttons}>
                    <button type="button" className={style.Reject}>Reject</button>
                    <button type="button" className={style.Accept}>Accept</button>
                </td>
            </tr>
        </>
    )
}

export default TeamRequestCard