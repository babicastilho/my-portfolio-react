import React, { useState, useEffect } from 'react'

// dependencies - icon
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeMode() {
    const [themeState, setThemeState] = useState(false);

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') {
            setThemeState(true);
        }
    }, []);

    useEffect(() => {
        if (themeState) {
            localStorage.setItem('Theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            localStorage.setItem('Theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');

        }
    }, [themeState]);

    return (
        <a className="toggleButtom" onClick={() => setThemeState(!themeState)}>
            {themeState ? <BsSun /> : <BsMoon />}
        </a>
    );
}