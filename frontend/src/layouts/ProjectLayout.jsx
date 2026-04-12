import { Link, Outlet } from 'react-router-dom';
const ProjectLayout = () =>{
    return (
        <>
        <nav>
            <ul>
                <li><Link to="my-projects">My projects</Link></li>
                <li><Link to="explore">Explore</Link></li>
                <li><Link to="Archived">Archived</Link></li>
                <li><Link to="create">Create Project</Link></li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}
export default ProjectLayout;