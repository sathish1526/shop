import React from 'react';


function Shop(props){
    let starsDisplay;
    switch (props.detail.rating) {
        case 1: starsDisplay = <small className="text-muted" >★☆☆☆☆</small>; break;        
        case 2: starsDisplay = <small className="text-muted" >★★☆☆☆</small>; break;
        case 3: starsDisplay = <small className="text-muted" >★★★☆☆</small>; break;
        case 4: starsDisplay = <small className="text-muted" >★★★★☆</small>; break;
        case 5: starsDisplay = <small className="text-muted" >★★★★★</small>; break;
        default: starsDisplay = <small className="text-muted" >☆☆☆☆☆</small>; 
    
    }
    return(
         <div className="col-lg-4 col-md-6 mb-4">
             <div className="card h-100">
                <p><img className="card-img-top" src={props.detail.img} alt=""/></p>
                    <div className="card-body">
                     <h4 className="card-title">
                         <p>{props.detail.itemName}</p>
                    </h4>
                     <h5>Rs.{props.detail.price}</h5>
                    <p className="card-text">{props.detail.description}</p>
                    </div>
                 <div className="card-footer">
                     {/* <small className="text-muted">★ ★ ★ ★ ☆</small>  */}
                     {starsDisplay}
                 </div>
                 <button className='btn btn-warning' onClick ={()=>{
                     props.handleCard(props.detail)
                     }}>Add to Cart</button>
             </div>
         </div>
        );
}


export default Shop