import Nav from "../components/nav/Nav";
import SideLinks from "../components/SideLinks";
import MainContent from "../components/main/MainContent";

export default function Home() {
  return (
    <section className="flex items-start">
      <SideLinks />
      <div className="w-full">
        <div>
          <Nav />
        </div>
          <MainContent />
      </div>
      <div></div>
    </section>
  );
}
