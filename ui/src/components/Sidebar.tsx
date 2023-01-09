import "assets/Sidebar.css";

interface ISidebarItem {
  icon?: React.ReactElement<SVGAElement>;
  label: string;
}
const SidebarItem = ({ icon, label }: ISidebarItem) => {
  return (
    <li className="SidebarItem-root">
      {icon}
      {label}
    </li>
  );
};

interface SidebarProps {
  items: ISidebarItem[];
}
export const Sidebar = ({ items }: SidebarProps) => {
  return (
    <div className="Sidebar-root">
      <h1>Sidebar</h1>
      <nav className="Sidebar-nav-root">
        {items.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
        <nav className="Sidebar-nav-bottom">
          <li>Home</li>
          <li>About</li>
          <li>Other Things</li>
        </nav>
      </nav>
    </div>
  );
};
