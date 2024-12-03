import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

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
    </>
  );
}

export default App;
