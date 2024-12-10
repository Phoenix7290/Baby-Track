import React, { createContext, useContext, useState, ReactNode } from "react";

interface BabyInfo {
    name: string;
    birthDate: string;
    length: string;
    weight: string;
}

interface BabyContextType {
    babyInfo: BabyInfo;
    setBabyInfo: React.Dispatch<React.SetStateAction<BabyInfo>>;
}

const BabyContext = createContext<BabyContextType | undefined>(undefined);

export const BabyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [babyInfo, setBabyInfo] = useState<BabyInfo>({
        name: "",
        birthDate: "",
        length: "",
        weight: "",
    });

    return (
        <BabyContext.Provider value={{ babyInfo, setBabyInfo }}>
            {children}
        </BabyContext.Provider>
    );
};

export const useBaby = (): BabyContextType => {
    const context = useContext(BabyContext);
    if (!context) {
        throw new Error("useBaby must be used within a BabyProvider");
    }
    return context;
};
