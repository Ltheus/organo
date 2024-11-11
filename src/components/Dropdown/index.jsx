import "./Dropdown.css";

const Dropdown = ({ label, list }) => {
  return (
    <div className="dropdown">
      <label htmlFor="selector">{label}</label>
      <select name="selector">
        {list.map((item) => {
          return <option key={item}> {item} </option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
