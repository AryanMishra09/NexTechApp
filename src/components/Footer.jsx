import styles from "../style";
import { discount } from "../assets";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>

        <div className="flex-[1]  justify-start mr-10">
          
          {/* LOGO  */}
          <div className="flex flex-row">
            <img 
              src={discount} 
              alt="nextTechPay" 
              className="w-[80px] h-[80px]"
            />
            <h1 className="text-gradient text-[50px] font-bold">Nex</h1>
            <span className="text-white text-[50px] font-bold">Tech</span>
            <h1 className="text-gradient text-[50px] font-bold">Pay</h1>

          </div>

          <div className="flex flex-col justify-start ml-[75px]">
            <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
        </div>

        {/* Div for LINKS  */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          
          {footerLinks.map((footerLink) => (
            <div 
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[24px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li 
                    key={link.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${(index !== footerLink.links.length -1) ? 'mb-4' : 'mb-0'} `}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2024 NexTechPay. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
