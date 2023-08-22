import { Outlet } from "react-router-dom";
import { mergeNames } from "@/lib/utils";
import { Separator } from "@/components/core/Separator";
import { SplitPane } from "@/components/core/SplitPane";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <SplitPane>
        <Header />
      </SplitPane>
      <Separator />
      <div
        className={mergeNames([
          "mx-auto",
          "flex",
          "w-full",
          "max-w-screen-2xl",
          "flex-1",
          "flex-row",
          "overflow-y-auto",
          "scrollbar",
          "scrollbar-track-rounded",
          "scrollbar-track-transparent",
          "scrollbar-thumb-color-divider",
          "scrollbar-thumb-rounded",
          "scrollbar-w-2.5",
          "hover:scrollbar-thumb-color-divider-dark",
        ])}
      >
        <aside
          className={mergeNames([
            "w-0",
            "overflow-y-auto",
            "scrollbar",
            "scrollbar-track-rounded",
            "scrollbar-track-transparent",
            "scrollbar-thumb-color-divider",
            "scrollbar-thumb-rounded",
            "scrollbar-w-2.5",
            "hover:scrollbar-thumb-color-divider-dark",
            "lg:w-60",
          ])}
        >
          <Guide />
        </aside>
        <Separator orientation="vertical" />
        <main
          className={mergeNames([
            "flex-1",
            "overflow-y-auto",
            "scrollbar",
            "scrollbar-track-rounded",
            "scrollbar-track-transparent",
            "scrollbar-thumb-color-divider",
            "scrollbar-thumb-rounded",
            "scrollbar-w-2.5",
            "hover:scrollbar-thumb-color-divider-dark",
          ])}
        >
          <Outlet />
        </main>
      </div>
      <Separator />
      <SplitPane>
        <Footer />
      </SplitPane>
    </div>
  );
}
