

import Head from "next/head";
import PrinterGuide from "./content/PrinterGuide";
import PrinterSetup from "./content/PrinterSetup";
import Solutions from "./content/Solutions";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Support from "./content/Support";
import Chatlink from "./content/Chatlink";
import Avoid from "../components/Avoid";
import Digonode from "../components/Digonode";
import Technicians from "../components/Technicians";
import Assistance from "../components/Assistance";
import Helppage from "../components/Helppage";
import ChatSection from "../components/ChatSection";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import CustomNavbar from "../components/CustomNavbar";


// import './globals.css'
function Home() {
  return (
    <>
      <CustomNavbar/>
      <Header/>
      <PrinterSetup />
      <Digonode/>
      {/* <ChatSection/> */}
      <Technicians/>
      <Assistance/>
      <Avoid/>
      <Helppage/>
      <Support />
      <Solutions />
      <PrinterGuide />
      <FooterSection/>
     
    </>
  );
}

export default Home;