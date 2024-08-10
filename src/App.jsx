import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import FormInput from "../components/FormInput";
import HeaderSection from "../components/HeaderSection";

function App() {
  const [fieldsInfo, setFieldsInfo] = useState({ name: "lol" });
  const [status, setStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChangeForm(fieldName, value) {
    const newFieldsInfo = { ...fieldsInfo };
    newFieldsInfo[fieldName] = value;

    setFieldsInfo(newFieldsInfo);
  }

  function handleChangeHeader() {
    setStatus(!status);
  }

  function submit() {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1000);
  }

  return (
    <>
      <FormInput
        fieldName="name"
        value={fieldsInfo.name}
        handleChange={handleChangeForm}
      />
      <HeaderSection
        sectionName="pop"
        status={status}
        changeStatus={handleChangeHeader}
        submitted={submitted}
      />
      <button onClick={submit}>hello!</button>
    </>
  );
}

export default App;
