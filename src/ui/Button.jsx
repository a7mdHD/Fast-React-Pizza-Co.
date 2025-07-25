import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "foucs:ring-offset-2 text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase  text-stone-800 transition-colors duration-300 hover:bg-yellow-300  focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "foucs:ring-offset-2 text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase  text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800  focus:bg-stone-800 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
