import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks,socialMedia } from '../Constants/Index'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md-flex-row flex-col mb-8 w-full`}>
         <div  className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className='w-[260px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph } mt-4 max-w-[310px]`}>A new way to make the payemnts esay reliable and secure</p>
         </div>
         <div className='flex-1.5 w-full flex flex-row justify-between flex-wrap md-mt-0 mt-10'>
          {
            footerLinks.map((footerlink)=>(
            
                <div key={footerlink.key} className='flex flex-col ss:mu-0 my-4 min-w-[150px]'>
                  <h4 className='font-poppins font-medium text-[18px ] leading-[27px] text-white'>{footerlink.title}</h4>
                  <ul className='list-none mt-4'>{
                    footerlink.links.map((link,index)=>(
                      <li className={`font-poppins font-normal text-[16px] leading-[24px] ${index !==footerlink.length-1?"mb-4":"mb-0"} text-dimWhite hover:text-secondary cursor-pointer` } key={link.name}>
                       {link.name}
                      </li>
                    ))
                    }</ul>
                </div>
            )
            )
          }
         </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
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

export default Footer
