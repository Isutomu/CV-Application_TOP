export default function FilledForm({ formInfo }) {
  const formInfoCp = { ...formInfo };
  delete formInfoCp.id;

  return (
    <div className="filledForm">
      {Object.values(formInfoCp).map((info, index) => (
        <span key={index}>{info}</span>
      ))}
    </div>
  );
}
