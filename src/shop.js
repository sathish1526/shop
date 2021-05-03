import React from 'react';


function Shop(props){
    return(
         <div className="col-lg-4 col-md-6 mb-4">
             <div className="card h-100">
                <a><img className="card-img-top" src={props.detail.img} alt=""/></a>
                    <div className="card-body">
                     <h4 className="card-title">
                         <a>{props.detail.itemName}</a>
                    </h4>
                     <h5>Rs.{props.detail.price}</h5>
                    <p className="card-text">{props.detail.description}</p>
                    </div>
                 <div className="card-footer">
                     <small className="text-muted">★ ★ ★ ★ ☆</small>
                 </div>
                 <button className='btn btn-warning' onClick ={()=>{
                     props.handleCard(props.detail)
                     }}>Add to Cart</button>
             </div>
         </div>
        );
}


export default Shop