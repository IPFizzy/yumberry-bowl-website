import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Opportunity } from "./components/Opportunity";
import { Benefits } from "./components/Benefits";
import { FranchiseModels } from "./components/FranchiseModels";
import { GettingStarted } from "./components/GettingStarted";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [territory, setTerritory] = useState("");

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <div className="overview-bar">
          <span>Hand-blended preparation</span>
          <span>Franchise training &amp; support</span>
          <span>Storefront &amp; mobile formats</span>
        </div>
        <Opportunity />
        <Benefits />
        <FranchiseModels onSelect={setTerritory} />
        <GettingStarted />
        <Contact territory={territory} onTerritoryChange={setTerritory} />
      </main>
      <Footer />
    </>
  );
}
