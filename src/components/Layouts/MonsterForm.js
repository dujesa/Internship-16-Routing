import { useEffect, useState } from "react";
import { MonsterSubmitButton, MonstersContainer, MonsterFormLabel, MonsterFormInput, MonsterFormTextarea } from "./index.styled";

const MonsterForm = ({ onSubmit, monster }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(monster?.name || "");
    setDescription(monster?.description || "");
  }, [monster]);

  const handleChange = (handler) => (event) => {
    handler(event.target.value);
  };

  const handleSubmit = () => {
    if (!(name && description)) {
      return;
    }

    const monsterToSubmit = monster
      ? { ...monster, name, description }
      : { name, description };

    onSubmit(monsterToSubmit);
  };

  return (
    <MonstersContainer>
      <MonsterFormLabel>Name</MonsterFormLabel>
      <MonsterFormInput value={name} onChange={handleChange(setName)} />
      <MonsterFormLabel>Description</MonsterFormLabel>
      <MonsterFormTextarea value={description} onChange={handleChange(setDescription)}/>
      <MonsterSubmitButton onClick={handleSubmit}>Submit</MonsterSubmitButton>
    </MonstersContainer>
  );
};

export default MonsterForm;
