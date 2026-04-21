import styles from "../../Style/MainLayout.module.css";
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    let isLoggedIn = true;

    return (
        <div className={styles.layoutWrapper}>
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    {/* Logo Area */}
                    <div className={styles.logoSection}>
                        <img src="https://via.placeholder.com/40" alt="logo" className={styles.logo}/>
                        <span className={styles.brandName}>LearnAndTry</span>
                    </div>

                    {/* Navigation Links */}
                    <ul className={styles.navLinks}>
                        {isLoggedIn ? (
                            <>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects/create">Projects</Link></li>
                                <li><Link to="/people">People</Link></li>
                                <li><Link to="/notifications">Notification</Link></li>
                                {/* Profile pushed to the end */}
                                <li className={styles.userSection}>
                                    <Link to="/profile/overview">
                                        <img src="https://via.placeholder.com/35" alt="profile" className={styles.profilePic} />
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/#">Features</Link></li>
                                <li><Link to="/#">Contact</Link></li>
                                <li className={styles.userSection}><Link to="/#">Login</Link></li>
                                <li><Link to="/#" className={styles.getStartedBtn}>Get Started</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>

            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;