import { readDigimonDetails } from "../../data";
import MonsterDetails from "./../Layouts/MonsterDetails";

const DigimonDetails = () => {
  return <MonsterDetails readMonsterDetails={readDigimonDetails} resource="digimon"/>;
};

export default DigimonDetails;
