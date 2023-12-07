import { createContext, useContext, ReactNode } from "react";

type Props = {
    handleOpenWish: () => void;
}

const WishContext = createContext<Props | undefined>(undefined);

export const WishProvider: React.FC<{children:ReactNode; value:Props}> = ({children, value}) => {
    return <WishContext.Provider value={value}>{children}</WishContext.Provider>;
}

export const useWish = () => {
    const context = useContext(WishContext)
    if (!context) {
        throw new Error('useWish must be used within a WishProvider')
    }
    return context;
}