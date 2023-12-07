import { createContext, useContext, ReactNode } from "react";

type Props = {
    handleOpenActivity: () => void;
}

const ActivityContext = createContext<Props | undefined>(undefined);

export const ActivityProvider: React.FC<{children:ReactNode; value:Props}> = ({children, value}) => {
    return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>;
}

export const useActivity = () => {
    const context = useContext(ActivityContext)
    if (!context) {
        throw new Error('useActivity must be used within an ActivityProvider')
    }
    return context;
}