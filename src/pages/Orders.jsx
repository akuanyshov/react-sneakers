import React from 'react';
import axios from 'axios';
import Card from '../components/Card'
import Info from "../components/Info";
import AppContext from '../context';


function Orders({items = []}) {
    const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);

    React.useEffect(() => {
      (async () => {
        try{
          const { data } = await axios.get('https://60f485e23cb0870017a8a26c.mockapi.io/orders');
          setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
          setIsLoading(false);
        }catch(error){
           alert('Error with orders')
           console.error(error);
        }
      })();
    }, []);

    return(
    <div className="content p-40"> 
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
      </div>
      <div className="d-flex flex-wrap">
      {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
          key={index}
          loading={isLoading}
          {...item}
          />
        ))}
      </div>
    </div>
    );
}

export default Orders;