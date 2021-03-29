import { Link } from "react-router-dom";

const MonsterList = ({ monsters, resource }) => {
  return (
    <div>
      <Link to={`/${resource}s/add`}>
        <button>+Add new</button>
      </Link>
      {monsters.map((monster) => (
        <Link key={monster.id} to={`/${resource}s/${monster.id}`}>
          {monster.name}
        </Link>
      ))}
    </div>
  );
};

export default MonsterList;
