import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState({
        light: {
            color: "black",
            background: "white",
        },
        dark: {
            color: "white",
            background: "black",
        },
    });

return(
    <ThemeContext.Provider
    value={{theme, setTheme}}
    >
        {children}
    </ThemeContext.Provider>
)
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    const { theme, setTheme } = context;
    return { theme, setTheme};
}