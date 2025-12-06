import './App.css';
import { useEffect, useState } from 'react';
import Sidebar from "./Sidebar";
import CoffeePage from './CoffeePage';
import { BrowserRouter } from "react-router-dom";

let coffeeList = [
  { name: "Classic Cappuccino", type: "cappuccino", image: "/images/Classic Cappuccino.jpeg", description: "A classic blend of rich espresso poured into velvety steamed milk, topped with a smooth layer of airy foam.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 530 },
  { name: "Iced Cappuccino", type: "cappuccino", image: "/images/Iced Cappuccino.jpeg", description: "A chilled espresso-based drink with cold milk and light foam, creating a refreshing and balanced flavor.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 750 },
  { name: "Cinnamon Cappuccino", type: "cappuccino", image: "/images/ Cinnamon Cappuccino.jpeg", description: "A warm and aromatic cappuccino infused with cinnamon, delivering a cozy and mildly spicy sweetness.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 530 },
  { name: "Double Shot Cappuccino", type: "cappuccino", image: "/images/Double Shot Cappuccino.jpeg", description: "A bold cappuccino featuring a double shot of espresso for a stronger, more intense coffee flavor.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 750 },

  { name: "Vanilla Latte", type: "latte", image: "/images/Vanilla Latte.jpeg", description: "A smooth latte sweetened with creamy vanilla syrup, creating a soft and comforting flavor profile.",size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 750 },
  { name: "Caramel Latte", type: "latte", image: "/images/ Caramel Latte.jpeg", description: "A rich latte blended with buttery caramel syrup, offering a sweet and silky espresso experience.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 790 },
  { name: "Iced Latte", type: "latte", image: "/images/iced Latte.jpeg", description: "A refreshing iced latte made with chilled milk and espresso, light, smooth, and perfectly balanced.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 750 },
  { name: "Matcha Latte", type: "latte", image: "/images/Matcha Latte.jpeg", description: "A vibrant latte crafted from premium matcha powder and milk, offering a sweet earthy taste and gentle energy boost.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 790 },

  { name: "Iced Americano", type: "americano", image: "/images/Iced Americano.jpeg", description: "A cool and refreshing Americano made with espresso and cold water over ice for a crisp, clean finish.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 570 },
  { name: "Americano with Lemon", type: "americano", image: "/images/ Americano with Lemon.jpeg", description: "A bright and bold Americano enhanced with a slice of lemon, adding a refreshing citrus twist.",size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 570 },

  { name: "Flat White", type: "flatwhite", image: "/images/ Flat White.jpeg", description: "A smooth drink with a strong espresso base and a thin layer of silky microfoam for a rich and balanced taste.", size: "SHORT", extra: "NO ADDIVITES", count: 0, milkType: "REGULAR MILK", price: 750 }
];

const ShowCoffeeList = ({ coffeeOnMain, filteredCoffee, AddCoffeeInBascket, RemoveCoffeeFromBascket, bascket, setFlagCoffeePage, Coffee, setCoffee}) => {
  return coffeeOnMain
    .filter(t => filteredCoffee === "All" || t.type === filteredCoffee.trim())
    .map((e, idx) => {
      const inBasket = bascket.find(c => c.name === e.name);
      const count = inBasket ? inBasket.count : 0;
      const displayPrice = e.price;

      return (
        <div key={idx} className="coffeeCard" onClick={() => { setCoffee({...e, count: 1}); setFlagCoffeePage(true); }}>
          <img src={e.image} className="coffeeImage" alt=""/>
          <h2 className="coffeeName">{e.name}</h2>
          <h2 className={`coffeeCountInBasket ${count > 0 ? "" : "invisible"}`}>
             {displayPrice} RUB
          </h2>
          <div className={`footerCoffeeCard ${count>0?"added":""}`}>
            <button className={`removeToBasketButton ${count > 0 ? "" : "invisible"}`} onClick={(t) =>{ RemoveCoffeeFromBascket(e); t.stopPropagation()}}>-</button>
            <h3 className="coffeePrice">{count === 0 ? displayPrice + " RUB" : count}</h3>
            <button className="addToBasketButton" onClick={(t) => {
              t.stopPropagation();
              if (inBasket) {
                AddCoffeeInBascket({...e, count: 1});
              } else {
                setCoffee({...e, count: 1});
                setFlagCoffeePage(true);
              }
            }}>+</button>
          </div>

        </div>
      );
    });
};

export const toggleFlagSide = (setFlagSideBar) => {
    setFlagSideBar(prevFlag => !prevFlag);
}
export const toggleFlagCoffeePage = (setFlagCoffeePage) => {
    setFlagCoffeePage(prevFlag => !prevFlag);
}

function App() {
  const Save = (NewWhichCoffeesInBascket) => {
    localStorage.setItem('whichCoffeesInBascket', JSON.stringify(NewWhichCoffeesInBascket))
  }
  
  const [filteredCoffee, setFilteredCoffeeList] = useState('All');
  const [whichCoffeesInBascket, setWhichCoffeesInBascket] = useState(JSON.parse(localStorage.getItem("whichCoffeesInBascket")) || []);
  const [coffeeOnMain, setCoffeeOnMain] = useState(coffeeList);
  const [flagSideBar, setFlagSideBar] = useState(false);
  const [flagCoffeePage, setFlagCoffeePage] = useState(false);
  const [Coffee, setCoffee] = useState(null);
  const [SearchText, setSearchText] = useState("");

  const RemoveCoffeeFromBascket = (coffee) => {
    setWhichCoffeesInBascket(prev => {
      const existing = prev.find(c => c.name === coffee.name);

      if (existing.count === 1) {
        return prev.filter(c => c.name !== coffee.name);
      }
      return prev.map(c =>
        c.name === coffee.name ? { ...c, count: c.count - 1 } : c
      );
    });
  };
  const AddCoffeeInBascket = (coffee) => {
  setWhichCoffeesInBascket(prev => {
    const existing = prev.find(c => c.name === coffee.name);

    if (existing) {
      return prev.map(c =>
        c.name === coffee.name ? { ...c, count: c.count + coffee.count } : c
      );
    }
    return [...prev, { ...coffee }];
  });
};

useEffect(() => {
  Save(whichCoffeesInBascket)
}, [whichCoffeesInBascket])
useEffect(() => {
  const filteredList = coffeeList.filter(coffee =>
    coffee.name.toLowerCase().includes(SearchText.toLowerCase())
  );
  setCoffeeOnMain(filteredList.length > 0 ? filteredList : coffeeList);
}, [SearchText]);
    return (
    <BrowserRouter>
      <Sidebar open={flagSideBar} setFlagSideBar={setFlagSideBar} setWhichCoffeesInBascket={setWhichCoffeesInBascket} bascket={whichCoffeesInBascket}/>
      <CoffeePage open={flagCoffeePage} setFlagSideBar={setFlagSideBar} setFlagCoffeePage={setFlagCoffeePage} Coffee={Coffee} setCoffee={setCoffee} AddCoffeeInBascket={AddCoffeeInBascket} whichCoffeesInBascket={whichCoffeesInBascket} setWhichCoffeesInBascket={setWhichCoffeesInBascket}/>
      
      <div className={`page ${flagCoffeePage ? 'invisible' : ''}`}>
        <div className="top">
          <input className="searchInput" placeholder="Search" onChange={(e) => setSearchText(e.target.value === '' ? '' : e.target.value)} />
          <div className="basketBox" onClick={() => setFlagSideBar(flag => !flag)}>
            <img className="basketImage" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="basket"/>
            <h2 className="basketCount">{whichCoffeesInBascket.length}</h2>
          </div>
        </div> 
        <div className="content">
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

          <div className="main">
            <div className="mainBoxCoffee">
              {<ShowCoffeeList coffeeOnMain={coffeeOnMain} filteredCoffee={filteredCoffee} RemoveCoffeeFromBascket={RemoveCoffeeFromBascket} AddCoffeeInBascket={AddCoffeeInBascket} bascket={whichCoffeesInBascket} setFlagCoffeePage={setFlagCoffeePage} Coffee={Coffee} setCoffee={setCoffee}/>}
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
