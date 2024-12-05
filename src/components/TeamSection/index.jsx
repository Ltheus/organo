import Card from "../Card";
import "./TeamSection.css";

const TeamSection = ({ teamName, mainColor, accentColor }) => {
  const sectionStyle = {
    backgroundColor: accentColor,
  };

  const headerStyle = {
    borderColor: mainColor,
  };

  return (
    <section className="teamSection" style={sectionStyle}>
      <h3 style={headerStyle}>{teamName}</h3>
      <Card />
      <Card />
    </section>
  );
};

export default TeamSection;
