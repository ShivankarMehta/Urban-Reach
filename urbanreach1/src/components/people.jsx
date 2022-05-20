import React, { Component } from 'react';
import Footer from './Footer'
import Card from './CardAjay'
import sanjitsir from './images/sanjitsir.jpg'
import Ajay from './images/Ajay.png'
import Avinash from './images/Avinash.jpg'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import './people-style.css'

class People extends Component {
    state = { 
        
     } 
    render() { 
        return (
            <>
        <div className='container justify-content-center'>
            <div className='us' style={{textAlign: "center"}}>
            <h5>Our team</h5>
            <h2>We have a proven track record and vision to succeed</h2>
            </div>
        <div className="row">
        
        <div className="col-xl-4 col-md-6 Cards">
            <Card imgsrc={sanjitsir} img2src={img1} cardtitle={"Sanjit Kumar / CEO & CTO"}
            cardtext="B.tech (CSE) at IIT Dhanbad.Startup Experience at MBA ITB Indonesia. CCVP Coca-Cola YSF 2k19."/>
        
        </div>
        <div className="col-xl-4 col-md-6 Cards">
            <Card imgsrc={Ajay} img2src={img2} cardtitle={"Ajay Kumar"} 
            cardtext="3 yrs of corporate experience at IQVIA.Founder of 2 successfully running agri-based companies."/>
        </div>
        <div className="col-xl-4 col-md-6 Cards">
            <Card imgsrc={Avinash} img2src={img3} cardtitle= {"NHLC"}
            cardtext="Bachelor of Science at VKSU Bihar.4yrs+ of Marketing and Business Development Experience."/>
        </div>
        <div className="col-xl-4 col-md-6 Cards">
            <Card imgsrc={Avinash} img2src={img4} cardtitle= {"NHLC"}
            cardtext="BSc at VKSU Bihar.4yrs+ of Marketing and Business Development Experience."/>
        </div>
       
        </div>
        </div>
        <Footer/>
        </>
        );
    }
}
 
export default People;