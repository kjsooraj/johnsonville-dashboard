import { Button } from "@/components/core/Button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/core/Drawer";
import { Icon } from "@/components/core/Icon";
import Guide from "@/components/Guide";

export default function Header() {
  return (
    <header className="h-auto w-full border-b border-b-neutral-800 bg-neutral-900">
      <div className="container px-4">
        <div className="relative flex h-14 w-full items-center">
          <div className="flex items-center space-x-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button size="icon" className="bg-neutral-800">
                  <Icon icon="menu" width={16} height={16} />
                  <span className="sr-only">Menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent side="left">
                <Guide />
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}
