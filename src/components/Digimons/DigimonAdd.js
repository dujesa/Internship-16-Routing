import { createDigimon } from "../../data";
import MonsterForm from "./../Layouts/MonsterForm";

const DigimonAdd = () => {
  const handleCreateDigimon = (monster) => {
    createDigimon(monster);
  };

  return <MonsterForm onSubmit={handleCreateDigimon} />;
};

export default DigimonAdd;
