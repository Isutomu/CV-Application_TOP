import { useState } from "react";
// import "./App.css";

import SectionForm from "../components/SectionForm";
import { sectionsData } from "../data/data";

function App() {
  return (
    <div className="formSections">
      {sectionsData.map((section, index) => (
        <SectionForm key={index} sectionInfo={section} />
      ))}
    </div>
  );
}

export default App;
