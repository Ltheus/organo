import "./Dropdown.css";

const Dropdown = ({ label, list, required, value, onChange }) => {
  return (
    <div className="dropdown">
      <label htmlFor="selector">{label}</label>
      <select
        name="selector"
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {list.map((item) => {
          return <option key={item?.name}> {item?.name} </option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
