import {Navigate, Route , Routes } from "react-router-dom"
import './App.css'
import MainLayout from "./components/layouts/MainLayout"
import Home from "./pages/MainPages/Home"
import Projects from "./pages/MainPages/Projects"
import Profile from "./pages/MainPages/Profile"
import Notification from "./pages/MainPages/Notification"
import People from "./pages/MainPages/People"

import CreateProject from "./pages/projects/CreateProject"
import ExploreProjects from "./pages/projects/ExploreProjects"
import MyProjects from "./pages/projects/MyProjects"
import ProjectLayout from "./components/layouts/ProjectLayout"
import ProfileLayout from "./components/layouts/ProfileLayout"
import Overview from "./pages/profile/Overview"
import ProfileProjects from "./pages/profile/ProfileProjects"
import Dashboard from "./pages/profile/Dashboard"
import ActiveTasks from "./pages/profile/ActiveTasks"
import Calendar from "./pages/profile/Calendar"
import Network from "./pages/profile/Network"
import Settings from "./pages/profile/Settings"
import Help from "./pages/profile/Help"
import AdminDashboard from "./pages/dashboard/AdminDashboard"
// import RequestList from "./components/entreprise/RequestList"
import AddProject from "./components/forms/AddProject"
import AddTask from "./components/forms/AddTask"
import RegisterForm from "./components/forms/RegistreForm"
// import Members from "./components/entreprise/Members"
import BarChart from "./components/charts/BarChart"
import AdminPanel from "./pages/admin/AdminPanel"
import MiniSidebarCalendar from "./components/calendar/MiniSidebarCalendar"
function App() {
  var date = new Date();
  return (
    // <Routes>
    //   <Route element={<MainLayout />}>
        
    //     <Route path="/" element={<Home />} />

    //     <Route path="/projects" element={<Projects />}>
    //         <Route element={<ProjectLayout />}>
    //           <Route index element={<Navigate to="explore" replace/>}></Route>
    //           <Route path="explore"  element={<ExploreProjects />} />
    //           <Route path="create" element={<CreateProject />} />
    //           <Route path="my-projects" element={<MyProjects />} />
    //           <Route path="Archived" element={<Archived/>} />
    //         </Route>
    //     </Route>

    //     <Route path="/notifications" element={<Notification />} />

    //     <Route path="/people" element={<People />} />

    //     <Route path="/profile" element={<Profile />}>
    //       <Route element={<ProfileLayout />}>
    //         <Route path="overview" element={<Overview />} />
    //         <Route path="projects" element={<ProfileProjects />} />
    //         <Route path="dashboard" element={<Dashboard />} />
    //         <Route path="active-task" element={<ActiveTasks />} />
    //         <Route path="calendar" element={<Calendar />} />
    //         <Route path="network" element={<Network />} />
    //         <Route path="setting" element={<Settings />} />
    //         <Route path="help" element={<Help />} />
    //       </Route>
    //     </Route>


    //   </Route>
    // </Routes>
    // <AdminDashboard/>
    // <RequestList/>
    // <AddProject/>
    // <AddTask/>
    // <RegisterForm/>
    // <Members/>
    // <BarChart/>
    // <AdminPanel/>
    <MiniSidebarCalendar currentDate={date}/>
  );
}

export default App;