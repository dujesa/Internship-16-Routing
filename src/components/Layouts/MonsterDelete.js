import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";

const MonsterDelete = ({ deleteMonster, redirectRoute }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const params = useParams();

  useEffect(() => {
    deleteMonster(params.id).then(() => setIsDeleted(true));
  }, []);

  if (isDeleted) {
    return <Redirect to={`${redirectRoute}`} />;
  }

  return null;
};

export default MonsterDelete;
