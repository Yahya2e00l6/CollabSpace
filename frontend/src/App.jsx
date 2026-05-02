import {Navigate, Route , Routes } from "react-router-dom"
import './App.css'
import { publicRoutes } from "./routes/routes";
import RequestStatusBox from "./components/Structural & UI/RequestStatusBox";


function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {/* FIX: Redirect the empty root path to login */}
      <Route path="/" element={<Navigate to="/SignIn" replace />} />

      {/* OPTIONAL: Catch-all for 404 errors */}
      <Route path="*" element={<Navigate to="/SignIn" replace />} />
    </Routes>
    // <RequestStatusBox/>
    
  );
}

export default App;