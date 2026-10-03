function Icon({ name, className = "", filled = false }) {
  return (
    <span
      className={`material-symbols-outlined icon ${filled ? "icon-filled" : ""} ${className}`.trim()}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

export default Icon;
