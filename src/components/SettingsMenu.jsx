import { useEffect, useRef, useState } from "react";

import Icon from "./Icon";

function SettingsMenu({ darkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  return (
    <div className="settings-wrap" ref={wrapRef}>
      <button
        type="button"
        className="icon-btn settings-btn"
        aria-label="Settings"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="settings" />
      </button>

      {open && (
        <div className="settings-menu" role="menu">
          <button
            type="button"
            className="settings-row"
            role="menuitemcheckbox"
            aria-checked={darkMode}
            onClick={onToggleDarkMode}
          >
            <span>Enable dark theme</span>
            <span
              className={`theme-toggle ${darkMode ? "on" : ""}`}
              aria-hidden="true"
            >
              <span className="theme-toggle-thumb" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default SettingsMenu;
