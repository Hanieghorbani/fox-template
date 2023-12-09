import "./App.css"
import Header from "./components/Header/Header"
import Landing from "./components/Landing/Landing"
import Box from "./components/Box/Box"

function App() {
  return (
    <div className="">
      <section className="text-white">
        <Header />
        <Landing />
      </section>
      <section className="container-Primary flex justify-between gap-5 mt-10">
        <Box title="طراحی خلاقانه" icon="FaMagic" />
        <Box title="پشتیبانی رایگان" icon="FaRocket" />
        <Box title="طراحی اختصاصی" icon="IoDiamondOutline" />
      </section>
    </div>
  )
}

export default App
