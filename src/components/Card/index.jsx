import "./Card.css";

const Card = ({ name, position, image, headerColor }) => {
  return (
    <div className="card">
      <div className="cardHeader" style={{ backgroundColor: headerColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="cardFooter">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Card;
