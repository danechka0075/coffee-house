import React from "react";
import "./coffeepage.css";
import { toggleFlagCoffeePage } from './App.js'

export default function CoffeePage({open, setFlagSideBar, setFlagCoffeePage, Coffee, setCoffee, AddCoffeeInBascket}) {
    const [butExtra, setButExtra] = React.useState("REGULAR MILK");
    const [butSize, setButSize] = React.useState("SHORT");
    const [butMilk, setButMilk] = React.useState("NO ADDIVITES");
    if (!Coffee) return null;
    console.log(Coffee.name);
    return (
    <div className={`coffeepage ${open ? "open" : ""}`}>
      <header className="header">
        <div className="ButtonBack" onClick={()=>toggleFlagCoffeePage(setFlagCoffeePage)}>
            <span className="back-arrow">←</span>
            <span className="back-text">BACK TO MENU</span>
        </div>
        <div className="basketBox" onClick={()=>setFlagSideBar(flag => !flag)}>
            <img className="basketImage" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="basket"/>
            <h2 className="basketCount">2</h2>
          </div>
      </header>

      <div className="main">
        <div className="coffee-image">
          <img src="/images/Image coffee.png" alt="coffee" />
        </div>

        <div className="RightPanel">
          <h1 className="title">{Coffee.name}</h1>
          <p className="subtitle">{Coffee.description}</p>

          <div className="section-title">SIZE</div>
          <div className="options-row">
            <div className={`option ${"SHORT" === butSize? "selected" : ""}`} onClick={()=>setButSize("SHORT")}>SHORT</div>
            <div className={`option ${"TALL" === butSize? "selected" : ""}`} onClick={()=>setButSize("TALL")}>TALL</div>
            <div className={`option ${"GRANDE" === butSize? "selected" : ""}`} onClick={()=>setButSize("GRANDE")}>GRANDE</div>
            <div className={`option ${"VENTI" === butSize? "selected" : ""}`} onClick={()=>setButSize("VENTI")}>VENTI</div>
          </div>

          <div className="section-title">EXTRA</div>
          <div className="options-row">
            <div className={`option-pill ${"NO ADDIVITES" === butExtra? "selected" : ""}`} onClick={()=>setButExtra("NO ADDIVITES")}>NO ADDIVITES</div>
            <div className={`option-pill ${"SUGAR" === butExtra? "selected" : ""}`} onClick={()=>setButExtra("SUGAR")}>SUGAR</div>
            <div className={`option-pill ${"MILK" === butExtra? "selected" : ""}`} onClick={()=>setButExtra("MILK")}>MILK</div>
          </div>


          <div className="section-title">MILK TYPE</div>
          <div className="options-row">
            <div className={`option-pill ${"REGULAR MILK" === butMilk? "selected" : ""}`} onClick={()=>setButMilk("REGULAR MILK")}>REGULAR MILK</div>
            <div className={`option-pill ${"OAT MILK" === butMilk? "selected" : ""}`} onClick={()=>setButMilk("OAT MILK")}>OAT MILK</div>
            <div className={`option-pill ${"SOY MILK" === butMilk? "selected" : ""}`} onClick={()=>setButMilk("SOY MILK")}>SOY MILK</div>
            <div className={`option-pill ${"ALMOND MILK" === butMilk? "selected" : ""}`} onClick={()=>setButMilk("ALMOND MILK")}>ALMOND MILK</div>
          </div>

          <div className="PriceRow">
            <div className="price">{Coffee.price*Coffee.count + " RUB"}</div>
            <div className="counter">
              <button onClick={() => setCoffee(prev => ({...prev, count: Math.max(prev.count - 1, 1)}))}>-</button>
              <span>{Coffee.count}</span>
              <button onClick={() => setCoffee(prev => ({...prev, count: prev.count + 1}))}>+</button>
            </div>
          </div>

          <button className="order-btn" onClick={() => {
            AddCoffeeInBascket(Coffee);
            toggleFlagCoffeePage(setFlagCoffeePage);
            }}>PLACE ORDER</button>

        </div>
      </div>

    </div>
  );
}