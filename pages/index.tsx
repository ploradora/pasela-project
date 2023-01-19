import Nav from "../components/nav/Nav";
import SideLinks from "../components/SideLinks";
import MainContent from "../components/Main/MainContent";
import { ContextProvider } from "../components/Context/Context";

export default function Home() {
  return (
    <ContextProvider>
      <section className="flex items-start">
        <SideLinks />
        <div className="w-full">
          <div>
            <Nav />
          </div>
          <MainContent />
        </div>
      </section>
    </ContextProvider>
  );
}
