function RegisterForm(){
    return(
        <>
            <form action="Post">
                <label htmlFor="FirstName">First Name</label>
                <input type="text" name="FirstName" required/>
                <label htmlFor="LastName">Last Name</label>
                <input type="text" name="LasttName" required/>
                <label htmlFor="CIN">CIN</label>
                <input type="text" name="CIN" size="8" />
                <label htmlFor="email">Email</label>
                <input type="email" required  name="email" />
                <label htmlFor="VerifieEmail"> Verifie email</label>
                <input type="email" required name="verifieEmail"/>
                <label htmlFor="BornDate"> Born Date</label>
                <input type="date" required/>
                <button type="submit">send request</button> 
            </form>
        </>
    )
}
export default RegisterForm