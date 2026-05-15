import {Navigate, Route , Routes } from "react-router-dom"
import './App.css'
import { publicRoutes } from "./routes/routes";


function App() {
  return (
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
}

export default App;