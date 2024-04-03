import { FormFieldProps } from "../../types/types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  value,
}) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="font-[400]" htmlFor={name}>
        {name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}:
      </label>
      <input
        className="bg-gray-800 text-white p-2 rounded-md font-[300]"
        type={type}
        placeholder={placeholder}
        defaultValue={Array.isArray(value) ? value.join(", ") : value}
        {...register(name, { required: true })}
      />
      {error && (
        <span className="error-message mt-1 text-xs font-[300] text-red-400">
          {error.message}
        </span>
      )}
    </div>
  );
};
export default FormField;
