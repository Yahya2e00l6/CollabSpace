import { useContext, useState } from "react"
import style  from "../../Style/form/SignInForm.module.css"
import { Link, useNavigate } from "react-router-dom"
import { post } from "../../api/client"
import { AuthContext } from "../../context/AuthContext"
function SignInForm(){
    const [ identifier , setidentifier ] = useState("")
    const [ password , setPassword ]  = useState("")
    const [ error , setError ]  = useState(false)
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await post('/auth/signin',
                {
                    identifier : identifier ,
                    password : password
                })
            if(response && response.identifier){
                localStorage.setItem('token',response.token || "no-token-yet")
                localStorage.setItem('user' , JSON.stringify(response))
                console.log("Success! Navigating...");
                login(response)
                navigate('/collabSpace')
            }
        }catch(error){
            console.error(error.message);
            setError(true)
        }
        
    }
    return(
        <>
            <form method="POST" onSubmit={HandleSubmit} className={style.form}>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>Sign In</legend>
                    <span className={error ? style.error : style.hidden}>Invalid username or password. Please try again.</span>
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