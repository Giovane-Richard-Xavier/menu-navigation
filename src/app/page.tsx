import Image from "next/image";
import { FirstMenu } from "./components/FirstMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#222327]">
      <FirstMenu />
    </main>
  );
}
