import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import SectionForm from "../components/SectionForm";
import { sectionsData } from "../data/data";

function App() {
  return (
    <>
      {sectionsData.map((section, index) => (
        <SectionForm key={index} sectionInfo={section} />
      ))}
    </>
  );
}

export default App;
