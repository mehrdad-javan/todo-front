import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header.jsx";
import { MoreHorizontal } from "lucide-react";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const tasks = [
        { id: 1, title: "Update user interface design", team: "Design team", dueDate: "2025-07-11", status: "pending" },
        { id: 2, title: "Implement authentication system", team: "Development", dueDate: "2025-07-12", status: "in-progress" },
        { id: 3, title: "Create project documentation", team: "Documentation", dueDate: "2025-07-10", status: "completed" },
        { id: 4, title: "Fix critical security bug", team: "Security", dueDate: "2025-07-09", status: "pending" },
        { id: 5, title: "Update API endpoints", team: "Backend", dueDate: "2025-07-08", status: "in-progress" },
    ];

    const today = new Date();
    const sorted = [...tasks].sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    const recent = sorted.filter((t) => new Date(t.dueDate) >= today);
    const overdue = sorted.filter((t) => new Date(t.dueDate) < today && t.status !== "completed");

    const badge = (status) => {
        const map = {
            pending: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30",
            "in-progress": "bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/30",
            completed: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30",
            default: "bg-slate-500/15 text-slate-300 ring-1 ring-slate-400/30",
        };
        return map[status] || map.default;
    };

    const Section = ({ title, items, danger, showDueDate = true }) => (
        <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    <span className={danger ? "text-red-500" : ""}>{title}</span>
                    {danger ? (
                        <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-2 text-xs font-semibold text-white">
              {items.length}
            </span>
                    ) : null}
                </h2>
                <button className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100">
                    View All →
                </button>
            </div>

            <div>
                <table className="min-w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
                    <tr>
                        <th className="px-4 py-2 w-10">#</th>
                        <th className="px-4 py-2">Task</th>
                        <th className="px-4 py-2 w-44">Team</th>
                        {showDueDate && <th className="px-4 py-2 w-32">Due Date</th>}
                        <th className="px-4 py-2 w-32">Status</th>
                        <th className="px-4 py-2 w-10" />
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {items.map((t, i) => (
                        <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60">
                            <td className="px-4 py-2 text-slate-700 dark:text-slate-300">{i + 1}</td>
                            <td className="px-4 py-2 font-medium text-slate-900 dark:text-slate-100">{t.title}</td>
                            <td className="px-4 py-2 text-slate-700 dark:text-slate-300">{t.team}</td>
                            {showDueDate && (
                                <td className={`px-4 py-2 ${danger ? "text-red-400" : "text-slate-700 dark:text-slate-300"}`}>
                                    {new Date(t.dueDate).toLocaleDateString()}
                                </td>
                            )}
                            <td className="px-4 py-2">
                  <span className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge(t.status)}`}>
                    {t.status.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
                  </span>
                            </td>
                            <td className="px-4 py-2 text-right">
                                <details className="relative">
                                    <summary className="list-none cursor-pointer select-none text-slate-500 dark:text-slate-300">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </summary>
                                    <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-1 shadow dark:border-slate-800 dark:bg-slate-900">
                                        <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors">Edit</button>
                                        <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors">Mark Complete</button>
                                        <div className="my-1 h-px bg-slate-200 dark:bg-slate-800" />
                                        <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10 transition-colors">Delete</button>
                                    </div>
                                </details>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 md:flex dark:bg-slate-950">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <main className="flex-1">
                <Header
                    title="Dashboard"
                    subtitle="Welcome back! Here's your tasks overview"
                    onToggleSidebar={() => setIsSidebarOpen(true)}
                />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            { label: "Pending", value: 12 },
                            { label: "In Progress", value: 5 },
                            { label: "Completed", value: 18 },
                            { label: "Overdue", value: 3 },
                            { label: "Users", value: 1 },
                        ].map((s) => (
                            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                                <div className="text-sm text-slate-500 dark:text-slate-400">{s.label}</div>
                                <div className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">{s.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Recent smaller, Overdue bigger */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-1">
                            <Section title="Recent Tasks" items={recent} danger={false} showDueDate={false} />
                        </div>
                        <div className="lg:col-span-2">
                            <Section title="Overdue Tasks" items={overdue} danger={true} showDueDate={true} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
