import Preview from "./components/preview";
import Navbar from "./components/navbar";
import Creation from "./components/creation";
import Share from "./components/share";
import Analyse from "./components/analyse";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Preview />
      <Creation/>
      <Share/>
      <Analyse/>
      <Footer/>
      
    </main>
  );
}
