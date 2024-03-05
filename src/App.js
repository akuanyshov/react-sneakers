function App() {
  return <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Shop for the best sneakers</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
        <img width={18} height={18} src="/img/cart.svg" />
          <span>650 €</span>
        </li>
        <li>
        <img width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <h1 className="mb-40">All sneakers</h1>
      <div className="d-flex">
      <div className="card">
        <img width={133} height={112} src="/img/sneaker1.jpg" alt="Sneakers"></img>
        <h5>Nike Blazer Mid Suele</h5>
        <p>Men's Shoes</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>129,99 €</b>
          </div>
          <button className="button">
            <img width={11} height={11}  src="/img/plus.svg" alt="Plus"></img>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneaker2.jpg" alt="Sneakers"></img>
        <h5>Nike Air Max 270</h5>
        <p>Men's Shoes</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>159,99 €</b>
          </div>
          <button className="button">
            <img width={11} height={11}  src="/img/plus.svg" alt="Plus"></img>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneaker3.jpg" alt="Sneakers"></img>
        <h5>Nike Blazer Mid Suele</h5>
        <p>Men's Shoes</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>139,99 €</b>
          </div>
          <button className="button">
            <img width={11} height={11}  src="/img/plus.svg" alt="Plus"></img>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneaker4.jpg" alt="Sneakers"></img>
        <h5>Puma  Future Rider</h5>
        <p>Men's Shoes</p>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>109,99 €</b>
          </div>
          <button className="button">
            <img width={11} height={11}  src="/img/plus.svg" alt="Plus"></img>
          </button>
        </div>
      </div>
      </div>
      
    </div>
    </div>
  
}

export default App;
