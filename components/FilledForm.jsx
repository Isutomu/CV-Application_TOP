export default function FilledForm({ formInfo, editForm }) {
  return (
    <div className="filledForm">
      <div className="info">
        {Object.keys(formInfo).map((key, index) => (
          <span key={index} class="infoField" title={key}>
            {formInfo[key]}
          </span>
        ))}
      </div>
      <button className="editForm" onClick={editForm}>
        edit
      </button>
    </div>
  );
}
