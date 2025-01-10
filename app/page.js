import Preview from "./components/preview";
import Navbar from "./components/navbar";
import Creation from "./components/creation";
import Share from "./components/share";
import Analyse from "./components/analyse";
import Footer from "./components/footer";
import { CopilotPopup } from "@copilotkit/react-ui";

export default function Home() {

  return (
    <main className="relative">
      <Navbar />
      <Preview />
      <Creation/>
      <Share/>
      <Analyse/>
      <Footer/>
      <CopilotPopup
        className="z-[999]"
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
        }}
      />
    </main>
  );
}
