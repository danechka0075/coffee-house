import "./sidebar.css";

export default function Sidebar({ open, setFlagSideBar, setWhichCoffeesInBascket, bascket}) {
  const totalPrice = bascket.reduce((sum, c) => sum + c.price * c.count, 0);
  const sizeAddOns = bascket.reduce((addOnn, c) => {
    if (c.size !== "SHORT") {
      addOnn += 30 * c.count;
    }
    if (c.extra !== "NO ADDIVITES") {
      addOnn += 20 * c.count;
    }
    if (c.milkType !== "REGULAR MILK") {
      addOnn += 25 * c.count;
    }
    return addOnn;
  }, 0);
  const subTotal = totalPrice + sizeAddOns;
  const discount = subTotal * 0.10;
  const finalTotal = subTotal - discount;    
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
          <h4>Add-ons: {sizeAddOns} RUB</h4>
          <h4>Price Before Discount: {subTotal} RUB</h4>
          <h4>Discount (10%): -{discount.toFixed(2)} RUB</h4>
          <h3>Total: {finalTotal.toFixed(2)} RUB</h3>
          <button className="orderAllBtn" onClick={() => {
            setWhichCoffeesInBascket([]);
            setFlagSideBar(false);
          }}>Place Order</button>
        </div>
      )}
    </div>
  );
}