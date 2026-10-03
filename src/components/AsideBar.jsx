function AsideBar() {

    return (
        <aside className="aside-bar">
            <div className="aside-item active">
                <span>💡</span>
                <span className="aside-text">Notes</span>
            </div>

            <div className="aside-item">
                <span>🔔</span>
                <span className="aside-text">Reminders</span>
            </div>

            <div className="aside-item">
                <span>✏️</span>
                <span className="aside-text">Edit labels</span>
            </div>

            <div className="aside-item">
                <span>📦</span>
                <span className="aside-text">Archive</span>
            </div>

            <div className="aside-item">
                <span>🗑️</span>
                <span className="aside-text">Trash</span>
            </div>
        </aside>

    );

}

export default AsideBar;
