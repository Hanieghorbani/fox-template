import "./App.css"
import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
import Box from "./components/Box/Box"
import About from "./components/About/About"
import Features from "./components/Features/Features"
import OtherFeatures from "./components/OtherFeatures/OtherFeatures"
import WatchVideo from "./components/WatchVideo/WatchVideo"
import Screenshots from "./components/Screenshots/Screenshots"
function App() {
  return (
    <div className="">
      <section className="text-white">
        <Header />
        <Landing />
      </section>
      <section className="container-primary flex justify-between gap-5 mt-10 group mb-10">
        <Box title="طراحی خلاقانه" icon="PiMagicWandThin" />
        <Box title="پشتیبانی رایگان" icon="GoRocket" />
        <Box title="طراحی اختصاصی" icon="IoDiamondOutline" />
      </section>
      <About />
      <Features />
      <OtherFeatures />
      <WatchVideo />
      <Screenshots />
    </div>
  )
}

export default App
