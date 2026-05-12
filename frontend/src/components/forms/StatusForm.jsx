import { post } from "../../api/client"
import style from "../../Style/form/StatusForm.module.css"
import { useState } from "react"

const StatusForm = ({setStatus ,setFirstName , setLastName})=>{
    const [ phone , setPhone ] = useState("")
    const [ CIN , setCIN ] = useState("")
    const [ Email , setEmail ] = useState("")
    const [ ErrorMessage , setErrorMessage ] = useState("")
    const [ error , setError ]  = useState(false)
    const blockPhoneInput = (e) => {
        if ([ 'Backspace' , 'Tab' , 'Entre' , 'Escape' , 'Delete'].includes(e.key)){
            return;
        }
        if(!/^[0-9]$/.test(e.key)){
            e.preventDefault();
        }
    }
    const handleStatus = (status) => setStatus(status)
    const handleFirstName = (firstName) => setFirstName(firstName)
    const handleLastName = (lastName) => setLastName(lastName)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError(false)
        try{
            const response = await post('/auth/existingRequest',{
                cin : CIN,
                email : Email,
                phoneNumber : phone
            })
            if(response){
                console.log("Request submitted successfully!")
                console.log(response.status)
                handleStatus(response.status);
                handleFirstName(response.firstName);
                handleLastName(response.lastName);
            }
        }catch(e){
            console.error(e.message)
            setError(true)
            setErrorMessage(e.message || "Request Not Found.")
        }
    }
    return(
        <>
            <form method="POST" onSubmit={handleSubmit} className={style.form}>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>Register Form</legend>
                    <span className={error ? style.error : style.hidden}>{ErrorMessage ? ErrorMessage : "Something went wrong" }</span>
                    <div className={style.formGroup}>
                        <label htmlFor="Phone" className={style.label}>Phone</label>
                        <input 
                            type="tel" 
                            name="Phone"
                            id="Phone"
                            className={style.input}
                            maxLength={10}
                            required
                            autoComplete="tel"
                            onChange={(e)=>setPhone(e.target.value)}
                            onKeyDown={blockPhoneInput}
                            pattern="^(06|07)\d{8}$"
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
                        <button type="submit" className={style.submit}>check</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default StatusForm