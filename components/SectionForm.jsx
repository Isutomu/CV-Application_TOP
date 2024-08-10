import { useState } from "react";
import FormInput from "./FormInput";
import HeaderSection from "./HeaderSection";

export default function SectionForm({ sectionInfo }) {
  const fieldsName = Object.keys(sectionInfo.fields);
  const initialData = fieldsName.reduce((data, field) => {
    data[field] = "";
    return data;
  }, {});

  const [formData, setFormData] = useState(initialData);
  const [sectionOpen, setSectionOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editing, setEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const toggleSectionOpen = () => setSectionOpen(!sectionOpen);
  const handleSubmit = (e) => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1000);
  };

  return (
    <section>
      <HeaderSection
        name={sectionInfo.name}
        sectionOpen={sectionOpen}
        toggleSectionOpen={toggleSectionOpen}
        submitting={submitting}
      />
      <div
        className="sectionInnards"
        style={{ visibility: sectionOpen ? "visible" : "hidden" }}
      >
        <button style={{ visibility: editing ? "hidden" : "visible" }}>
          +
        </button>
        <form>
          {fieldsName.map((field, index) => (
            <FormInput
              key={index}
              field={field}
              type={sectionInfo.fields[field]}
              value={formData[field]}
              handleChange={handleChange}
            />
          ))}
          <button onClick={handleSubmit}>submit</button>
        </form>
      </div>
    </section>
  );
}
