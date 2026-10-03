function Main({ children, sidebarCollapsed }) {
  return (
    <main
      className={`main-content ${sidebarCollapsed ? "main-sidebar-collapsed" : ""}`}
    >
      {children}
    </main>
  );
}

export default Main;
