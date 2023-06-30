import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import CacheBuster from 'react-cache-buster'
import { Home, OurWork, Services, WorkItem, Pricing } from './pages';
import { Navbar } from './components';
import { HelmetProvider } from 'react-helmet-async'
import { version } from '../package.json'
import Proto from './pages/PrototypeOurWork';
import ContactUs from './pages/ContactUs';
import WebDesign from './pages/WebDesign';
import AboutUs from './pages/AboutUs';

const Footer = loadable(() => import('./components/Footer'))
const ContactButton = loadable(() => import('./components/ContactButton'))
const Spinner = loadable(() => import('./helpers/Spinner'))

function App() {
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={true}
      isVerboseMode={false}
      loadingComponent={<Spinner />}
      metaFileDirectory={'.'}
    >
      <HelmetProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Services/" element={<Services />} />

              <Route path="/about-us/" element={<AboutUs />} />

              <Route path="/web-design/" element={<WebDesign />} />
              <Route path="/branding/" element={<Proto />} />
              <Route path="/search-engine-optimization/" element={<Proto />} />
              <Route path="/backend-support/" element={<Proto />} />
              <Route path="/website-maintainence/" element={<Proto />} />

              <Route path="/blueprint/" element={<Proto />} />
              <Route path="/case-studies/" element={<Proto />} />
              <Route path="/blog/" element={<Proto />} />
              <Route path="/web-ambrosia-client-support/" element={<Proto />} />



              <Route path="/case-studies/" element={<Proto />} />
              <Route path="/case-studies/:id" element={<WorkItem />} />
              <Route path="/price-guide/" element={<Pricing/>} />

              <Route path="/contact-us/" element={<ContactUs />} />


              <Route path="/privacy-policy/" element={<Proto />} />
              <Route path="/terms-of-service/" element={<Proto />} />
              <Route path="/accessibility-statement/" element={<Proto />} />

              <Route path="/start-a-project/" element={<Proto />} />

            </Routes>
            <Footer />
            <ContactButton />
          </div>
        </Router>
      </HelmetProvider>
    </CacheBuster>
  )
}

export default App