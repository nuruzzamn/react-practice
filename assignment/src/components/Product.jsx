import React from 'react';
import App from '../App';

const Product = (props) => {
  let data = props.value;

  console.log(data)

  let rating= data.rating;

  console.log(rating.rate)

  // data.map((rating, index)=> )
  
  // const a = props.products;
  return (

    <article className="product" >
          <img src={data.image} alt="{a.image}" />
          <div className="product__details">
            <h4 className="product__title">{data.title}</h4>
             <p>Price: $ {data.price} product price</p>
             <p>Rating: {rating.rate}</p>
              <p className="product__desc">{data.description}</p>
              <button className="product__btn btn">Add to cart</button>
            </div>
     </article>

      // {
      //   // products.map( (value,id) =>
      //   // <article className="product" key={id}>
      //   //    <img src="" alt="" />
      //   //    <div className="product__details">
      //   //      <h4 className="product__title">{value.titleText}</h4>
      //   //      <p>Price: $ product price</p>
      //   //      <p>Rating: product rating rate/5</p>
      //   //      <p className="product__desc">Description: product.description</p>
      //   //      <button className="product__btn btn">Add to cart</button>
      //   //    </div>
      //   //    </article>
      // //  )
      // }
    
  );
};

export default Product;