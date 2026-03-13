import { createContext, useCallback, useContext, useState, ReactNode } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

interface AppDrawerProviderProps {
    children: ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
}

export const AppDrawerProvider = ({ children }: AppDrawerProviderProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen}}>
                    {children}
        </DrawerContext.Provider>
    )
}