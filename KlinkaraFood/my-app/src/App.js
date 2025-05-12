import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './Components/navbar/navbar.css'; // Import CSS without renaming
import Navbar from './Components/navbar/navbar.jsx'; // Import Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/dashboard/dashboard.jsx';
import './Components/dashboard/dashboard.css'
import ProductCard from './Components/card/ProductCard.jsx';
import Chatbot from './Components/chatbot/chatbot.jsx';
import Footer from './Components/footer/footer.jsx';
import LoginAndSignup from './Components/profile/loginandsignup.jsx';
import './Components/profile/loginandsignup.css';
import './Components/Home/home.css';
import Pickles from './Components/pickles/pickles.jsx';
import Podis from './Components/podis/podis.jsx';
import Snacks from './Components/snacks/snacks.jsx';
import About from './Components/about/about.jsx';
import Sweets from './Components/sweets/sweets.jsx';
import AllProducts from './Components/allproducts/allproducts.jsx';

//import Home from './Components/Home/home.jsx';





function App() {
  return (
   
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Dashboard />
                <ProductCard />
                
              </>
            }
          />
          <Route path="/pickles" element={<Pickles />} />
          <Route path="/podis" element={<Podis />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/profile" element={<LoginAndSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/sweets" element={<Sweets/>}/>
          <Route path='/allproducts' element={<AllProducts/>} />
          

          
        </Routes>

        <Chatbot />

        <Footer />
      </div>
    </Router>
      


   
  );

}


export default App;
