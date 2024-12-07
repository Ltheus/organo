import Card from "../Card";
import "./TeamSection.css";

const TeamSection = ({ teamName, mainColor, accentColor, employeeList }) => {
  const sectionStyle = {
    backgroundColor: accentColor,
  };

  const headerStyle = {
    borderColor: mainColor,
  };

  return (
    employeeList.length > 0 && (
      <section className="teamSection" style={sectionStyle}>
        <h3 style={headerStyle}>{teamName}</h3>
        <div className="employees">
          {employeeList.map((employee) => (
            <Card
              key={employee?.name}
              name={employee?.name}
              position={employee.position}
              image={employee?.imageUrl}
              headerColor={mainColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default TeamSection;
