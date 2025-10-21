import React from "react";
import { CheckSquare, CheckCircle2, CalendarDays, TrendingUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const SidebarBrand = () => {
    return (
        <div className="h-full w-full ui-sidebar ui-text-primary ui-sidebar-edge">
            <div className="mx-auto flex h-full max-w-md flex-col justify-between p-10">
                {/* Top bar with theme toggle */}
                <div className="flex items-center justify-end">
                    <ThemeToggle />
                </div>

                <div>
                    <div className="flex items-center gap-3">
                        <CheckSquare className="h-8 w-8 ui-icon" />
                        <h4 className="text-2xl font-semibold">To-do App</h4>
                    </div>

                    <h2 className="mt-10 text-3xl font-bold">Welcome Back!</h2>
                    <p className="mt-2 ui-text-muted">
                        Organize your tasks and boost your productivity
                    </p>

                    <div className="mt-8 space-y-3">
                        <Feature icon={<CheckCircle2 className="h-6 w-6 ui-icon" />} text="Stay organized with task lists" />
                        <Feature icon={<CalendarDays className="h-6 w-6 ui-icon" />} text="Track deadlines effectively" />
                        <Feature icon={<TrendingUp className="h-6 w-6 ui-icon" />} text="Monitor your progress" />
                    </div>
                </div>

                <p className="text-sm ui-text-subtle">© 2025 To-do App. All rights reserved.</p>
            </div>
        </div>
    );
};

const Feature = ({ icon, text }) => (
    <div className="flex items-center gap-3 ui-text-secondary">
        {icon}
        <span>{text}</span>
    </div>
);

export default SidebarBrand;
