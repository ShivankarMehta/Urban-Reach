import React from 'react';
import './card-style.css'



const Card = props => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="img1" src={props.imgsrc} alt="Card" />

            <div className="card-body">
                <h5 className="card-title">{props.cardtitle}</h5>
                <p className="card-text">{props.cardtext}</p>
                <a href={props.link} className=" btn btn-war">Linkedin</a>
            
               
            </div>
            <div className='socials'>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>

            );
    
}

            export default Card;