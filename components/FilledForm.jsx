export default function FilledForm({ formInfo, editForm }) {
  return (
    <div className="filledForm">
      {Object.values(formInfo).map((info, index) => (
        <span key={index}>{info}</span>
      ))}
      <button className="editForm" onClick={editForm}>
        edit
      </button>
    </div>
  );
}
