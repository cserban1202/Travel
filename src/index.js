import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderPart from './HeaderPart.jsx';
import HotelsCards from './HotelsCards';
import FooterSection from './FooterSection';
import BookingCards from './BookingCards';
import Form from './Form';
import HotelsCardsList from './HotelsCardsList';
import AdvantagesList from './AdvantagesList';
import Navbar from './NavBar';
import PayingSection from './PayingSection';
import ReviewSectionList from './ReviewSectionList';



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&family=Roboto:wght@100&display=swap');
</style>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <HeaderPart />
    <Navbar />
    <h1 className ="singleHeader">Enjoy a holiday!</h1>

      <div className = "display-options marginTop50">
          <div className = "container1-hotels-cards flex justify-content ">
            <HotelsCardsList/>
          </div>
      </div>

      <h2 className ="singleHeader fontSize">Why booking with us?</h2>

      <div className = "margin20right container2-booking-cards flex justify-content">
        <AdvantagesList />
      </div>

      <h3 className = "singleHeader fontSize">Here, your dreams come true...</h3>

      <div className = "form">
        <Form />
      </div>

      <div className = "payingSection">
        <PayingSection/>
      </div>
      
      <h3 className = "singleHeader fontSize">What customers think about us?..</h3>

      <div className = "reviewSectionStyle">
        <div className = "reviewSection displayFlex">
          <ReviewSectionList/>
        </div>
      </div>

      <FooterSection />

  
  </React.StrictMode>
);

reportWebVitals();

