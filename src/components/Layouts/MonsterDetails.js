import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { Button, MonsterButtonContainer, MonsterDescription, MonstersContainer, MonsterTitle } from "./index.styled";

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
    <MonstersContainer>
      <MonsterTitle>{monster.name}</MonsterTitle>
      <MonsterDescription>{monster.description}</MonsterDescription>
      <MonsterButtonContainer>
        <Link to={`/${resource}s/edit/${monster.id}`}>
          <Button type="update">Update</Button>
        </Link>
        <Link to={`/${resource}s/delete/${monster.id}`}>
          <Button type="delete">Delete</Button>
        </Link>
      </MonsterButtonContainer>
    </MonstersContainer>
  );
};

export default MonsterDetails;
