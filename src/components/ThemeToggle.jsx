import { useState, useEffect } from "react";
import { SunMedium, MoonStar } from "lucide-react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() =>
        localStorage.getItem("theme") === "dark" ||
        (localStorage.getItem("theme") === null &&
            window.matchMedia?.("(prefers-color-scheme: dark)").matches)
    );

    // Toggle .dark class and persist preference
    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="
        relative inline-flex items-center justify-center
        rounded-full p-2 transition-all duration-300
        border border-[var(--color-border)]
        bg-[var(--color-surface)]
        hover:bg-[color-mix(in srgb, var(--color-primary) 6%, transparent)]
        shadow-sm
      "
        >
            {/* Light icon */}
            <SunMedium
                className={`h-5 w-5 text-[var(--color-warning)] transition-all duration-300 ${
                    dark ? "scale-0 opacity-0 absolute" : "scale-100 opacity-100"
                }`}
            />

            {/* Dark icon */}
            <MoonStar
                className={`h-5 w-5 text-[var(--color-primary)] transition-all duration-300 ${
                    dark ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute"
                }`}
            />
        </button>
    );
}
