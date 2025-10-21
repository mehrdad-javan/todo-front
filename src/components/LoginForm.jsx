import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { UserRound, Lock, Eye, EyeOff, Loader2, ArrowRight, CheckSquare } from "lucide-react";

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            await login(formData.username, formData.password);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message || "An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md">
            {/* Mobile brand */}
            <div className="mb-8 flex items-center gap-2 md:hidden text-indigo-500">
                <CheckSquare className="h-6 w-6" />
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">To-do App</h4>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Login</h1>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Enter your credentials to access your account</p>
                </div>

                {error && (
                    <div className="mb-4 rounded-lg border border-red-300/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Username</label>
                        <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950/40 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                            <UserRound className="h-5 w-5 text-slate-400" />
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className="w-full bg-transparent border-0 p-0 outline-none placeholder:text-slate-400 text-slate-900 dark:text-slate-100"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                        <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950/40 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                            <Lock className="h-5 w-5 text-slate-400" />
                            <input
                                id="password"
                                name="password"
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className="w-full bg-transparent border-0 p-0 outline-none placeholder:text-slate-400 text-slate-900 dark:text-slate-100"
                            />
                            <button
                                type="button"
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                disabled={isLoading}
                                className="rounded-lg p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                {isPasswordVisible ? <EyeOff className="h-5 w-5 text-slate-400" /> : <Eye className="h-5 w-5 text-slate-400" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60 transition"
                    >
                        {isLoading ? (
                            <>
                                <span>Signing In</span>
                                <Loader2 className="h-5 w-5 animate-spin" />
                            </>
                        ) : (
                            <>
                                <span>Sign In</span>
                                <ArrowRight className="h-5 w-5" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center md:hidden text-xs text-slate-500 dark:text-slate-400">
                    © 2025 To-do App. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
