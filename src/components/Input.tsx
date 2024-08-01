interface InputBox {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  className: string;
}
const Input = ({ type, placeholder, value, onChange, className }: InputBox) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`rounded-full w-full border border-gray-300 dark:border-gray-500 bg-white text-black dark:bg-gray-800 dark:text-white pl-2 py-2 ${className}`}
    />
  );
};

export default Input;
