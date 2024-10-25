import "./TextInput.css";

const TextInput = ({ label, placeholder }) => {
  return (
    <div className="text-input">
      <label htmlFor="textInput">{label}</label>
      <input type="text" name="textInput" placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
