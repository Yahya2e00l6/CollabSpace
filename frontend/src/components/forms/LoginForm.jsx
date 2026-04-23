function LoginForm(){
    return(
        <>
            <form action="Post">
                <label htmlFor="Identifiant">identifiant</label>
                <input type="text" name="FirstName" required/>
                <label htmlFor="LastName">Password</label>
                <input type="text" name="LasttName" required/>
            </form>
        </>
    )
}

export default LoginForm