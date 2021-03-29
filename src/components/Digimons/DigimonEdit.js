import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { readDigimonDetails, updateDigimon } from "../../data";
import MonsterForm from "../Layouts/MonsterForm";
import Loading from "../Loading";

const DigimonEdit = () => {
  const [digimon, setDigimon] = useState(null);
  const [isRead, setIsRead] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const params = useParams();

  useEffect(() => {
    readDigimonDetails(params.id).then((digimon) => {
      setIsRead(true);
      setDigimon(digimon);
    });
  }, []);

  const handleUpdateDigimon = (monster) => {
    updateDigimon(monster).then(() => setIsUpdated(true));
  };

  if (!isRead) {
    return <Loading />;
  }

  if (isUpdated) {
    return <Redirect to="/digimons" />;
  }

  return <MonsterForm onSubmit={handleUpdateDigimon} monster={digimon} />;
};

export default DigimonEdit;
