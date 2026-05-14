import { useContext, useEffect, useState } from "react"
import style from "../../../Style/StructuralUI/social/UserList.module.css"
import UserCard from "./UserCard";
import ConfirmationBox from "../ConfirmationBox";
import { get } from "../../../api/client";
import AddTeamMate from '../../forms/AddTeamMate'
import { AuthContext } from "../../../context/AuthContext";

const UserList = ({section ,teamId , setUserId}) => {
    const [ searchTerm , setSearchTerm ] = useState("")
    const [ usersData , setUsersData ] = useState([])
    const [isDeleteUserOpen, setIsDeleteUserOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const {user}  = useContext(AuthContext)
    const deleteToggle = () => setIsDeleteUserOpen(!isDeleteUserOpen)

    const openDelete = (user) => {
        setSelectedUser(user)
        setIsDeleteUserOpen(true)
    }

    const filtredData = usersData.filter(
        (user) => user.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const updateUserRoleInState = (id, newRole) => {
        setUsersData((prevList) => 
            prevList.map((user) => 
                user.id === id ? { ...user, role: newRole } : user
            )
        );
    };
    const removeUserFromState = (id) => {
        setUsersData((prevList) => prevList.filter((team) => team.id !== id));
    };
    useEffect(() => {
        const fetchData = async () => {
            if(section === 'team' && user.teamId){
                try{
                    const response = await get(`/teams/teamMembers/${teamId}`)
                    setUsersData(response);
                }catch(e){
                    console.log(e.message)
                }
            }else if(section === 'social'){
                try{
                    const response = await get('/auth/userData')
                        setUsersData(response);
                        setUserId(response[0].id)
                }catch(e){
                    console.log(e.message)
                }
            }
        }
        fetchData()
    },[teamId , section , setUserId , user.teamId])
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
                                onUpdateRole={updateUserRoleInState}
                            />
                        ))
                    )
                    :
                    <p className={style.noResults}>No User found matching "{searchTerm}"</p>
                }
                </div>
            }
            { section === 'social' &&
                <div className={style.list}>
                {
                    filtredData.length > 0 ? 
                    (
                        filtredData.map((d) => (
                            <div key={d.id}  onClick={() => setUserId(d.id)}>
                                <UserCard
                                    id={d.id}
                                    fullName={d.fullName}
                                    section={'social'}
                                    Age = {d.age}
                                    gender = {d.gender}
                                    Role = {d.role}
                                    Team = {d.teamName}
                                    onDelete={() => openDelete(d)}
                                    onUpdateRole={updateUserRoleInState}
                                    />
                            </div>
                        ))
                    )
                    :
                    <p className={style.noResults}>No User found matching "{searchTerm}"</p>
                }
                </div>
            }
            {isDeleteUserOpen && (
                <div className={style.modal} onClick={deleteToggle}>
                    <ConfirmationBox
                        type='social'
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