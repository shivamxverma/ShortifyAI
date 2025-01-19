import Image from "next/image";
import {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Apka apna dost</h1>
      <Button>Click me Yeah</Button>
      <UserButton/>
    </div>
  );
}
