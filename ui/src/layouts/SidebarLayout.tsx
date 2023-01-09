import "assets/SidebarLayout.css";
import { Sidebar } from "components/Sidebar";

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="SidebarLayout-root">
      <Sidebar
        items={[
          {
            label: "Link One",
          },
          {
            label: "Link Two",
          },
          {
            label: "Link Three",
          },
          {
            label: "Link Four",
          },
        ]}
      />
      <main className="SidebarLayout-container">{children}</main>
    </div>
  );
};
