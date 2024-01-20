
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";


const App = () => {
  return (
    <div className="bg-primary w-full  px-[100px] overflow-hidden">

      {/* Navbar */}

      <div className={`${styles.paddingX} ${styles.flexCenter} `}>

        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>

      </div>


      {/* the main frontpage design */}
      <div className={`${styles.flexStart} bg-primary`}>

        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>

      </div>


      {/* all the different secionis of the page  */}
      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>

        <div className={`${styles.boxWidth}`}>
          <Stats/>

          <Business/>
          
          <Billing/> 

          <CardDeal/> 
          
          <Testimonials/>
          
          <Clients/>
          
          <CTA/> 

          <Footer/> 

        </div>

      </div>


    </div>
  )
}

export default App

