import { Link, Outlet } from 'react-router-dom';
const MainLayout = () => {
    let isLoggedIn=true
    return (
        <>
        <img src="#" alt="logo" />
        <nav>
            {isLoggedIn ? (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects/create">Projects</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/notifications">Notification</Link></li>
                    <li><Link to="/profile/overview">Profile</Link></li>
                </ul>
                ) : (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/#">Freatures</Link></li>
                    <li><Link to="/#">Contact</Link></li>
                    <li><Link to="/#">Login</Link></li>
                    <li><Link to="/#">Get Started</Link></li>
                </ul>
            )}
        </nav>
        <Outlet />
        </>
    )
}
export default MainLayout;