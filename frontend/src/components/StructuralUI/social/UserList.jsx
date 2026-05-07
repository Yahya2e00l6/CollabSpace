import { useState } from "react"
import style from "../../../Style/StructuralUI/social/UserList.module.css"
import UserCard from "./UserCard";

const UserList = ({UsersData}) => {
    const [ searchTerm , setSearchTerm ] = useState("")
    const filtredData = UsersData.filter(
        (user) => user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
            <div className={style.list}>
            {
                filtredData.length > 0 ? 
                (
                    filtredData.map((d) => (
                        <UserCard 
                            key={d.id}
                            firstName={d.firstName}
                            lastName={d.lastName}
                            Role={d.Role}
                            Age={d.Age}
                            Team={d.Team}
                        />
                    ))
                )
                :
                <p className={style.noResults}>No User found matching "{searchTerm}"</p>
            }
            </div>
        </div>
        </>
    )
}

export default UserList