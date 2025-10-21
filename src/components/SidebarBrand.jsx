import React from "react";
import { CheckSquare, CheckCircle2, CalendarDays, TrendingUp } from "lucide-react";

const SidebarBrand = () => {
    return (
        <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
            <div className="mx-auto flex h-full max-w-md flex-col justify-between p-10">
                <div />
                <div>
                    <div className="flex items-center gap-3">
                        <CheckSquare className="h-8 w-8" />
                        <h4 className="text-2xl font-semibold">To-do App</h4>
                    </div>

                    <h2 className="mt-10 text-3xl font-bold">Welcome Back!</h2>
                    <p className="mt-2 text-white/70">Organize your tasks and boost your productivity</p>

                    <div className="mt-8 space-y-3">
                        <Feature icon={<CheckCircle2 className="h-6 w-6" />} text="Stay organized with task lists" />
                        <Feature icon={<CalendarDays className="h-6 w-6" />} text="Track deadlines effectively" />
                        <Feature icon={<TrendingUp className="h-6 w-6" />} text="Monitor your progress" />
                    </div>
                </div>

                <p className="text-sm text-white/60">© 2025 To-do App. All rights reserved.</p>
            </div>
        </div>
    );
};

const Feature = ({ icon, text }) => (
    <div className="flex items-center gap-3 text-white/90">
        {icon}
        <span>{text}</span>
    </div>
);

export default SidebarBrand;
