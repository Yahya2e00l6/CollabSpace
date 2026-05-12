import { useState } from "react"
import style from "../../Style/form/RegisterForm.module.css"
import { Link, useNavigate } from "react-router-dom"
import { post } from "../../api/client"
function RegisterForm(){
    const [ FirstName , setFirstName ] = useState("")
    const [ LastName , setLastName ] = useState("")
    const [ Gender , setGender ] = useState("m")
    const [ CIN , setCIN ] = useState("")
    const [ error , setError ]  = useState(false)
    const [ Email , setEmail ] = useState("")
    const [ Phone , setPhone ] = useState("")
    const [ ErrorMessage , setErrorMessage ] = useState("")
    const [ VerifieEmail , setVerifieEmail ] = useState("")
    const [ VerifiePhone , setVerifiePhone ] = useState("")
    const [ ErrorVerifieEmail , setErrorVerifieEmail ] =useState(false)
    const [ ErrorVerifiePhone , setErrorVerifiePhone ] =useState(false)
    const navigate = useNavigate();
    const today = Temporal.Now.plainDateISO();
    const EndDate = today.subtract({ years: 18});
    const [ BirthDate , setBirthDate ] = useState(EndDate.toString());
    const blockPhoneInput = (e) => {
        if ([ 'Backspace' , 'Tab' , 'Entre' , 'Escape' , 'Delete'].includes(e.key)){
            return;
        }
        if(!/^[0-9]$/.test(e.key)){
            e.preventDefault();
        }
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        setErrorVerifieEmail(false)
        setErrorVerifiePhone(false)
        setError(false)
        if(Email !== VerifieEmail ){
            setErrorVerifieEmail(true);
            return;
        }
        if(Phone !== VerifiePhone){
            setErrorVerifiePhone(true);
            return;
        }
        try{
            const response = await post('/auth/register',{
                firstName : FirstName.toLowerCase(),
                lastName : LastName.toLowerCase(),
                cin : CIN.toLowerCase(),
                phoneNumber : Phone,
                email : Email.toLowerCase(),
                birthDate : BirthDate,
                gender : Gender,
            })
            if(response){
                console.log("Request submitted successfully!")
                navigate('/RequestStatus')
            }
        }catch(e){
            console.error(e.message)
            setError(true)
            setErrorMessage(e.message || "This user is already registered.");
        }
    }

    return(
        <>
            <form method="POST" onSubmit={HandleSubmit} className={style.form}>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>Register Form</legend>
                    <span className={error ? style.error : style.hidden}>{ErrorMessage ? ErrorMessage : "Something went wrong" }</span>
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
                        <label htmlFor="Gender" className={style.label}>Gender</label>
                        <select name="Gender" id="Gender" className={style.select} onChange={(e) => setGender(e.target.value)}>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
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
                        <span className={ErrorVerifiePhone ? style.Error : style.Hidden}></span>
                        <label htmlFor="VerifiePhone" className={style.label}>VerifiePhone</label>
                        <input 
                            type="tel" 
                            name="VerifiePhone"
                            id="VerifiePhone"
                            className={style.input}
                            maxLength={10}
                            required
                            onChange={(e)=>setVerifiePhone(e.target.value)}
                            onKeyDown={blockPhoneInput}
                            pattern="^(06|07)\d{8}$"
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
                    <div className={style.formGroup}>
                        <span className={ErrorVerifieEmail ? style.Error : style.Hidden}></span>
                        <label htmlFor="VerifieEmail" className={style.label}> Verifie email</label>
                        <input 
                            type="email" 
                            name="VerifieEmail"
                            id="VerifieEmail"
                            className={style.input}
                            required
                            onChange={(e)=>setVerifieEmail(e.target.value)}
                            />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="BirthDate" className={style.label}> Birth Date</label>
                        <input 
                            type="date"
                            name="BirthDate"
                            id="BirthDate"
                            className={style.input}
                            required
                            value={BirthDate}
                            max={EndDate.toString()}
                            onChange={(e)=>setBirthDate(e.target.value)}
                        />
                    </div>
                    <div className={style.btn}>
                        <button type="submit" className={style.submit}>send request</button>
                        <Link to="/RequestStatus" className={style.link}>
                            <button type="reset" className={style.resetRequest}>follow your request</button> 
                        </Link>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
export default RegisterForm