import "./sidebar.css";

export default function Sidebar({ open, setFlagSideBar, bascket, AddCoffeeInBascket, RemoveCoffeeFromBascket }) {
  const totalPrice = bascket.reduce((sum, c) => sum + c.price * c.count, 0);

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="closeBtn" onClick={() => setFlagSideBar(false)}>← Back</button>

      <h2 className="sidebarTitle">Your Basket</h2>

      {bascket.length === 0 ? (
        <p className="emptyBasket">Your basket is empty 😢</p>
      ) : (
        <div className="basketItems">
          {bascket.map((coffee, index) => (
            <div key={index} className="basketItem">
              <img src={coffee.image} alt={coffee.name} className="basketItemImage"/>
              <div className="basketItemInfo">
                <div className="headerItemInfo">
                  <h3 className="basketItemName">{coffee.name}</h3>
                  <div className="basketCounter">
                    <span className="SpanCoffeeCount">{coffee.count}</span>
                  </div>
                </div>
                <p className="basketItemPrice">{coffee.price * coffee.count} RUB</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {bascket.length > 0 && (
        <div className="basketFooter">
          <h3>Total: {totalPrice} RUB</h3>
          <button className="orderAllBtn">Place Order</button>
        </div>
      )}
    </div>
  );
}