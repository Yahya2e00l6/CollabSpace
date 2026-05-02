import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";
import RequestStatus from "../pages/auth/RequestStatus";
export const publicRoutes = [
    { path: '/SignIn', element: <SignIn />, name: 'Sign In' },
    { path: '/register', element: <Register />, name: 'Register' },
    { path: '/RequestStatus', element: <RequestStatus />, name: 'Check Status' }
];