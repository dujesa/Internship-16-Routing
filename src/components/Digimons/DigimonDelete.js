import { deleteDigimon } from "../../data";
import MonsterDelete from "../Layouts/MonsterDelete";

const DigimonDelete = () => {
  return (
    <MonsterDelete deleteMonster={deleteDigimon} redirectRoute="/digimons" />
  );
};

export default DigimonDelete;
