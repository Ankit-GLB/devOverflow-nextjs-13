import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1 className="h1-bold">all the tailwind css is working good!</h1>
      <h2 className="h2-bold">all the tailwind css is working good!</h2>
      <h3 className="h3-bold">all the tailwind css is working good!</h3>
    </div>
  );
}
