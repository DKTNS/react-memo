import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return <GameContext.Provider value={{ selectedLevel, setSelectedLevel }}>{children}</GameContext.Provider>;
};
