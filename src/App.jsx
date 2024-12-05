import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import TeamSection from "./components/TeamSection";
import { teamList } from "./utils/data/teams";

function App() {
  const [employeeList, setEmployeeList] = useState([]);

  return (
    <>
      <Banner />
      <Form
        onAddEmployee={(employee) => {
          setEmployeeList([...employeeList, employee]);
          console.log(employee, employeeList);
        }}
      />
      {teamList.map((team) => (
        <TeamSection
          key={team?.name}
          teamName={team?.name}
          mainColor={team?.mainColor}
          accentColor={team?.accentColor}
          employeeList={employeeList.filter(
            (employee) => employee?.team === team?.name
          )}
        />
      ))}
    </>
  );
}

export default App;
