export default function FormInput({ fieldName, value, handleChange }) {
  return (
    <>
      <label>{fieldName}</label>
      <input
        value={value}
        onChange={(e) => handleChange(fieldName, e.target.value)}
      />
    </>
  );
}
