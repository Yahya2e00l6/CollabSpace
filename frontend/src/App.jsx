import {Navigate, Route , Routes } from "react-router-dom"
import './App.css'
// import { publicRoutes } from "./routes/routes";
import UserBox from "./components/StructuralUI/UserBox";
import MainLayout from "./components/layouts/MainLayout";
import AddTask from "./components/forms/AddTask";
import DataBox from "./components/StructuralUI/DataBox";
import HeaderDash from "./components/StructuralUI/Header";
import MainPage from "./pages/Main/MainPage";
import Insights from "./components/StructuralUI/Insights";
import ProjectList from "./components/StructuralUI/feeds/CompletedProject";
import RequestList from "./components/StructuralUI/RequestList"
import CompletedProjectList from "./components/StructuralUI/feeds/CompletedProjectList";
import ProjectDeadlineList from "./components/StructuralUI/feeds/ProjectsDeadLineList";
import TaskDeadLineList from "./components/StructuralUI/feeds/TaskDeadLineList";
import Feeds from "./components/StructuralUI/feeds/Feeds";
import ChartBox from "./components/charts/ChartBox";
import TeamCard from "./components/StructuralUI/teams/TeamCard";

function App() {
  return (
    // <Routes>
    //   {publicRoutes.map((route) => (
    //     <Route key={route.path} path={route.path} element={route.element} />
    //   ))}
    //   <Route path="/" element={<Navigate to="/SignIn" replace />} />
    //   <Route path="*" element={<Navigate to="/SignIn" replace />} />
    // </Routes>
    // <RequestStatusBox/>
    // <UserBox/>
    // <MainLayout/>
    // <AddTask/>
    // <DataBox/>
    // <HeaderDash/>
    <MainPage/>
    // <Insights/>
    // <ProjectList/>
      // <RequestList/>
      // <CompletedProjectList/>
      // <ProjectDeadlineList/>
      // <TaskDeadLineList/>
      // <Feeds/>
      // <ChartBox/>
      // <TeamCard/>
  );
}

export default App;