import Icon from "./Icon";

const NAV_ITEMS = [
  { id: "notes", icon: "lightbulb", label: "Notes", active: true },
  { id: "reminders", icon: "notifications", label: "Reminders" },
  { id: "labels", icon: "edit", label: "Edit labels" },
  { id: "archive", icon: "archive", label: "Archive" },
  { id: "trash", icon: "delete", label: "Trash" },
];

function AsideBar({ collapsed }) {
  return (
    <aside className={`aside-bar ${collapsed ? "aside-collapsed" : ""}`}>
      {NAV_ITEMS.map((item) => (
        <div
          key={item.id}
          className={`aside-item ${item.active ? "active" : ""}`}
          title={collapsed ? item.label : undefined}
        >
          <Icon name={item.icon} />
          <span className="aside-text">{item.label}</span>
        </div>
      ))}
    </aside>
  );
}

export default AsideBar;
