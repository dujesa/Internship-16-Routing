import { Link } from "react-router-dom";

const MonsterList = ({ monsters }) => {
  return (
    <div>
      <Link to="/digimons/add">
        <button>+Add new</button>
      </Link>
      {monsters.map((monster) => (
        <div key={monster.id}>{monster.name}</div>
      ))}
    </div>
  );
};

export default MonsterList;
