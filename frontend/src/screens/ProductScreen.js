import React from 'react';
import { Link } from "react-router-dom";
import Rating from '../components/Rating';
import data from '../data'; 

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id)
    if(!product) {
        return <div>Không tìm thấy sản phẩm</div>
    }
    return (
        <div>
            <Link to="/">Trở về trang chủ</Link>
            <div className="row top">
                <div className="col-2">
                    <img src={product.image} alt={product.name} ></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Giá: {product.price} VNĐ
                        </li>
                        <li>Mô tả sản phẩm:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body"> 
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Giá sản phẩm</div>
                                    <div>{product.price} VNĐ</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tình trạng</div>
                                    <div>
                                        {product.countInStock > 0 ?( 
                                        <span className="success">Còn hàng</span>
                                        ) : (
                                        <span className="error">Hết hàng</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Thêm vào giỏ hàng</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
