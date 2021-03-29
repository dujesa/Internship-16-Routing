import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";

import MonsterForm from "./MonsterForm";
import Loading from "../Loading";

const MonsterEdit = ({ readMonsterDetails, updateMonster, redirectRoute }) => {
  const [monster, setMonster] = useState(null);
  const [isRead, setIsRead] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const params = useParams();

  useEffect(() => {
    readMonsterDetails(params.id).then((monster) => {
      setIsRead(true);
      setMonster(monster);
    });
  }, []);

  const handleUpdateMonster = (monster) => {
    updateMonster(monster).then((isUpdated) => setIsUpdated(isUpdated));
  };

  if (!isRead) {
    return <Loading />;
  }

  if (isUpdated) {
    return <Redirect to={`${redirectRoute}`} />;
  }

  return <MonsterForm monster={monster} onSubmit={handleUpdateMonster} />;
};

export default MonsterEdit;
