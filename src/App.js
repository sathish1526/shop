import { useState } from 'react';
import './App.css';
import Shop from './shop.js';

function App() {
  let items=[{
    id:1,
    itemName: 'ryzen9',
    price:85000,
    img:"https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL._AC_SX466_.jpg",
    description:'AMD Ryzen™ 9 5900X. 12 cores to power through gaming, streaming and more'
  },{
    id:2,
    itemName:'nvidiaRTX3080',
    price:70000,
    img:"https://images-na.ssl-images-amazon.com/images/I/81ZLD6UwM%2BL._SX450_.jpg",
    description:"The GeForce RTX™ 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA's "
  },{
    id:3,
    itemName:'nvidiaRTX3060ti',
    price:50000,
    img:"https://images-na.ssl-images-amazon.com/images/I/81CMY-2T2BL._SL1500_.jpg",
    description:"The GeForce RTX™ 3060ti delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA's "
  },{
    id:4,
    itemName: 'ryzen7',
    price:85000,
    img:"https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._SX679_.jpg",
    description:'AMD Ryzen™ 7 3700X. 8 cores to power through gaming, streaming and more'
  }];
const [card, setCard] = useState([]);
const [total, setTotal] = useState(0);

let addToCart = (product)=>{
  let flag=0;
  card.forEach(element => {
    if(element.id===product.id) flag=1;
  });
  if(flag===0){
    setCard ([...card,product]);
    setTotal(total+product.price);
  }
}
let removeCard = (item) => {
    
  setCard(card.filter(obj => obj.id !== item.id))

  setTotal(total - item.price)
}



  return (
    <div className="container">

        <div class="row">
    
          <div class="col-lg-3">
    
            <h1 class="my-4">Cart</h1>
            <div class="list-group">
              {
                card.map((item)=>{
                  return <div className='list-group-item'>
                    {item.itemName} - {item.price} 
                    <span>
                      <button className='btn btn-danger' onClick={()=>{
                        removeCard(item);
                      }}>X</button>
                    </span>
                     </div>
                })
                
              }

            </div>
            <h3>Total - {total}</h3>
    
          </div>
          <div class="col-lg-9">
            <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
              <div class="row">
                {
                  items.map((data)=>{
                    return <Shop detail = {data} handleCard = {addToCart}></Shop>
                  })
                }
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default App;
