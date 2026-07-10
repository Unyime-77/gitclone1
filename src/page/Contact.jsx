
import { motion } from 'framer-motion';
import ContactForm from '../component/Contact/Form';
import { ContactInfoCard } from '../component/Contact/Form';
import { SocialLinks } from '../component/Contact/Form';
import FAQ from '../component/Contact/FAQ';
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import '@/styles/Contact.css'


export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: 'Email Me',
      info: 'For general inquiries and project discussions',
      link: 'mailto:nsikanunyime3@gmail.com',
      linkText: 'nsikanunyime3@gmail.com'
    },
    {
      icon: <MapPin size={28} />,
      title: 'Location',
      info: 'Uyo, Nigeria',
      link: null,
      linkText: null
    },
    {
      icon: <Clock size={28} />,
      title: 'Response Time',
      info: 'Typical response within 24-48 hours',
      link: null,
      linkText: null
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Let\'s Chat',
      info: 'Connect with me on social media',
      link: null,
      linkText: null
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">Let's Connect</h1>
            <p className="hero-subtitle">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can work together to bring your vision to life</p>
              </motion.div>
              </div>
              </section>
              <section className='contact-main'>
                <div>
                <aside className="contact-sidebar"
                >
                    {contactInfo.map((Info,index)=>(
                       <ContactInfoCard 
                       key={index}
                       icon={Info.icon}
                       title={Info.title}
                       info={Info.info}
                       link={Info.link}
                       linkText={Info.linkText}
                       index={index}
                       />
                    ))}
                </aside>
                </div>
                <div className="main-container">
                    <ContactForm/><br />
                    <FAQ/>
                    </div>
              </section>
              <SocialLinks/>
              </div>
  )
}