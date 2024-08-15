export default function HeaderSection({
  name,
  sectionOpen,
  toggleSectionOpen,
  submitting,
}) {
  return (
    <button
      className={(submitting ? "submitting" : "") + " sectionHeader"}
      onClick={toggleSectionOpen}
    >
      <span>{name}</span>
      <span>{sectionOpen ? "▲" : "▼"}</span>
    </button>
  );
}
