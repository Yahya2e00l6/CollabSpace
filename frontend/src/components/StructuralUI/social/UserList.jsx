import { useEffect, useState } from "react"
import style from "../../../Style/StructuralUI/social/UserList.module.css"
import UserCard from "./UserCard";
import ConfirmationBox from "../ConfirmationBox";
import { get } from "../../../api/client";

const UserList = ({section ,teamId}) => {
    const [ searchTerm , setSearchTerm ] = useState("")
    const [ usersData , setUsersData ] = useState([])
    const [isDeleteUserOpen, setIsDeleteUserOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const deleteToggle = () => setIsDeleteUserOpen(!isDeleteUserOpen)
    const openDelete = (user) => {
        setSelectedUser(user)
        setIsDeleteUserOpen(true)
    }
    const filtredData = usersData.filter(
        (user) => user.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const removeUserFromState = (id) => {
        setUsersData((prevList) => prevList.filter((team) => team.id !== id));
    };
    useEffect(() => {
        const fetchData = async () => {
            if(section === 'team' ){
                try{
                    const response = await get(`/teams/teamMembers/${teamId}`)
                    setUsersData(response);
                    console.log(response)
                }catch(e){
                    console.log(e.message)
                }
            }
        }
        fetchData()
    },[teamId , section])
    return(
        <>
        <div className={style.Container}>
            <div className={style.inputContainer}>
                <input 
                    type="text"
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder="Search User..."
                    value={searchTerm}
                    className={style.input}
                />
            </div>
            { section === 'team' &&
                <div className={style.list}>
                {
                    filtredData.length > 0 ? 
                    (
                        filtredData.map((d) => (
                            <UserCard 
                                key={d.id}
                                fullName={d.fullName}
                                section={'team'}
                                onDelete={() => openDelete(d)}
                            />
                        ))
                    )
                    :
                    <p className={style.noResults}>No User found matching "{searchTerm}"</p>
                }
                </div>
            }
            {console.log(selectedUser)}
            {isDeleteUserOpen && (
                <div className={style.modal} onClick={deleteToggle}>
                    <ConfirmationBox
                        type='TeamMate'
                        Name={selectedUser?.fullName}
                        onClose={deleteToggle}
                        teamId={teamId}
                        userId={selectedUser?.id}
                        onSuccess={() => removeUserFromState(selectedUser.id)}
                    />
                </div>
            )}
        </div>
        </>
    )
}

export default UserList