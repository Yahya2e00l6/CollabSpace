import Landing from "./Landing";
import UserHome from "./UserHome";
const Home = (props)=>{
    return(
        <>
            {props.isLoggedIn ? <Landing/> : <UserHome/>}
        </>
    )
}
export default Home;