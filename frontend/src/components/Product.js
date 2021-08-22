import React from 'react'
import Rating from '../components/Rating';

export default function Product(props) {
    const {product} = props; //Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components.
    return (
      
        <div key={product._id} className="card">
              <a href={`/product/${product._id}`}> <img className="medium" src={product.image} alt={product.name}/> </a>
                <div className="card-body">
                <a href={`/product/${product._id}`}> <h2>{product.name}</h2> </a> 
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                    <div className="price"> {product.price} VNĐ</div>
                  </div>
                  </div>
    )
}
