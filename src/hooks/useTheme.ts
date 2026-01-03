import { useEffect, useState } from "react";

export type Theme =
    | "default"
    | "sage"
    | "indigo"
    | "rose"
    | "gold"
    | "neo"
    | "cyber"
    | "volcanic"
    | "terminal"
    | "memphis";

const STORAGE_KEY = "app-theme";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("default");

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
        if (saved) {
            setTheme(saved);
            applyTheme(saved);
        }
    }, []);

    const applyTheme = (value: Theme) => {
        const root = document.documentElement;

        if (value === "default") {
            root.removeAttribute("data-theme");
        } else {
            root.setAttribute("data-theme", value);
        }

        localStorage.setItem(STORAGE_KEY, value);
    };

    const changeTheme = (value: Theme) => {
        setTheme(value);
        applyTheme(value);
    };

    return { theme, changeTheme };
}
