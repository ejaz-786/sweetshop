import React, { useContext } from "react";
import Navbar from "./Navbar";
import "../CSS/Product.css";
import { context } from "../CONTEXT/Context";

const Product = () => {
  let context2 = useContext(context);

  return (
    <>
      <Navbar />
      <div className="main-product-div">
        <div className="product-header">
          <h1>
            <img
              src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/head_border_top.png"
              alt="asd"
            />
          </h1>
          <h1> Our Products </h1>
          <h1>
            <img
              src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/head_border_top.png"
              alt="asd"
            />
          </h1>
        </div>
{/* 
        <div className="location">
          <p>HOME/PRODCUTS</p>
        </div> */}

        <div className="product-div">
          <div className="filter-div">
            <h2 >Filter by Category:~</h2>

            <div className="categ-div">
              <div>
                <button>Laddo</button>
              </div>
              <div>
                <button>Halwa</button>
              </div>
              <div>
                <button>Gulabjamun</button>
              </div>
           
            </div>

            <h2>Sort By Price:~</h2>
            <div className="sort-by-price-div">
              <div><button>High to Low</button></div>
              <div><button>Low to High</button></div>
            </div>

          </div>

          <div className="product-section">
            <div className="inp-div">
              <input
                id="search-inp"
                placeholder="Search Your Favourite Sweets"
              />
              {/* <button id="search">FIND YOUR TASTE</button> */}
            </div>

            <div className="card-div">
              {context2.data.map((val) => {
                return (
                  <>
                    <div id="card-1">
                      <div className="card-img">
                        <img
                          src={val.image}
                          alt="as"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="prod-name">
                        <h1>{val.name}</h1>
                      </div>
                      <div className="card-detail">
                        <div>
                          <span id="off-price">Price:{val.price}.00 ₹ </span>

                          <span id="price"><s>220.00₹</s></span>
                        </div>
                        <div>
                          <h1>Rating:{val.rating}</h1>
                       
                        </div>
                      </div>
                      <div className="add-to-cart-div">
                        <button className="add-cart-btn">Add To Cart</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
