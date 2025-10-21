import React from "react";
import LoginForm from "./LoginForm";
import SidebarBrand from "./SidebarBrand";

const Login = () => {
    return (
        <div className="min-h-screen grid md:grid-cols-5 ui-bg">
            <div className="hidden md:block md:col-span-2">
                <SidebarBrand />
            </div>
            <div className="flex items-center justify-center md:col-span-3 p-6">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
