import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const fontWeight = "font-bold";
  return (
    <div className="">
      <div className={cn("border-2 font-sans", fontWeight)}>
        testing classes
      </div>
      <UserButton afterSignOutUrl="/`" />
      <ModeToggle />
    </div>
  );
}
