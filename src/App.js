import { useEffect,useState } from "react"
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
import ScrollToTop from "./components/ScrollToTopbar/ScrollToTopbar"
import AOS from "aos"
function App() {
  useEffect(()=>{
    AOS.init({})
  },[])
  const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", handleShowScroll)
    return () => {
      window.removeEventListener("scroll", handleShowScroll)
    }
  }, [])

  const handleShowScroll = () => {
    if (window.scrollY > 400) {
      setIsScrollBtnVisible(true)
    } else {
      setIsScrollBtnVisible(false)
    }
  }
  return (
    <div className="ov overflow-x-hidden">
      <section className="text-white">
        <Header />
        <Landing />
      </section>
      <section className="container-primary flex sm:flex-col md:flex-row justify-between gap-5 sm:my-14 lg:my-36 group">
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
      {isScrollBtnVisible && <ScrollToTop />}
    </div>
  )
}

export default App
