import style from "../../Style/Main/Social.module.css"
import Header from "../../components/StructuralUI/Header"
import UserList from "../../components/StructuralUI/social/UserList";
import UserDash from '../../components/StructuralUI/social/UserDash'
import { useState } from "react";

const Social = () =>{
    const [ userId , setUserId ] = useState(null)
    return(
        <>
            <div className={style.selectedSection}>
                <Header selectedPage={'Social'}/>
                <div className={style.Overview}>
                    <UserList section={'social'} setUserId={setUserId}/>
                    {userId ? (
                        <UserDash userId={userId} />
                        ) : (
                            <div className={style.loadingPlaceholder}>Selecting a User...</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Social