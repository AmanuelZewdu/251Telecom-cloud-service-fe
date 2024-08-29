import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ZadraLogo from '../../shared/images/zadara-logo.svg'
import SafaricomLogo from '../../shared/images/safaricom-logo.png'
import TouchnetLogo from '../../shared/images/touchnet-logo.png'
import RaxioLogo from '../../shared/images/raxio-logo.webp'


const AnimatedLogo = ({ src, alt }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className='partners-logo-img w-[100%]'
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
};
const OurPartners = () => {
  return (
   <section className="ourpartner-wrapper">
    <div className="ourpartner-container flex-col  align-middle my-16 px-10 md:px-20 lg:px-44">
    <h1 className="text-3xl font-Inter font-semibold text-primary-blue p-4 text-center">Our Partners</h1>
    <div className="partners-logo flex justify-between items-center gap-8">
      <AnimatedLogo src={RaxioLogo} alt="raxio-logo" />
      <AnimatedLogo src={SafaricomLogo} alt="safaricom-logo" />
      <AnimatedLogo src={TouchnetLogo} alt="touchnet-logo" />
      <AnimatedLogo src={ZadraLogo} alt="zadra-logo" />
    </div>

    </div>
   </section>
  )
}

export default OurPartners
