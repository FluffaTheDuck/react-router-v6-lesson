import { getWorkshops } from "../api.js";

const Workshops = () => {
  const workshops = getWorkshops();

  return (
    <div className="container">
      <ul className="workshops">
        {workshops.map((workshop) => (
          <li key={workshop.id}>{workshop.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workshops;
