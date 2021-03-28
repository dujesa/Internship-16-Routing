import { useState } from "react";

const MonsterForm = ({ onSubmit, monster }) => {
  const [name, setName] = useState(monster?.name || "");
  const [description, setDescription] = useState(monster?.description || "");

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
    <div>
      <label>Name</label>
      <input value={name} onChange={handleChange(setName)} />
      <label>Description</label>
      <input value={description} onChange={handleChange(setDescription)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MonsterForm;
