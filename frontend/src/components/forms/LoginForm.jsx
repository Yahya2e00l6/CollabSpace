import { useState } from "react"
import style  from "../../Style/LoginForm.module.css"
function LoginForm(){
    const [ identifier , setidentifier ] = useState("")
    const [ Password , setPassword ]  = useState("")
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        
    }
    return(
        <>
            <form method="POST" onSubmit={HandleSubmit}>
                <button type="button" className={style.close}>X</button>
                <div className={style.formGroup}>
                    <label htmlFor="identifier" className={style.label}>identifier</label>
                    <input 
                    type="text"
                    id="identifier"
                    name="identifier" 
                    className={style.input}
                    required
                    onChange={(e)=>setidentifier(e.target.value)}
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="Password" className={style.label}>Password</label>
                    <input 
                        type="password"
                        id="Password"
                        className={style.input}
                        name="Password"
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                </div>
            </form>
        </>
    )
}

export default LoginForm