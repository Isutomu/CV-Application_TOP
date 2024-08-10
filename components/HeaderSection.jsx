export default function HeaderSection({
  sectionName,
  status,
  changeStatus,
  submitted,
}) {
  return (
    <div className={submitted ? "submitted" : ""}>
      <span>{sectionName}</span>
      <button onClick={changeStatus}>{status ? "▲" : "▼"}</button>
    </div>
  );
}
