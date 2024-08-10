export default function HeaderSection({
  name,
  sectionOpen,
  toggleSectionOpen,
  submitting,
}) {
  return (
    <div className={submitting ? "submitting" : ""}>
      <span>{name}</span>
      <button onClick={toggleSectionOpen}>{sectionOpen ? "▲" : "▼"}</button>
    </div>
  );
}
