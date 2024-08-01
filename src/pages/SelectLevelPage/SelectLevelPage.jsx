import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import styles from "../SelectLevelPage/SelectLevelPage.module.css";

export function SelectLevelPage() {
  //отслеживания режима игры
  const [checked, setChecked] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null); // Состояние для хранения выбранного уровня
  const navigate = useNavigate(); // Хук для навигации

  const handleStartGame = () => {
    if (selectedLevel !== null) {
      navigate(`/game/${selectedLevel}/${checked ? true : false}`); // Переход на страницу игры с выбранным уровнем
    } else {
      alert("Пожалуйста, выберите уровень!"); // Предупреждение, если уровень не выбран
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link
              className={`${styles.levelLink} ${selectedLevel === 3 ? styles.selected : ""}`}
              onClick={() => setSelectedLevel(3)} // Устанавливаем уровень 1
            >
              1
            </Link>
            {/* <Link className={styles.levelLink} to={`/game/3/${checked ? true : false}`}>
              1
            </Link> */}
          </li>
          <li className={styles.level}>
            <Link
              className={`${styles.levelLink} ${selectedLevel === 6 ? styles.selected : ""}`}
              onClick={() => setSelectedLevel(6)} // Устанавливаем уровень 2
            >
              2
            </Link>
            {/* <Link className={styles.levelLink} to={`/game/6/${checked ? true : false}`}>
              2
            </Link> */}
          </li>
          <li className={styles.level}>
            <Link
              className={`${styles.levelLink} ${selectedLevel === 9 ? styles.selected : ""}`}
              onClick={() => setSelectedLevel(9)} // Устанавливаем уровень 3
            >
              3
            </Link>
            {/* <Link className={styles.levelLink} to={`/game/9/${checked ? true : false}`}>
              3
            </Link> */}
          </li>
        </ul>
        <div className={styles.easyMode}>
          <input
            className={styles.custom}
            type="checkbox"
            checked={checked}
            value="yes"
            onChange={() => setChecked(!checked)}
            id="easyMode"
          />
          <label htmlFor="easyMode">Легкий режим (3 попытки)</label>
        </div>
        <button className={styles.button} onClick={handleStartGame}>
          Начать игру
        </button>
        <div className={styles.LeaderBoardGlob}>
          <Link to={`/leaderboard`} className={styles.leaderBoardLinkBox}>
            Перейти к лидерборду
          </Link>
        </div>
      </div>
    </div>
  );
}
