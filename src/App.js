import "./App.css"
import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
import Box from "./components/Box/Box"
import About from "./components/About/About"
import Features from "./components/Features/Features"
import OtherFeatures from "./components/OtherFeatures/OtherFeatures"
import WatchVideo from "./components/WatchVideo/WatchVideo"
import Screenshots from "./components/Screenshots/Screenshots"
import FunFacts from "./components/FunFacts/FunFacts"
import Price from "./components/Price/Price"
import Team from "./components/Team/Team"
import Faq from "./components/Faq/Faq"
import Logos from "./components/Logos/Logos"
import RecentNews from "./components/RecentNews/RecentNews"
import DownloadApp from "./components/DownloadApp/DownloadApp"
import Contact from "./components/Contact/Contact"
import Map from "./components/Map/Map"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react"
import Aos from "aos"
function App() {
  useEffect(()=>{
    Aos.init({})
  },[])
  return (
    <div className="">
      <section className="text-white">
        <Header />
        <Landing />
      </section>
      <section className="container-primary flex justify-between gap-5 my-36 group">
        <Box title="طراحی خلاقانه" icon="PiMagicWandThin" duration='500'/>
        <Box title="پشتیبانی رایگان" icon="GoRocket" duration='700'/>
        <Box title="طراحی اختصاصی" icon="IoDiamondOutline" duration='1300'/>
      </section>
      <About />
      <Features />
      <OtherFeatures />
      <WatchVideo />
      <Screenshots />
      <FunFacts />
      <Price />
      <Team />
      <Faq />
      <Logos />
      <RecentNews />
      <DownloadApp />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default App
