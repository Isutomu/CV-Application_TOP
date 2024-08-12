import { useState } from "react";
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
