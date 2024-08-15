import { useState } from "react";
import FormInput from "./FormInput";
import HeaderSection from "./HeaderSection";
import FilledForm from "./FilledForm";
import { v4 as uuidv4 } from "uuid";

export default function SectionForm({ sectionInfo }) {
  const fieldsName = Object.keys(sectionInfo.fields);
  const initialData = fieldsName.reduce((data, field) => {
    data[field] = "";
    return data;
  }, {});

  const [formData, setFormData] = useState(initialData);
  const [sectionOpen, setSectionOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [filledForms, setFilledForms] = useState({});
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const toggleSectionOpen = () => setSectionOpen(!sectionOpen);
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);
    setFilledForms({ ...filledForms, [uuidv4()]: formData });
    setFormData(initialData);
    toggleForm(false);

    setTimeout(() => setSubmitting(false), 1000);
  };
  const handleEdit = (id) => {
    setFormData(filledForms[id]);

    const filledFormsCp = { ...filledForms };
    delete filledFormsCp[id];
    setFilledForms(filledFormsCp);
  };
  const toggleForm = (visible) => setEditing(visible);

  return (
    <div>
      <section>
        <HeaderSection
          name={sectionInfo.name}
          sectionOpen={sectionOpen}
          toggleSectionOpen={toggleSectionOpen}
          submitting={submitting}
        />
        <div className={sectionOpen ? "sectionInnards" : "hidden"}>
          <button
            onClick={() => toggleForm(true)}
            className={editing ? "hidden" : "addForm"}
          >
            +
          </button>
          <form className={editing ? "formInput" : "hidden"}>
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
          <div className="filledForms">
            {Object.keys(filledForms).map((id) => (
              <FilledForm
                key={id}
                formInfo={filledForms[id]}
                editForm={() => handleEdit(id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
