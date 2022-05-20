import React from 'react';
import './cardAjay-style.css'



const Card = props => {
    return (
        <div className="cardi" style={{width: "20rem" }}>
            <div class="parent">
                <img class="image1" src={props.img2src} alt="img1" />
                <img class="image2" src={props.imgsrc} alt='img2'/>
            </div>


                <div className="card-body">
                    <h5 className="card-title">{props.cardtitle}</h5>
                    <p className="card-text">{props.cardtext}</p>
                    <a href={props.link} className=" btn btn-primary">Linkedin</a>

                </div>
        </div>
            );
    
}

export default Card;