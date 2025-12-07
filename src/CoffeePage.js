import React from "react";
import "./coffeepage.css";

export default function CoffeePage({open, setFlagSideBar, setFlagCoffeePage, Coffee, setCoffee, AddCoffeeInBascket, whichCoffeesInBascket, setWhichCoffeesInBascket}) {
  if (!Coffee) return null;

  const updateCoffee = (coffeeName, updatedFields) => {
    setWhichCoffeesInBascket(prev =>
      prev.map(c =>
        c.name === coffeeName
          ? { ...c, ...updatedFields }
          : c
        )
      );
      setCoffee(prev => ({...prev, ...updatedFields}));
    };
    

    const Whichprice = () => {
      let price = Coffee.price;
      if (Coffee.size !== "SHORT") {
        price += 30;
      }
      if (Coffee.extra !== "NO ADDIVITES") {
        price += 20;
      }
      if (Coffee.milkType !== "REGULAR MILK") {
        price += 25;
      }
      return price;
    }

    return (
    <div className={`coffeepage ${open ? "open" : ""}`}>
      <header className="header">
        <div className="ButtonBack" onClick={()=>setFlagCoffeePage(false)}>
            <span className="back-arrow">←</span>
            <span className="back-text">BACK TO MENU</span>
        </div>
        <div className="basketBox" onClick={()=>setFlagSideBar(flag => !flag)}>
            <img className="basketImage" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="basket"/>
            <h2 className="basketCount">{whichCoffeesInBascket.length}</h2>
          </div>
      </header>

      <div className="mainCoffeePage">
        <div className="coffee-image">
          <img src={`/images/${Coffee.name}`+" (фон удален).png"} alt="coffee" />
        </div>

        <div className="RightPanel">
          <h1 className="title">{Coffee.name}</h1>
          <p className="subtitle">{Coffee.description}</p>

          <div className="section-title">SIZE</div>
          <div className="options-row">
            <div className={`option ${"SHORT" === Coffee.size? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { size: "SHORT" });}}> SHORT</div>
            <div className={`option ${"TALL" === Coffee.size? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { size: "TALL" });}}> TALL</div>
            <div className={`option ${"GRANDE" === Coffee.size? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { size: "GRANDE" });}}> GRANDE</div>
            <div className={`option ${"VENTI" === Coffee.size? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { size: "VENTI" });}}> VENTI</div>
          </div>

          <div className="section-title">EXTRA</div>
          <div className="options-row">
            <div className={`option-pill ${"NO ADDIVITES" === Coffee.extra? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { extra: "NO ADDIVITES" });}}> NO ADDIVITES</div>
            <div className={`option-pill ${"SUGAR" === Coffee.extra? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { extra: "SUGAR" });}}> SUGAR</div>
            <div className={`option-pill ${"MILK" === Coffee.extra? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { extra: "MILK" });}}> MILK</div>
          </div>

          <div className="section-title">MILK TYPE</div>
          <div className="options-row">
            <div className={`option-pill ${"REGULAR MILK" === Coffee.milkType? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { milkType: "REGULAR MILK" });}}> REGULAR MILK</div>
            <div className={`option-pill ${"OAT MILK" === Coffee.milkType? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { milkType: "OAT MILK" });}}> OAT MILK</div>
            <div className={`option-pill ${"SOY MILK" === Coffee.milkType? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { milkType: "SOY MILK" });}}> SOY MILK</div>
            <div className={`option-pill ${"ALMOND MILK" === Coffee.milkType? "selected" : ""}`} onClick={()=>{updateCoffee(Coffee.name, { milkType: "ALMOND MILK" });}}> ALMOND MILK</div>
          </div>

          <div className="PriceRow">
          <div className="price">{Whichprice()*Coffee.count + " RUB"}</div>
          <div className="counter">
            <button onClick={() => setCoffee(prev => ({...prev, count: Math.max(prev.count - 1, 1)}))}>-</button>
            <span>{Coffee.count}</span>
            <button onClick={() => setCoffee(prev => ({...prev, count: prev.count + 1}))}>+</button>
          </div>
          </div>

          <button className="order-btn" onClick={() => {
            AddCoffeeInBascket(Coffee);
            setFlagCoffeePage(false);
            }}>PLACE ORDER</button>

        </div>
      </div>

    </div>
  );
}