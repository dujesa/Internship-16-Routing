import { readDigimonDetails, updateDigimon } from "../../data";
import MonsterEdit from "../Layouts/MonsterEdit";

const DigimonEdit = () => {
  const handleUpdateDigimon = async (monster) => {
    const updatedDigimon = await updateDigimon(monster);
    return !!Object.keys(updatedDigimon).length;
  };

  return (
    <MonsterEdit
      readMonsterDetails={readDigimonDetails}
      updateMonster={handleUpdateDigimon}
      redirectRoute="/digimons"
    />
  );
};

export default DigimonEdit;
