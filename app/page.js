import Image from "next/legacy/image";
import Preview from "./components/preview";
import Navbar from "./components/navbar";
import Creation from "./components/creation";
import Share from "./components/share";
import Analyse from "./components/analyse";


export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Preview />
      <Creation/>
      <Share/>
      <Analyse/>
      
    </main>
  );
}
