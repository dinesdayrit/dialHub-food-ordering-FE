import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span>Welcome to DialHub</span>
        </SheetTitle>
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500">Log in</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
