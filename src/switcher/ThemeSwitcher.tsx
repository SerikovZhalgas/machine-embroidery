import { Button } from "@/components/ui/button";
import { useTheme, Theme } from "@/hooks/useTheme";

const themes: { id: Theme; label: string }[] = [
    { id: "default", label: "Warm" },
    { id: "sage", label: "Sage" },
    { id: "indigo", label: "Indigo" },
    { id: "rose", label: "Rose" },
    { id: "gold", label: "Gold" },
    { id: "neo", label: "Neo" },
    { id: "cyber", label: "Cyber" },
    { id: "volcanic", label: "Volcanic" },
    { id: "terminal", label: "Terminal" },
    { id: "memphis", label: "Memphis" },
];

export const ThemeSwitcher = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className="flex gap-2">
            {themes.map(t => (
                <Button
                    key={t.id}
                    variant={theme === t.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => changeTheme(t.id)}
                >
                    {t.label}
                </Button>
            ))}
        </div>
    );
};
