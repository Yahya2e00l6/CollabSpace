import style from "../../Style/form/StatusForm.module.css"
import { useState } from "react"

const StatusForm = ()=>{
    const [ FirstName , setFirstName ] = useState("")
    const [ LastName , setLastName ] = useState("")
    const [ CIN , setCIN ] = useState("")
    const [ Email , setEmail ] = useState("")
    const handleSubmit = ()=>{

    }
    return(
        <>
            <form method="POST" onSubmit={handleSubmit} className={style.form}>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>Register Form</legend>
                    <div className={style.formGroup}>
                        <label htmlFor="FirstName" className={style.label}>First Name</label>
                        <input 
                            type="text"
                            name="FirstName"
                            id="FirstName"
                            className={style.input}
                            required
                            autoComplete="given-name"
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="LastName" className={style.label}>Last Name</label>
                        <input 
                            type="text" 
                            name="LasttName" 
                            id="LastName"
                            className={style.input}
                            required
                            autoComplete="family-name"
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="CIN" className={style.label}>CIN</label>
                        <input 
                            type="text" 
                            name="CIN"
                            id="CIN"
                            className={style.input}
                            maxLength={8}
                            minLength={8}
                            required
                            onChange={(e)=>setCIN(e.target.value)}
                            />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="email" className={style.label}>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            className={style.input}
                            required  
                            autoComplete="on"
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                    </div>
                    <div className={style.footer}>
                        <button type="button" className={style.submit}>check</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default StatusForm