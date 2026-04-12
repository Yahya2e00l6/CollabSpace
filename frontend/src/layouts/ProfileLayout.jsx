import { Link, Outlet } from 'react-router-dom';
const ProfileLayout = () =>{
    let isUser = true;
    return(
        <>
        {isUser ? (
            <nav>
                <ul>
                    <li><Link to="/#">Overview</Link></li>
                    <li><Link to="/#">Projects</Link></li>
                    <li><Link to="/#">Dashboard</Link></li>
                    <li><Link to="/#">Active Tasks</Link></li>
                    <li><Link to="/#">Calendar</Link></li>
                    <li><Link to="/#">Network</Link></li>
                    <li><Link to="/#">Setting</Link></li>
                    <li><Link to="/#">Help</Link></li>
                    <li><Link to="/#">Log Out</Link></li>
                </ul>
            </nav>
        ) : (
            <nav>
                <ul>
                    <li><Link to="/#">Overview</Link></li>
                    <li><Link to="/#">Projects</Link></li>
                    <li><Link to="/#">Dashboard</Link></li>
                </ul>
            </nav>
        )}
        </>
    )
}
export default ProfileLayout;