import React from 'react'
import { Link } from 'react-router-dom';


const ProductCards = ({GridList, products}) => {

  return (
    <div className={`superdeals-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
        {
            products.map((product, i) =>(
                <div key={i} className='col-lg-4 col-md-6 col-12'>
                    <div className='product-item'>
                        {/* producr images */}
                        <div className='product-thumb'>
                            <div className='pro-thumb'>
                                <img src={product.img}></img>
                            </div>
                            {/* product action links */}
                            <div className='product-action-link'>
                                <Link to={`/superdeals/${product.id}`}><i className='icofont-eye'></i></Link>
                                <a href="#">
                                    <i className='icofont-heart'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductCards