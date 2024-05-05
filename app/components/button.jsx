"use client";

const Button = ({ label, next, clickedOption, disabled }) => {
  const handleClick = () => {
    clickedOption(next, label);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${
        disabled
          ? "bg-slate-200 text-slate-400"
          : "bg-blue-600 hover:bg-blue-700 text-slate-50"
      }  font-bold uppercase py-2 px-4 mb-3 min-w-full rounded-full`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
