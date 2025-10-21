import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen grid place-items-center px-6 bg-slate-50 dark:bg-slate-950">
            <div className="text-center">
                <h1 className="text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100">404</h1>
                <h2 className="mt-2 text-xl font-semibold text-slate-800 dark:text-slate-200">Page Not Found</h2>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Go Back
                    </button>

                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                        <Home className="h-5 w-5" />
                        Go to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
