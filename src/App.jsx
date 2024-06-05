import Asked from "./Component/Asked/Asked"
import Attractive from "./Component/Attractive/Attractive"
import BackTop from "./Component/BackTop/BackTop"
import Banner from "./Component/Banner/Banner"
import Choose from "./Component/Choose/Choose"
import Clients from "./Component/Clients/Clients"
import Compare from "./Component/Compare/Compare"
import Contact from "./Component/Contact/Contact"
import Deal from "./Component/Deal/Deal "
import Footer from "./Component/Footer/Footer"
import Navbar from "./Component/Navbar/Navbar"
import Preloader from "./Component/Preloader/Preloader"
import Product from "./Component/Product/Product"
import Prolab from "./Component/Prolab/Prolab"
import Subscribe from "./Component/Subscribe/Subscribe"
import Watch from "./Component/Watch/Watch "
function App() {
  return (
    <div className="overflow-hidden">
      <Preloader></Preloader>
      <BackTop></BackTop>
      <Navbar></Navbar>
      <Banner></Banner>
      <Prolab></Prolab>
      <Watch></Watch>
      <Attractive></Attractive>
      <Deal></Deal>
      <Product></Product>
      <Choose></Choose>
      <Compare></Compare>
      <Clients></Clients>
      <Subscribe></Subscribe>
      <Asked></Asked>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
