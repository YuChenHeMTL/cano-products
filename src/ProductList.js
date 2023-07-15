import React from "react";
import Product from "./Product";

function HeadRow(props) {
    return (
        <div className="row head-row">
            <div className="col-md-2">
                <h2>Image</h2>
            </div>
            <div className="col-md-4" onClick={props.sortByName}>
                <h2 >Product Name</h2>
            </div>
            <div className="col-md-4" onClick={props.sortByScore}>
                <p >Environment Impact Score</p>
            </div>
            <div className="col-md-2" onClick={props.sortByPrice}>
                <p>Price</p>
            </div>
        </div>
    );
}

export default function ProductList(props) {
    return (
        <div className="product-list">
            <HeadRow sortByName={props.sortByName} sortByScore={props.sortByScore} sortByPrice={props.sortByPrice}/>
            {props.products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    impactScore={product.impactScore}
                    price={product.price}
                    img={product.img}
                />
            ))}
        </div>
    );
}