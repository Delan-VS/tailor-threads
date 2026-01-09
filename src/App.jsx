import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import Story from "./Pages/Story.jsx";
import Collection from "./Pages/Collection.jsx";
import CollectionSection from "./Pages/CollectionSection.jsx";
import CollectionDetails from "./Pages/CollectionDetails.jsx";
import InnerCollection from "./Pages/InnerCollection.jsx";
import Contact from "./Pages/Contact.jsx";
import Gallery from "./Pages/Gallery.jsx";


const Layout = ({ children }) => {
  const location = useLocation();

  
  const hideNavbarRoutes = ["/", "/collectionSection"];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
};


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collectionSection" element={<CollectionSection />} />
          <Route path="/collectionDetails" element={<CollectionDetails />} />
          <Route path="/innerCollection" element={<InnerCollection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
