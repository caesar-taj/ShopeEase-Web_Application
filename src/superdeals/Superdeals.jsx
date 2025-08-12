import React, { useState } from 'react'
import PageHeader from '../components/PageHeader';

const showResults = "Showing 01-12 of 139 Results"
import Data from "../products.json"
import ProductCards from './ProductCards';
const Superdeals = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);
  console.log(products)
  return (
    <div>
      <PageHeader title="Our Superdeals Page" curPage="SuperDeals"/>
      {/* superdeal page */}
      <div className='superdeals-page padding-tb'>
        <div className='container'>
          <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
              <article>
                {/* layout & title */}
                <div className='superdeals-title d-flex flex-wrap justify-content-between'>
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listactive"}`}>
                    <a className='grid' onClick={() => setGridList(!GridList)}>
                      <i className='icofont-ghost'></i>
                      </a>
                    <a className='list' onClick={() => setGridList(!GridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>
                {/* product cards */}
                <div>
                  <ProductCards GridList={GridList}  products={products}/>
                </div>
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              right side
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Superdeals