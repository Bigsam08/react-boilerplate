/**
 * @description This is a reuseable button component
 * @param {*} type, event istener
 * @returns A button
 */

const Button = ({ children, type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`py-3.5 rounded-full w-full text-md bg-gradient-to-br from-[#22d3ee] via-[#3bc9db] to-[#002345] shadow-md inset-0 hover:text-gray-800 transition-all duration-500`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
