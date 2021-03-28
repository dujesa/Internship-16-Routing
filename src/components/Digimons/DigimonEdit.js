import { updateDigimon } from "../../data";
import MonsterForm from "../Layouts/MonsterForm";

const DigimonEdit = () => {
  const digimon = { name: "Bulbasor", description: "Nan" };

  const handleUpdateDigimon = (digimon) => {
    updateDigimon(digimon);
  };

  return <MonsterForm monster={digimon} onSubmit={handleUpdateDigimon} />;
};

export default DigimonEdit;
