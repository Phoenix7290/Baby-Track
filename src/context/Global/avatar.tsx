import React, { createContext, useState, useContext, ReactNode } from 'react';

interface BabyInfo {
  name: string;
  birthDate: string;
  length: string;
  weight: string;
}

interface BabyContextType {
  babyInfo: BabyInfo;
  updateBabyInfo: (info: Partial<BabyInfo>) => void;
}

const BabyContext = createContext<BabyContextType | undefined>(undefined);

export const BabyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [babyInfo, setBabyInfo] = useState<BabyInfo>({
    name: '',
    birthDate: '',
    length: '',
    weight: ''
  });

  const updateBabyInfo = (info: Partial<BabyInfo>) => {
    setBabyInfo(prev => ({ ...prev, ...info }));
  };

  return (
    <BabyContext.Provider value={{ babyInfo, updateBabyInfo }}>
      {children}
    </BabyContext.Provider>
  );
};

export const useBabyContext = () => {
  const context = useContext(BabyContext);
  if (!context) {
    throw new Error('useBabyContext must be used within a BabyProvider');
  }
  return context;
};