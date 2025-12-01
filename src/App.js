import logo from './logo.svg';
import './App.css';

let coffeeList = [
  { "name": "Classic Cappuccino", type: "cappuccino", image: "/images/Classic Cappuccino.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 530 },
  { "name": "Iced Cappuccino", type: "cappuccino", image: "/images/Iced Cappuccino.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 750 },
  { "name": "Cinnamon Cappuccino", type: "cappuccino", image: "/images/ Cinnamon Cappuccino..jpeg", size: "", milk: "", sugar: "", milkType: "", price: 530 },
  { "name": "Double Shot Cappuccino", type: "cappuccino", image: "/images/Double Shot Cappuccino.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 750 },

  { "name": "Vanilla Latte", type: "latte", image: "/images/Vanilla Latte.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 750 },
  { "name": "Caramel Latte", type: "latte", image: "/images/ Caramel Latte.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 790 },
  { "name": "Iced Latte", type: "latte", image: "/images/iced Latte.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 750 },
  { "name": "Matcha Latte", type: "latte", image: "/images/Matcha Latte.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 790 },

  { "name": "Iced Americano", type: "americano", image: "/images/Iced Americano.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 570 },
  { "name": "Americano with Lemon", type: "americano", image: "/images/ Americano with Lemon.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 570 },

  { "name": "Flat White", type: "flatwhite", image: "/images/ Flat White.jpeg", size: "", milk: "", sugar: "", milkType: "", price: 750 }
];


const showCoffeeList = () => {
  return coffeeList.map(e => (
      <div className="coffeeCard">
        <img src={e.image} className="coffeeImage"></img>
        <h2 className="coffeeName">{e.name}</h2>
        <h3 className="coffeePrice">{e.price}RUB</h3>
      </div>
  ));
}
function App() {
  return (
  <div>
    <div className="mainBox">
      <div className="leftBox">
        <div className="scrollBox">
          <div className="categoryCoffees" >
            <h2 className="textCategoryCoffee">All</h2>
          </div>
          <div className="categoryCoffees">
            <h2 className="textCategoryCoffee">Cappuccino</h2>
          </div>
          <div className="categoryCoffees">
            <h2 className="textCategoryCoffee">Latte</h2>
          </div>
          <div className="categoryCoffees">
            <h2 className="textCategoryCoffee">Espresso</h2>
          </div>
          <div className="categoryCoffees">
            <h2 className="textCategoryCoffee">Americano</h2>
          </div>
        </div>
      </div>
      <div className="rightBox">
        <div className="headerBox">
          <input className="searchInput" placeholder="Browse your favourite coffee here.."/>
          <div className="basketBox">
            <img className="basketImage" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="basket"/>
            <h2 className="basketCount">0</h2>
          </div>
        </div>
        <div className="mainBoxCoffee">
          {showCoffeeList()}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
