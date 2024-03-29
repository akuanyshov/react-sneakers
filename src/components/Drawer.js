function Drawer(){
return (
<div style={{display: 'none'}} className="overlay">
<div className="drawer">
    <h2 className="d-flex justify-between mb-30">Cart <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
        <div className="items">
         <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(/img/sneaker1.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20 flex">
                <p className="mb-5">Nike Blazer Mid Suele</p>
                <b>129,99 €</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Total:</span>
                <div></div>
                <b>129,99 €</b>
              </li>
              <li className="d-flex">
                <span>Tax 5%: </span>
                <div></div>
                <b>129,99 €</b>
              </li>
            </ul>
            <button className="greenButton">Buy Items <img src="/img/arrow.svg" alt="Arrow" /></button>
    </div>
</div>
</div>
);
}

export default Drawer;