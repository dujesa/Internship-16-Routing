import { useState } from "react";
import { Redirect } from "react-router";
import { createDigimon } from "../../data";
import MonsterForm from "./../Layouts/MonsterForm";

const DigimonAdd = () => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCreateDigimon = (monster) => {
    createDigimon(monster).then(() => setIsCreated(true));
  };

  if (isCreated) {
    return <Redirect to="/digimons" />;
  }

  return <MonsterForm onSubmit={handleCreateDigimon} />;
};

export default DigimonAdd;
