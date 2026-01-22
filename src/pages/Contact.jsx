import HeaderTop from '../components/HeaderTop'
import HeaderMain from '../components/HeaderMain'
import ContactBanner from '../components/ContactBanner'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <HeaderTop />
      <HeaderMain />
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact

