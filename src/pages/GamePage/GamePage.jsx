import { useParams } from "react-router-dom";
import { Cards } from "../../components/Cards/Cards";
import { useContext } from "react";
import { EasyModeContext } from "../../components/Context/easyMode";

export function GamePage() {
  const { pairsCount } = useParams();
  //const { isEasyMode } = useParams();

  const { isEasyMode } = useContext(EasyModeContext);
  const attempts = isEasyMode ? 3 : 1;
  return (
    <>
      <Cards
        pairsCount={parseInt(pairsCount, 10)}
        previewSeconds={5}
        attempts={attempts}
        isEasyMode={isEasyMode}
      ></Cards>
    </>
  );
}
