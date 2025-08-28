import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react"

export default function ModeToggle() {
  return (
    <Button variant="destructive" size="icon" className="h-9 w-9">
      <Sun className="h-[1.2rem] w-[1.2rem]  hover:text-primary transition-colors duration-200"/> 
    </Button>
     
  )
}
