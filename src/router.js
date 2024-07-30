import { createBrowserRouter } from "react-router-dom";
import { GamePage } from "./pages/GamePage/GamePage";
import { SelectLevelPage } from "./pages/SelectLevelPage/SelectLevelPage";
import { LeaderBoardPage } from "./pages/LeaderBoardPage/leaderBoardPage";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SelectLevelPage />,
    },
    {
      path: "/game/:pairsCount/:isGameMode",
      element: <GamePage />,
    },
    {
      path: "/Leaderboard",
      element: <LeaderBoardPage />,
    },
  ],
  /**
   * basename нужен для корректной работы в gh pages
   * он же указан в homepage package.json и в index.html
   */
  { basename: "/react-memo" },
);
