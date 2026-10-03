import Icon from "./Icon";
import KeepLogo from "./KeepLogo";

function Header({ onMenuClick }) {
  return (
    <div className="logo-area">
      <button
        type="button"
        className="icon-btn menu-btn"
        aria-label="Main menu"
        onClick={onMenuClick}
      >
        <Icon name="menu" />
      </button>
      <div className="keep-logo">
        <KeepLogo />
        <h2>Keep</h2>
      </div>
    </div>
  );
}

export default Header;
