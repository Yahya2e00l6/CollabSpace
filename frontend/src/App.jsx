import {Navigate, Route , Routes } from "react-router-dom"
import './App.css'
import { publicRoutes } from "./routes/routes";


function App() {
  return (
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={<Navigate to="/LandingPage" replace />} />
        <Route path="*" element={<Navigate to="/LandingPage" replace />} />
      </Routes>
  );
}

export default App;