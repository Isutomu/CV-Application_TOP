export default function FormInput({ field, type, value, handleChange }) {
  return (
    <div>
      <label>
        {field}
        <input name={field} type={type} value={value} onChange={handleChange} />
      </label>
    </div>
  );
}
