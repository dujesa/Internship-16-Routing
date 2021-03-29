import { Link } from "react-router-dom";
import {
  MonsterAddButton,
  MonstersContainer,
  MonsterLink,
} from "./index.styled";

const MonsterList = ({ monsters, resource }) => {
  return (
    <MonstersContainer resource={resource}>
      <Link to={`/${resource}s/add`}>
        <MonsterAddButton>+Add new</MonsterAddButton>
      </Link>
      {monsters.map((monster) => (
        <Link key={monster.id} to={`/${resource}s/${monster.id}`}>
          <MonsterLink>{monster.name}</MonsterLink>
        </Link>
      ))}
    </MonstersContainer>
  );
};

export default MonsterList;
