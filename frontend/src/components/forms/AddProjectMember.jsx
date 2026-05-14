import { useEffect, useState } from 'react'
import Select from 'react-select'
import style from '../../Style/form/AddProjectMember.module.css'
import { get, post } from '../../api/client'

const AddProjectMember = ({ onClose, projectId, projectName , teamId }) => {
    const [selectedMembers, setSelectedMembers] = useState([])
    const [availableMembers, setAvailableMembers] = useState([])

    const removeMemberFromState = (ids) => {
        setAvailableMembers((prevList) => 
        prevList.filter((member) => !ids.includes(member.userId))
    );
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get(`/projects/availableMembers/${projectId}/${teamId}`)
                setAvailableMembers(response)
                console.log(response)
            } catch (e) {
                console.error(e.message)
            }
        }
        fetchData()
    }, [projectId , teamId])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userIds = selectedMembers ? selectedMembers.map((member) => member.value || member.id) : []
        try {
            const response = await post(`/projects/assignMultiple/${projectId}`, { userIds })
            if (response) {
                onClose()
                removeMemberFromState(userIds)
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div className={style.container} onClick={(e) => { e.stopPropagation() }}>
                <button type="button" className={style.close} onClick={onClose}>&times;</button>
                <form method="POST" className={style.form} onSubmit={handleSubmit}>
                    <fieldset className={style.fieldset}>
                        <legend className={style.legend}>Add Project Members</legend>
                        <div className={style.formGroup}>
                            <label htmlFor="projectName" className={style.label}>Project Name</label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                value={projectName}
                                className={style.input}
                                disabled
                            />
                            <input
                                type="hidden"
                                name="projectId"
                                value={projectId}
                            />
                        </div>
                        <div className={style.formGroup}>
                            <label htmlFor="projectMembers" className={style.label}>Project Members</label>
                            <Select
                                options={Array.isArray(availableMembers) ? availableMembers.map((member) => ({
                                    value: member.userId,
                                    label: member.fullName
                                })) : []}
                                id="projectMembers"
                                name="projectMembers"
                                isMulti
                                onChange={(selectedOption) => setSelectedMembers(selectedOption)}
                                className={style.Select}
                                required
                                placeholder="Select Project Members..."
                            />
                        </div>
                        <button type="submit" className={style.submitBtn}>Add Project Members</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default AddProjectMember