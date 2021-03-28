const MonsterDetails = () => {
  const monster = { name: "Bulbasor", description: "Nan" };

  return (
    <div>
      <h3>Name: {monster.name}</h3>
      <p>Description: {monster.description}</p>
      <button>Update</button>
    </div>
  );
};

export default MonsterDetails;
