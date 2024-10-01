import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Card = ({ children, direction }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: direction === 'left' ? -100 : 100 });
    }
  }, [inView, controls, direction]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="whychooseus-card flex-col bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white flex gap-4 p-4 rounded-[1rem]"
    >
      {children}
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
   <section className='whychooseus-wrapper'>
 <div className='whychooseus-container flex-col px-10 lg:px-44 my16 mb-16'>
 <h1 className='text-3xl font-Inter text-center lg:text-start font-semibold text-primary-blue p-4'>Why Choose Us</h1>
   <div className='whychooseus-card-container text-[#f5f5f5] grid grid-cols-1 lg:grid-cols-2 p-4 justify-between gap-16'>
      <Card direction="left">
        <h4 className='text-2xl'>Advanced Cloud Console</h4>
        <p>Our cloud console offers a powerful and feature-rich experience, providing users with enhanced control and efficiency.</p>
      </Card>
      <Card direction="right">
        <h4 className='text-2xl'>Local Currency Payments</h4>
        <p>We offer premier cloud services with the convenience of payment in Ethiopian Birr (ETB), making transactions easier for local businesses.</p>
      </Card>
      <Card direction="left">
        <h4 className='text-2xl'>Data Sovereignty and Security</h4>
        <p>We ensure data sovereignty by storing all data within Ethiopia at a Tier 3 data center (Raxio), adhering to the highest security standards.</p>
      </Card>
      <Card direction="right">
        <h4 className='text-2xl'>Seamless Online Payments</h4>
        <p>Our customers can manage payments entirely online, eliminating the need for physical visits to our office, saving time and resources.</p>
      </Card>
    </div>
    </div>
    </section>
  );
};

export default WhyChooseUs;