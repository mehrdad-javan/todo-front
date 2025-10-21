import React, { useState, useEffect } from "react";
import { Menu, CheckSquare } from "lucide-react";

const Header = ({ title, subtitle, onToggleSidebar, actions }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={[
                "sticky top-0 z-30 backdrop-blur transition-shadow",
                "supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60",
                isScrolled ? "shadow-sm dark:shadow-slate-900/40" : "",
                "border-b border-slate-200 dark:border-slate-800",
            ].join(" ")}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                {/* Mobile brand + toggle */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={onToggleSidebar}
                        className="-m-2 inline-flex items-center rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                        aria-label="Toggle sidebar"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                        <CheckSquare className="h-6 w-6" />
                        <h4 className="text-base font-semibold">To-do App</h4>
                    </div>
                </div>

                {/* Title / actions */}
                <div className="mt-3 flex items-end justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</h1>
                        {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
                    </div>
                    {actions && <div className="flex items-center gap-2">{actions}</div>}
                </div>
            </div>
        </div>
    );
};

export default Header;
