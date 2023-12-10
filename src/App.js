import "./App.css"
import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
import Box from "./components/Box/Box"
import About from "./components/About/About"
function App() {
  return (
    <div className="">
      <section className="text-white">
        <Header />
        <Landing />
      </section>
      <section className="container-Primary flex justify-between gap-5 mt-10 group mb-10">
        <Box title="طراحی خلاقانه" icon="PiMagicWandThin" />
        <Box title="پشتیبانی رایگان" icon="GoRocket" />
        <Box title="طراحی اختصاصی" icon="IoDiamondOutline" />
      </section>
      <About />
    </div>
  )
}

export default App
