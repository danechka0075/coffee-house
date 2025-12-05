import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

let coffeeList = [
  { "name": "Classic Cappuccino", type: "cappuccino", image: "/images/Classic Cappuccino.jpeg", size: "",  extra:"", count: 0, milkType: "", price: 530 },
  { "name": "Iced Cappuccino", type: "cappuccino", image: "/images/Iced Cappuccino.jpeg", size: "",  extra:"", count: 0, milkType: "", price: 750 },
  { "name": "Cinnamon Cappuccino", type: "cappuccino", image: "/images/ Cinnamon Cappuccino..jpeg", size: "", extra:"", count: 0, milkType: "", price: 530 },
  { "name": "Double Shot Cappuccino", type: "cappuccino", image: "/images/Double Shot Cappuccino.jpeg", size: "", extra:"", count: 0, milkType: "", price: 750 },

  { "name": "Vanilla Latte", type: "latte", image: "/images/Vanilla Latte.jpeg", size: "", extra:"", count: 0, milkType: "", price: 750 },
  { "name": "Caramel Latte", type: "latte", image: "/images/ Caramel Latte.jpeg", size: "", extra:"", count: 0, milkType: "", price: 790 },
  { "name": "Iced Latte", type: "latte", image: "/images/iced Latte.jpeg", size: "",  extra:"", count: 0, milkType: "", price: 750 },
  { "name": "Matcha Latte", type: "latte", image: "/images/Matcha Latte.jpeg", size: "", extra:"", count: 0, milkType: "", price: 790 },

  { "name": "Iced Americano", type: "americano", image: "/images/Iced Americano.jpeg", size: "",  extra:"", count: 0, milkType: "", price: 570 },
  { "name": "Americano with Lemon", type: "americano", image: "/images/ Americano with Lemon.jpeg", size: "", extra:"", count: 0, milkType: "", price: 570 },

  { "name": "Flat White", type: "flatwhite", image: "/images/ Flat White.jpeg", size: "", milk: "", count: 0, price: 750 }
];


const ShowCoffeeList = ({ filteredCoffee, AddCoffeeInBascket, bascket }) => {
  return coffeeList
    .filter(t => filteredCoffee === "All" || t.type === filteredCoffee.trim())
    .map(e => {

      const inBasket = bascket.find(c => c.name === e.name);
      const count = inBasket ? inBasket.count : 0;

      return (
        <div className="coffeeCard">
          <img src={e.image} className="coffeeImage" />
          <h2 className="coffeeName">{e.name}</h2>

          <div className="footerCoffeeCard">
            <button className={`removeToBasketButton ${count > 0 ? "" : "invisible"}`}>-</button>
            <h3 className="coffeePrice">{e.price} RUB</h3>
            <button className="addToBasketButton" onClick={() => AddCoffeeInBascket(e)}>+</button>
          </div>

          <h2 className={`coffeeCountInBasket ${count > 0 ? "" : "invisible"}`}>
             In Basket: {count}
          </h2>
        </div>
      );
    });
};

function App() {
  const [filteredCoffee, setFilteredCoffeeList] = useState("All");
  const [whichCoffeesInBascket, setWhichCoffeesInBascket] = useState([]);
  const [flagSideBar, setFlagSiteBar] = useState(false);

 const AddCoffeeInBascket = (coffee) => {
  
  setWhichCoffeesInBascket(prev => {
    const existing = prev.find(c => c.name === coffee.name);

    if (existing) {
      return prev.map(c =>
        c.name === coffee.name ? { ...c, count: c.count + 1 } : c
      );
    }
    return [...prev, { ...coffee, count: 1 }];
  });
};

  return (
  <BrowserRouter>
    <Sidebar open={flagSideBar} />
    <div>
      <div className="mainBox">
        <div className="leftBox">
          <div className="scrollBox">
            <div className={`categoryCoffees ${filteredCoffee === "All" ? "activeCategory" : ""}`} onClick={() => setFilteredCoffeeList("All")}>
              <h2 className="textCategoryCoffee">All</h2>
            </div>
            <div className={`categoryCoffees ${filteredCoffee === "cappuccino" ? "activeCategory" : ""}`} onClick={() => setFilteredCoffeeList("cappuccino")}>
              <h2 className="textCategoryCoffee">Cappuccino</h2>
            </div>
            <div className={`categoryCoffees ${filteredCoffee === "latte" ? "activeCategory" : ""}`} onClick={() => setFilteredCoffeeList("latte")}>
              <h2 className="textCategoryCoffee">Latte</h2>
            </div>
            <div className={`categoryCoffees ${filteredCoffee === "americano" ? "activeCategory" : ""}`} onClick={() => setFilteredCoffeeList("americano")}>
              <h2 className="textCategoryCoffee">Americano</h2>
            </div>
            <div className={`categoryCoffees ${filteredCoffee === "flatwhite" ? "activeCategory" : ""}`} onClick={() => setFilteredCoffeeList("flatwhite")}>
              <h2 className="textCategoryCoffee">Flat White</h2>
            </div>
        </div>
        </div>
        <div className="rightBox">
          <div className="headerBox">
            <input className="searchInput" placeholder="Browse your favourite coffee here.."/>
            <div className="basketBox" onClick={()=>setFlagSiteBar(flag => !flag)}>
              <img className="basketImage" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="basket"/>
              <h2 className="basketCount">{whichCoffeesInBascket.length}</h2>
            </div>
          </div>
          <div className="mainBoxCoffee">
            {<ShowCoffeeList filteredCoffee={filteredCoffee} AddCoffeeInBascket={AddCoffeeInBascket} bascket={whichCoffeesInBascket}/>}
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
