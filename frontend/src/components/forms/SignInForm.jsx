import { useState } from "react"
import style  from "../../Style/form/SignInForm.module.css"
import { Link } from "react-router-dom"
function SignInForm(){
    const [ identifier , setidentifier ] = useState("")
    const [ Password , setPassword ]  = useState("")
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        
    }
    return(
        <>
            <form method="POST" onSubmit={HandleSubmit} className={style.form}>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>Sign In</legend>
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
                    <button type="submit" className={style.submit}>submit</button>
                    <div className={style.footer}>
                        <p>you dont have an account?</p>
                        <Link to="/Register" className={style.link}>send a request</Link>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default SignInForm