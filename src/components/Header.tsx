import { Avatar, AvatarFallback, AvatarImage } from "@/components/core/Avatar";
import { Button } from "@/components/core/Button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/core/Drawer";
import { Icon } from "@/components/core/Icon";
import Guide from "@/components/Guide";

export default function Header() {
  return (
    <header className="h-auto w-full bg-color-primary">
      <div className="container px-4">
        <div className="relative flex h-14 w-full items-center">
          <div className="flex items-center space-x-4">
            <Button variant="default">default b</Button>
            <Button variant="secondary">secondary b</Button>
            <Button variant="destructive">destructive b</Button>
            <Button variant="ghost">ghost b</Button>
            <Button variant="link">link b</Button>
            <Button variant="outline">outline b</Button>
            <Drawer>
              <DrawerTrigger asChild>
                <Button size="icon">
                  <Icon icon="menu" width={16} height={16} />
                  <span className="sr-only">Menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent side="left" className="max-w-xs">
                <Guide />
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Button size="icon" asChild>
              <Avatar className="rounded-full border-color-divider">
                <AvatarImage src="" alt="" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
