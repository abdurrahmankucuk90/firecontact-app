import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponents";
import { AddUser } from "./utils/functions";

const initialValues = { username: "", phoneNumber: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    AddUser(info);
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        handleSubmit={handleSubmit}
        setInfo={setInfo}
      />
      <Contacts />
    </div>
  );
}

export default App;
