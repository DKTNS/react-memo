import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [isEasyMode, setIsEasyMode] = useState(false);

  return (
    <GameContext.Provider value={{ selectedLevel, setSelectedLevel, isEasyMode, setIsEasyMode }}>
      {children}
    </GameContext.Provider>
  );
};
