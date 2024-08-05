import { createContext, useState } from "react";

export const SelectLevelContext = createContext();

export const SelectLevelProvider = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <SelectLevelContext.Provider value={{ selectedLevel, setSelectedLevel }}>{children}</SelectLevelContext.Provider>
  );
};
