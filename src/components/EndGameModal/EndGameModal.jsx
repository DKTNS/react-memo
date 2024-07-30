import styles from "./EndGameModal.module.css";
import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { addLeaders } from "../../api";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {
  //const title = isWon ? "Вы победили!" : "Вы проиграли!"; -изменно
  const { isGameMode } = useParams();
  const { pairsCount } = useParams();

  const navigate = useNavigate();
  const gameSeconds = gameDurationMinutes * 60 + gameDurationSeconds;
  const [userData, setuserData] = useState({
    name: "",
    time: gameSeconds,
    achievements: [],
  });
  //если isGameMode true то в userData.achievements нужно добавить 1

  console.log(isGameMode);
  const handleInputChange = e => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setuserData({
      ...userData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  async function handleAddUser(e) {
    e.preventDefault();
    try {
      await addLeaders(userData).then(data => {
        navigate(`/leaderboard`);
      });
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleAddUserButton(e) {
    e.preventDefault();
    try {
      await addLeaders(userData).then(data => {
        onClick();
      });
    } catch (error) {
      alert(error.message);
    }
  }

  let title = "";
  if (pairsCount === "9") {
    title = isWon ? "Вы попали на лидерборд!" : "Вы проиграли!";
  } else {
    title = isWon ? "Вы победили!" : "Вы проиграли!";
  }
  const startTheGame = e => {
    e.preventDefault();
    navigate(`/`);
  };
  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {pairsCount === "9" && isWon ? (
        <form className={styles.form}>
          <input
            className={styles.nameInput}
            value={userData.name}
            onChange={handleInputChange}
            type="text"
            name="name"
            id="formUser"
            placeholder="Пользователь"
          />
        </form>
      ) : null}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      {pairsCount === "9" && isWon ? (
        <>
          <Button onClick={handleAddUserButton}>Начать сначала</Button>
          <div onClick={handleAddUser} className={styles.leaderBoardLink}>
            Перейти к лидерборду
          </div>
        </>
      ) : (
        <>
          <Button onClick={startTheGame}>Начать сначала</Button>
        </>
      )}
    </div>
  );
}
