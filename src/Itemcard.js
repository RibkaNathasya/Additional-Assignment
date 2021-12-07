import React from 'react';

const Itemcard = (props) => {
    return (
      
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
            <button class="btn btn-info">New ♡ ☰</button>
            
                <img src={props.img} class="card-img-top img-fluid"/>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <h5 class="card-text">{props.desc}</h5>
                        {/* <h5 className="cart-rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        </h5> */}

                        <p> ⭐⭐⭐⭐ </p>
                        <div className="btn-group" role="group" aria-label="basic example"></div>
                        <button class="btn btn-info">Rp. 12.000</button>
                        <button type="button" className="btn btn-info">🛒</button>             
                        </div>
                    </div>
            </div>
        
    );
};

export default Itemcard;