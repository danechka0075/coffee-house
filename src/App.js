import logo from './logo.svg';
import './App.css';



function App() {
  return (
  <div>
    <div className="mainBox">
      <aside className="leftBox">
        <div className="scrollBox">
          <div className="categoryCoffees">
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
      </aside>
      <div className="rightBox">
        <div className="headerBox">
          <input className="searchInput" placeholder="Browse your favourite coffee here.."/>
          <div className="basketBox">
            <img className="basketImage" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="basket"/>
            <h2 className="basketCount">0</h2>
          </div>
        </div>
        <div className="mainBox">
        
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
