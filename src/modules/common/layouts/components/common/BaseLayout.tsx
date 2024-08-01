import { CSSProperties, ReactNode } from "react";
import { NAVBAR_HEIGHT } from "../../constants";
import { NavBar } from "./NavBar";

export const BaseLayout = ({
  children,
  contentStyle,
}: {
  children: ReactNode;
  contentStyle?: CSSProperties;
}) => {
  return (
    <>
      <section
        style={{ paddingBottom: NAVBAR_HEIGHT + "px" }}
        className="h-[--tg-viewport-stable-height] w-full"
      >
        <main className="h-full w-full overflow-y-auto overflow-x-hidden">
          <div style={contentStyle} className="h-full w-full p-2 pt-4">
            {children}
          </div>
        </main>
      </section>

      <NavBar />
    </>
  );
};