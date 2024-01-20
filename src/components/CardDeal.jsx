import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

function CardDeal() {
  return (
    <section className={layout.section}>

      {/* Div for content */}
      <div className={layout.sectionInfo}>  
        <h2 className={styles.heading2}>
          Find a better card deal
          <br className="sm:block hidden"/>
          in a few easy steps.
        </h2>

        <p className={`${styles.paragraph} m-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles='mt-10'/>
      </div>

      {/* Div for card image */}
      <div className={layout.sectionImg}>
        <img 
          src={card} 
          alt="card" 
          className=""
        />
      </div>

 
    </section>
  )
}

export default CardDeal
