function Button({
  children,
  variant = "primary",
}) {

  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400",

    secondary:
      "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;