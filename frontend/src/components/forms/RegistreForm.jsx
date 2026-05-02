import { useState } from "react"
import style from "../../Style/form/RegisterForm.module.css"
import { Link } from "react-router-dom"
function RegisterForm(){
    const [ FirstName , setFirstName ] = useState("")
    const [ LastName , setLastName ] = useState("")
    const [ CIN , setCIN ] = useState("")
    const [ Email , setEmail ] = useState("")
    const [ Phone , setPhone ] = useState("")
    const [ VerifieEmail , setVerifieEmail ] = useState("")
    const [ VerifiePhone , setVerifiePhone ] = useState("")
    const [ ErrorVerifieEmail , setErrorVerifieEmail ] =useState(false)
    const [ Image , setImage ] =useState("")
    const [ ImageError , setImageError ] = useState(false);
    const today = Temporal.Now.plainDateISO();
    const EndDate = today.subtract({ years: 18});
    const [ BirthDate , setBirthDate ] = useState(EndDate.toString());

    const HandleImage = (e) => {
        const file = e.target.files[0];
        if(!file) return;
        const maxSize = 2 * 1024 * 1024 ;
        if(file.size>maxSize){
            setImageError(true);
            return
        }
        setImage(file);
        setImageError(false);
    }
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
        if(Email !== VerifieEmail ){
            setErrorVerifieEmail(true);
            return;
        }
    }

    return(
        <>
            <form method="POST" onSubmit={HandleSubmit} className={style.form}>
                <fieldset className={style.fieldset}>
                    <legend className={style.legend}>Register Form</legend>
                    <div>
                        <span className={ImageError ? style.Hidden : style.Error}></span>
                        <label htmlFor="Image" className={style.label}>Image : </label>
                        <input 
                            type="file" 
                            name="Image"
                            id="Image"
                            className={style.Image}
                            accept="image/png , image/jpeg" 
                            required

                            onChange={HandleImage}
                            />
                    </div>
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
                        <span className={ErrorVerifieEmail ? style.Hidden : style.Error}></span>
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