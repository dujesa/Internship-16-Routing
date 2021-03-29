import { useEffect, useState } from "react";
import { readDigimons } from "../../data";

import Loading from "../Loading";
import MonsterList from "./../Layouts/MonsterList";

const DigimonList = () => {
  const [digimons, setDigimons] = useState(null);

  useEffect(() => {
    readDigimons().then(setDigimons);
  }, []);

  if (!digimons) {
    return <Loading />;
  }

  return <MonsterList monsters={digimons} resource="digimon" />;
};

export default DigimonList;
