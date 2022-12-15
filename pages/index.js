import CardContext from "../components/CardContext";
import Nav from "../components/nav/Nav";
import SideLinks from "../components/SideLinks";
import MainContent from "../components/main/MainContent";
import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("music");

  return (
    <CardContext.Provider value={{ currentTab, setCurrentTab }}>
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
    </CardContext.Provider>
  );
}
