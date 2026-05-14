import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import RequestStatus from "../pages/auth/RequestStatus";
import MainPage from "../pages/Main/MainPage";
import LandingPage from '../pages/Main/LandingPage'
export const publicRoutes = [
    { path: '/LandingPage', element: <LandingPage />, name: 'Landing Page' },
    { path: '/SignIn', element: <SignIn />, name: 'Sign In' },
    { path: '/register', element: <Register />, name: 'Register' },
    { path: '/RequestStatus', element: <RequestStatus />, name: 'Check Status' },
    { path: '/collabSpace', element: <MainPage />, name: 'Collab Space' },
];