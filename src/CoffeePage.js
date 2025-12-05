import React from "react";
import "./coffeepage.css";

export default function CoffeePage({open, setFlagCoffeePage}) {
  return (
    <div className={`coffee-page ${open ? "open" : ""}`}>

    
      <div className="back-row">
        <span className="back-arrow">←</span>
        <span className="back-text">BACK TO MENU</span>
      </div>

      <div className="content">
        

        <div className="coffee-image">
          <img src="your-image.jpg" alt="coffee" />
        </div>

        <div className="info">

          <div className="header-status">
            <div className="order-status">
              <div className="status-icon"></div>
              <span>ORDER STATUS</span>
              <div className="status-count">2</div>
            </div>
          </div>

          <h1 className="title">Cinnamon and Cocoa</h1>
          <p className="subtitle">
            A single espresso shot poured into hot foamy milk, with the surface topped 
            with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup.
          </p>


          <div className="section-title">SIZE</div>
          <div className="options-row">
            <div className="option selected">
              <div className="cup-icon"></div>
              SHORT
            </div>
            <div className="option">
              <div className="cup-icon"></div>
              TALL
            </div>
            <div className="option">
              <div className="cup-icon"></div>
              GRANDE
            </div>
            <div className="option">
              <div className="cup-icon"></div>
              VENTI
            </div>
          </div>

          <div className="section-title">EXTRA</div>
          <div className="options-row">
            <div className="option-pill selected">SUGAR</div>
            <div className="option-pill">MILK</div>
          </div>


          <div className="section-title">MILK TYPE</div>
          <div className="options-row">
            <div className="option-pill">OAT MILK</div>
            <div className="option-pill">SOY MILK</div>
            <div className="option-pill selected">ALMOND MILK</div>
          </div>

          <div className="price-row">
            <div className="price">₹99</div>
            <div className="counter">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>


          <button className="order-btn">PLACE ORDER</button>

        </div>
      </div>

    </div>
  );
}