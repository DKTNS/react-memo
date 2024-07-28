import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import Checkbox from "../../components/CheckBox/CheckBox";

// Создаем контекст
// const ModeContext = createContext();
// // Компонент-провайдер контекста
// export function ModeProvider({ children }) {
//   const [isEasyMode, setIsEasyMode] = useState(false);
// }

export function SelectLevelPage() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        {/* 1. трубуется создать контекст, который будет передавать данные режима (вкл\выкл) 
            2. отобразить количество попыток в компоненте Cards, там же будет состояние (isEasyMode ? 3 : 1);
            3. необходимо в Cards внутри openCard() создать условие если вклчен легкий режим
            4. ориентируемя на количество карточек без пары. если ровно 2 карточки без пары, 
            а поытки еще остались, то необходимо перевернуть все карточки без пары и вычесть попытку
            5. для переворачивания карточки используется метод includes*/}
        <Checkbox id={"modeCheckbox"} name={"modeCheckbox"} label={"Легкий режим (3 жизни)"} onClick={() => {}} />
      </div>
    </div>
  );
}
