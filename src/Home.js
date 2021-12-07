import React from 'react';
import Itemcard from './Itemcard';
import data from "./data";

const Home = () => {

    return (
        <>
        <div className="container pt-4">
            <div className="shadow p-2 bg-body rounded">
                <div class="d-flex flex-row justify-content-between">
                    <div class="">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted fw-bold" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ALL TYPES</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex justify-content-center">
                        <div>
                            <a className="nav-link text-muted fw-bold" aria-current="page" href="#!">Popular Products</a> 
                        </div>
                        <div>
                            <a className="nav-link text-muted fw-bold" href="#!">Low Price</a>
                        </div>
                        <div>
                            <a className="nav-link text-muted fw-bold" href="#!">High Price</a>
                        </div>
                    </div>
                    <div class="me-3">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted fw-bold" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRICE</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Designs</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Low Price</a></li>
                                    <li><a className="dropdown-item" href="#!">High Price</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
           
              <section className="py-4 container">
                  <div className="row justify-content-center">
                    {data.productData.map((item, index)=>{
                        return(
                            <Itemcard img={item.img} title={item.title}  key={index} />
                        )
                    })}
                      
                  </div>
              </section>
        </>
    );
};

export default Home;