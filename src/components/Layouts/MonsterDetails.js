import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const MonsterDetails = ({ resource, readMonsterDetails }) => {
  const params = useParams();
  const [monster, setMonster] = useState(null);

  useEffect(() => {
    readMonsterDetails(params.id).then(setMonster);
  }, []);

  if (!monster) {
    return <Loading />;
  }

  return (
    <div>
      <h3>Name: {monster.name}</h3>
      <p>Description: {monster.description}</p>
      <Link to={`/${resource}s/edit/${monster.id}`}>
        <button>Update</button>
      </Link>
    </div>
  );
};

export default MonsterDetails;
