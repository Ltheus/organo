import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import TeamSection from "./components/TeamSection";
import { teamList } from "./utils/data/teams";
import Footer from "./components/Footer";

function App() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("EMPLOYEE_LIST");
    data !== null ? setEmployeeList(JSON.parse(data)) : setEmployeeList([]);
  }, []);

  return (
    <>
      <Banner />
      <Form
        onAddEmployee={(employee) => {
          setEmployeeList([...employeeList, employee]);
          localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(employeeList));
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
      <Footer />
    </>
  );
}

export default App;
