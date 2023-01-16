
import React from 'react'
import { Link } from "react-router-dom";

import image1 from '../../assets/img/x.jpeg'
import image2 from '../../assets/img/13pro.jpeg'
import image3 from '../../assets/img/14pro.jpeg'


const products = [
  {
    id: 1,
    name: "iphone X",
    price: 2500,
    image: image1
  },
  {
    id: 2,
    name: "iphone 14 Pro",
    price: 5600,
    image: image2
  },
  {
    id: 3,
    name: "iphone 13 Pro Max",
    price: 4500,
    image: image3,
  },
]

const ProductList = () => {

  return (
    <div>
      {
        products.map((product) => {
          const { id, name, price, image } = product;

          return (
            <div key={product.id} className='container hello123'>
              <h5 className='prolar'>
                <img className='photopro' src={image} alt='img' />
                <Link to={`/product/${id}`}>{name}
                </Link>
                <span > {price}</span>
              </h5>
            </div>
          )
        })
      }
    </div>
  );
}

export default ProductList

export const list = products;

