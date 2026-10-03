import Icon from "./Icon";
import SettingsMenu from "./SettingsMenu";

function SideButton({ darkMode, onToggleDarkMode }) {
  return (
    <div className="nav-icons">
      <button type="button" className="icon-btn" aria-label="Refresh">
        <Icon name="refresh" />
      </button>
      <SettingsMenu darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
      <button type="button" className="icon-btn" aria-label="Google apps">
        <Icon name="apps" />
      </button>
      <button type="button" className="icon-btn account-btn" aria-label="Account">
        <span className="account-avatar">U</span>
      </button>
    </div>
  );
}

export default SideButton;
