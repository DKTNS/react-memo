import { useContext } from "react";
import { GameModeContext } from "../CheckBox/CheckBoxContext";

export function useModeGame() {
  return useContext(GameModeContext);
}
