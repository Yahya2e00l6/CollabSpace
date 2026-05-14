import style from '../../Style/StructuralUI/UpdateStatusBox.module.css'
import { patch } from '../../api/client'
const UpdateStatusBox = ({status , onClose , projectId , onStatusUpdate}) => {
    const getStatusClass = (value) => {
        const normalized = (value || "").toLowerCase()
        if (normalized === "completed") return style.statusCompleted
        if (normalized === "pending") return style.statusPending
        if (normalized === "ongoing") return style.statusOngoing
        return ""
    }

    const handleUpdate = async (newStatus) => {
        try {
            const response = await patch(`/projects/updateStatus/${projectId}`, { status: newStatus });
            if (response) {
                onStatusUpdate(projectId, newStatus);
                onClose();
            }
        } catch (e) {
            console.error(e.message);
        }
    }
    return(
        <>
            <div className={style.container} onClick={e => {e.stopPropagation()}}>
                <button type="button" className={style.close} onClick={onClose}>&times;</button>
                <div className={style.box}>
                    {status === 'completed' ? 
                    <div className={style.buttons}>
                        <button type='button' className={`${style.actionButton} ${getStatusClass("ongoing")}`} onClick={() => handleUpdate('ongoing')}>ongoing</button>
                        <button type='button' className={`${style.actionButton} ${getStatusClass("pending")}`} onClick={() => handleUpdate('pending')}>pending</button>
                    </div>
                    : status === 'pending' ?
                    <div className={style.buttons}>
                        <button type='button' className={`${style.actionButton} ${getStatusClass("completed")}`} onClick={() => handleUpdate('completed')}>completed</button>
                        <button type='button' className={`${style.actionButton} ${getStatusClass("ongoing")}`} onClick={() => handleUpdate('ongoing')}>ongoing</button>
                    </div>
                    : status === 'ongoing' ?
                    <div className={style.buttons}>
                        <button type='button' className={`${style.actionButton} ${getStatusClass("completed")}`} onClick={() => handleUpdate('completed')}>completed</button>
                        <button type='button' className={`${style.actionButton} ${getStatusClass("pending")}`} onClick={() => handleUpdate('pending')}>pending</button>
                    </div>
                    : ''
                }
                </div>
            </div>
        </>
    )
}
export default UpdateStatusBox