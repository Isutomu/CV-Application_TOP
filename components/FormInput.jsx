export default function FormInput({ field, type, value, handleChange }) {
  return (
    <div>
      <label>
        <input
          name={field}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={field}
        />
      </label>
    </div>
  );
}
