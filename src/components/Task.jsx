import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header.jsx";
import {
    Funnel,
    ArrowDownAZ,
    Calendar,
    UserRound,
    Check,
    Pencil,
    Trash2,
    Plus,
    X,
} from "lucide-react";

const Task = () => {
    return (
        <div className="min-h-screen bg-slate-50 md:flex dark:bg-slate-950">
            <Sidebar isOpen={false} onClose={() => {}} />
            <main className="flex-1">
                <Header title="Tasks" subtitle="Manage and organize your tasks" onToggleSidebar={() => {}} />

                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
                    {/* Add task */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
                        <div className="pb-5 border-b border-slate-800">
                            <h2 className="text-lg font-semibold text-slate-100">Add New Task</h2>
                        </div>

                        <div className="pt-5">
                            <form className="space-y-5" id="todoForm">
                                {/* Title */}
                                <div>
                                    <label htmlFor="todoTitle" className="block text-sm font-medium text-slate-200 mb-1">Title</label>
                                    <input
                                        id="todoTitle"
                                        type="text"
                                        placeholder="Enter task title..."
                                        className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label htmlFor="todoDescription" className="block text-sm font-medium text-slate-200 mb-1">Description</label>
                                    <textarea
                                        id="todoDescription"
                                        rows={4}
                                        placeholder="Write a short description..."
                                        className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                {/* Grid fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="todoDueDate" className="block text-sm font-medium text-slate-200 mb-1">Due Date</label>
                                        <input
                                            id="todoDueDate"
                                            type="datetime-local"
                                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="todoPerson" className="block text-sm font-medium text-slate-200 mb-1">Assign to Person</label>
                                        <select
                                            id="todoPerson"
                                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <option value="">-- Select Person (Optional) --</option>
                                            <option value="1">Mehrdad Javan</option>
                                            <option value="2">Simon Elbrink</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Attachments */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-200 mb-1">Attachments</label>
                                    <div className="mt-1 flex items-center gap-2">
                                        <input
                                            type="file"
                                            multiple
                                            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-3 file:py-1 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-500"
                                        />
                                        <button type="button" className="inline-flex items-center gap-1 rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800">
                                            <X className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="flex justify-end">
                                    <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
                                        <Plus className="h-5 w-5" />
                                        Add Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Task list */}
                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <h5 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tasks</h5>
                            <div className="flex items-center gap-2">
                                <IconButton title="Filter"><Funnel className="h-5 w-5" /></IconButton>
                                <IconButton title="Sort"><ArrowDownAZ className="h-5 w-5" /></IconButton>
                            </div>
                        </div>

                        <div className="px-2 py-2 sm:px-6 sm:py-4">
                            <div className="divide-y divide-slate-200 dark:divide-slate-800">
                                <TaskRow
                                    title="Complete Project Documentation"
                                    created="2025-08-07"
                                    description="Write comprehensive documentation for the new features"
                                    due="2025-08-15"
                                    assignee="Mehrdad Javan"
                                    status={{ text: "pending", tone: "amber" }}
                                />
                                <TaskRow
                                    title="Review Code Changes"
                                    created="2025-08-06"
                                    description="Review and approve pending pull requests"
                                    due="2025-08-09"
                                    assignee="Simon Elbrink"
                                    status={{ text: "in progress", tone: "indigo" }}
                                />
                                <TaskRow
                                    title="Deploy Application Updates"
                                    created="2025-08-05"
                                    description="Deploy the latest version to production"
                                    due="2025-08-07"
                                    assignee="Mehrdad Javan"
                                    status={{ text: "completed", tone: "emerald" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

/* ---------- Presentational pieces ---------- */

const IconButton = ({ title, children }) => (
    <button
        title={title}
        className="rounded-lg border border-slate-200 p-1.5 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
        type="button"
    >
        {children}
    </button>
);

const tones = {
    amber: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30",
    indigo: "bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/30",
    emerald: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30",
    gray: "bg-slate-500/15 text-slate-300 ring-1 ring-slate-400/30",
};

const TaskRow = ({ title, created, description, due, assignee, status }) => (
    <div className="py-4">
        <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                    <h6 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</h6>
                    <small className="text-xs text-slate-500 dark:text-slate-400">Created: {created}</small>
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{description}</p>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300">
            <Calendar className="h-4 w-4" /> Due: {due}
          </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-0.5 font-medium text-sky-300 ring-1 ring-sky-400/30" title="Assignee">
            <UserRound className="h-4 w-4" /> {assignee}
          </span>
                    <span className={`inline-flex rounded-full px-2 py-0.5 font-medium ${tones[status.tone] || tones.gray}`}>{status.text}</span>
                </div>
            </div>

            {/* Colored action buttons */}
            <div className="flex shrink-0 items-center gap-2">
                <button className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors" title="Complete">
                    <Check className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors" title="Edit">
                    <Pencil className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg bg-rose-600 text-white hover:bg-rose-500 transition-colors" title="Delete">
                    <Trash2 className="h-5 w-5" />
                </button>
            </div>
        </div>
    </div>
);

export default Task;
