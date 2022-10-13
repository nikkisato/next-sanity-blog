import { createContext } from "react";
export const themes = {
    light: {
        type: "light",
        foreground: "#000",
        background: "#f4f7f9"

    },
    dark: {
        type: "dark",
        foreground: "#fff",
        background: "#2b2c38"
    }
}

export const ThemeContext = createContext({});