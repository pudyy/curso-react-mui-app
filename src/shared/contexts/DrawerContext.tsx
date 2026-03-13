import { createContext, useCallback, useContext, useState, ReactNode } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IDrawerOption {
    icon: string;
    path: string;
    label: string;
}

interface AppDrawerProviderProps {
    children: ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
}

export const AppDrawerProvider = ({ children }: AppDrawerProviderProps) => {
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, [])

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions,toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions}}>
                    {children}
        </DrawerContext.Provider>
    )
}