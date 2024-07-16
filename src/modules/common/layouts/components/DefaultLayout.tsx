import { EARN_GAME_PAGE_PATH } from "@/modules/earn-game/routes/constants";
import { FRINEDS_PAGE_PATH } from "@/modules/friends/routes/constants";
import { PROPERTY_PAGE_PATH } from "@/modules/property/routes/constants";
import { TASKS_PAGE_PATH } from "@/modules/tasks/routes/constants";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const navItems = [
    { label: "earn", path: EARN_GAME_PAGE_PATH },
    { label: "property", path: PROPERTY_PAGE_PATH },
    { label: "tasks", path: TASKS_PAGE_PATH },
    { label: "friends", path: FRINEDS_PAGE_PATH },
  ];

  return (
    <div className="h-screen text-main-text flex flex-col items-center overflow-hidden relative">
      <div className="flex-1 w-full bg-main-bg overflow-auto p-2 flex flex-col">
        {children}
      </div>
      <nav className="bg-main-bg w-full flex gap-2 p-2 justify-evenly">
        {navItems.map(({ path, label }) => (
          <Link
            to={path}
            key={path}
            className="bg-primary rounded w-20 h-12 flex items-center justify-center"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
