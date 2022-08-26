import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponents";
import { AddUser, UpdateUser } from "./utils/functions";

const initialValues = { username: "", phoneNumber: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(info);
    if (info.id) {
      UpdateUser(info);
    } else {
      AddUser(info);
    }
    setInfo(initialValues);
  };

  const editUser = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        handleSubmit={handleSubmit}
        setInfo={setInfo}
      />
      <Contacts editUser={editUser} />
      <ToastContainer/>
    </div>
  );
}

export default App;
