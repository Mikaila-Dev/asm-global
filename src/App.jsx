import { Header } from "./Header.jsx"
import { HeroSection } from "./HeroSection.jsx"
import { ServicesSection } from "./ServicesSection.jsx"
import { WhyChooseUs } from "./WhyChooseUs.jsx"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{gap: "0px", display: "flex", flexDirection: "column"}}>
     <Header />
     <HeroSection />
     <ServicesSection />
     <WhyChooseUs />
    </div>
  )
}

export default App
