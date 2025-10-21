import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import {
    Grid2x2 as GridIcon,
    List as ListIcon,
    Calendar as CalendarIcon,
    Users as UsersIcon,
    BarChart3 as ChartIcon,
    CheckSquare,
    X,
    LogOut,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout, hasRole } = useAuth();

    const navItems = [
        { key: "dashboard", icon: GridIcon, text: "Dashboard", path: "/dashboard", roles: ["ROLE_ADMIN"] },
        { key: "tasks", icon: ListIcon, text: "Tasks", path: "/dashboard/tasks", roles: ["ROLE_USER", "ROLE_ADMIN"] },
        { key: "calendar", icon: CalendarIcon, text: "Calendar", path: "/dashboard/calendar", roles: ["ROLE_USER", "ROLE_ADMIN"] },
        { key: "teams", icon: UsersIcon, text: "Teams", path: "/dashboard/teams", roles: ["ROLE_ADMIN"] },
        { key: "reports", icon: ChartIcon, text: "Reports", path: "/dashboard/reports", roles: ["ROLE_ADMIN"] },
    ];

    const filtered = navItems.filter((i) => i.roles.some((r) => hasRole(r)));

    const handleNavigation = (path) => {
        navigate(path);
        onClose?.();
    };

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <>
            {/* Mobile overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />
            {/* Panel */}
            <aside
                className={[
                    "fixed inset-y-0 left-0 z-50 w-72 transform transition-transform md:translate-x-0 md:static md:w-64",
                    "bg-white border-r border-slate-200 dark:bg-slate-900 dark:border-slate-800",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                ].join(" ")}
            >
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                            <CheckSquare className="h-6 w-6" />
                            <h4 className="text-lg font-semibold">To-do</h4>
                        </div>
                        <button className="md:hidden rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800" onClick={onClose} aria-label="Close sidebar">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 space-y-1 px-3 py-4">
                        {filtered.map(({ key, icon: Icon, text, path }) => {
                            const active = location.pathname === path;
                            return (
                                <button
                                    key={key}
                                    onClick={() => handleNavigation(path)}
                                    className={[
                                        "w-full flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                                        active
                                            ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                                            : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                                    ].join(" ")}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{text}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
                                <UsersIcon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                            </div>
                            <div className="min-w-0">
                                <h5 className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{user?.name || "User"}</h5>
                                <p className="truncate text-xs text-slate-500 dark:text-slate-400">{user?.email || ""}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                            <LogOut className="h-5 w-5" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
