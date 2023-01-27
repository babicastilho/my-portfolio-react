import { useTheme } from "../hook/useTheme/useTheme";

export const Switch = () => {

    const [theme, handleChange] = useTheme('dark');

    return (
        <div className="container-switch">
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
    )
}