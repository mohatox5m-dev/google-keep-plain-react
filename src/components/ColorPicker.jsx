import { NOTE_COLORS } from "../constants/noteColors";

function ColorPicker({ value, onChange, onClose }) {
  return (
    <div className="color-picker" role="listbox" aria-label="Note color">
      {NOTE_COLORS.map((color) => (
        <button
          key={color.id}
          type="button"
          role="option"
          aria-selected={value === color.id}
          className={`color-swatch ${value === color.id ? "selected" : ""}`}
          style={{ backgroundColor: color.bg }}
          title={color.label}
          onClick={() => {
            onChange(color.id);
            onClose?.();
          }}
        />
      ))}
      <button
        type="button"
        className="color-swatch color-swatch-none"
        title="Remove color"
        onClick={() => {
          onChange("default");
          onClose?.();
        }}
      >
        <span className="material-symbols-outlined">block</span>
      </button>
    </div>
  );
}

export default ColorPicker;
