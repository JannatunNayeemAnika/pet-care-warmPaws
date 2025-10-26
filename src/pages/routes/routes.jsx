import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

import Home from "../Home";
import Services from "../Services";
import MyProfile from "../MyProfile";
import Signup from "../Signup";
import Login from "../Login";
import ServiceDetails from "../ServiceDetails";
import ProtectedRoute from "./ProtectedRoutes";   
import ForgotPassword from "../ForgotPassword";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/services', element: <Services /> },
            { path: '/myProfile', element: <MyProfile /> },
            {
                path: '/service/:serviceId',
                element: (
                    <ProtectedRoute>
                        <ServiceDetails />
                    </ProtectedRoute>
                )
            },
            { path: '/signup', element: <Signup /> },
            { path: '/login', element: <Login /> },
            { path: '/forgot-password', element: <ForgotPassword /> },
        ]
    }
]);
