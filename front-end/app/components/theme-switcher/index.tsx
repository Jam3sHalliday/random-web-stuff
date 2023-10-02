// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
}

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            {theme === THEMES.LIGHT ? (
                <button onClick={() => setTheme(THEMES.DARK)}>🌙</button>
            ) : (
                <button onClick={() => setTheme(THEMES.LIGHT)}>🌞</button>
            )}
        </div>
    )
};