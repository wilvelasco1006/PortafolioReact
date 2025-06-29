import './Card.css'
import React from 'react';

const Card = () => {

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <p>Front Side</p>
                </div>
                <div class="card-back">
                    <p>Back Side</p>
                </div>
            </div>
        </div>
    );
}

export default Card;