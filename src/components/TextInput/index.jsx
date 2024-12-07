import "./TextInput.css";

const TextInput = ({ label, placeholder, required, value, onChange }) => {
  return (
    <div className="text-input">
      <label htmlFor="textInput">{label}</label>
      <input
        type="text"
        name="textInput"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default TextInput;
