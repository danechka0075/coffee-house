import React from "react";
import "./coffeepage.css";

export default function CoffeePage({open, setFlagSideBar, setFlagCoffeePage, Coffee, setCoffee, whichCoffeesInBascket, setWhichCoffeesInBascket}) {
  if (!Coffee) return null;

  const updateCoffee = (updatedFields) => {
    setCoffee(prev => ({ ...prev, ...updatedFields }));
    setWhichCoffeesInBascket(prev => {
      const existing = prev.find(c => c.name === Coffee.name);
      if (!existing) {
        return [...prev, { ...Coffee, ...updatedFields }];
      }
      return prev.map(c => c.name === Coffee.name ? { ...c, ...updatedFields } : c);
  });
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
            <button className={`option ${"SHORT" === Coffee.size? "selected" : ""}`} onClick={()=>{updateCoffee({ size: "SHORT" });}}> SHORT</button>
            <button className={`option ${"TALL" === Coffee.size? "selected" : ""}`} onClick={()=>{updateCoffee({ size: "TALL" });}}> TALL</button>
            <button className={`option ${"GRANDE" === Coffee.size? "selected" : ""}`} onClick={()=>{updateCoffee({ size: "GRANDE" });}}> GRANDE</button>
            <button className={`option ${"VENTI" === Coffee.size? "selected" : ""}`} onClick={()=>{updateCoffee({ size: "VENTI" });}}> VENTI</button>
          </div>

          <div className="section-title">EXTRA</div>
          <div className="options-row">
            <button className={`option-pill ${"NO ADDIVITES" === Coffee.extra? "selected" : ""}`} onClick={()=>{updateCoffee({ extra: "NO ADDIVITES" });}}> NO ADDIVITES</button>
            <button className={`option-pill ${"SUGAR" === Coffee.extra? "selected" : ""}`} onClick={()=>{updateCoffee({ extra: "SUGAR" });}}> SUGAR</button>
            <button className={`option-pill ${"MILK" === Coffee.extra? "selected" : ""}`} onClick={()=>{updateCoffee({ extra: "MILK" });}}> MILK</button>
          </div>

          <div className="section-title">MILK TYPE</div>
          <div className="options-row">
            <button className={`option-pill ${"REGULAR MILK" === Coffee.milkType? "selected" : ""}`} onClick={()=>{updateCoffee({ milkType: "REGULAR MILK" });}}> REGULAR MILK</button>
            <button className={`option-pill ${"OAT MILK" === Coffee.milkType? "selected" : ""}`} onClick={()=>{updateCoffee({ milkType: "OAT MILK" });}}> OAT MILK</button>
            <button className={`option-pill ${"SOY MILK" === Coffee.milkType? "selected" : ""}`} onClick={()=>{updateCoffee({ milkType: "SOY MILK" });}}> SOY MILK</button>
            <button className={`option-pill ${"ALMOND MILK" === Coffee.milkType? "selected" : ""}`} onClick={()=>{updateCoffee({ milkType: "ALMOND MILK" });}}> ALMOND MILK</button>
          </div>

          <div className="PriceRow">
            <div className="price">{Whichprice() * Coffee.count} RUB</div>
              <div className="counter">
                <button onClick={() => {if (Coffee.count > 1) {updateCoffee({ count: Coffee.count - 1 });}}}>-</button>
                <span>{Coffee.count}</span>
                <button onClick={() => {updateCoffee({ count: Coffee.count + 1 });}}>+</button>
              </div>
            </div>
          <button className="order-btn" onClick={() => { updateCoffee(Coffee.name, Coffee); setFlagCoffeePage(false);}}>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
}