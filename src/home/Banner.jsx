import { Link } from "react-router-dom";
import React, { useState } from "react";
import productData from "../products.json";
import SelectedCatagory from "../components/SelectedCatagory";


const title = (
    <h2>We have <span>whatever</span> you need</h2>
)
const desc = "Everything is at your fingertips"
const bannerList = [{ iconName: "icofont-users-alt-4", text: "1.5 Million Customers", }, { iconName: "icofont-notification", text: "More then 2000 Marchent", }, { iconName: "icofont-globe", text: "Buy Anything Online", },];
const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState("productData");

    // Search functionality
    const handleSearch = e => {
        console.log(e.target.value)
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
        // filtering products based on search
        const filtered = productData.filter((product) => 
        product.name.toLowerCase(). includes(searchTerm.toLowerCase()));
        setFilteredProducts(filtered)
    }
    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                        <SelectedCatagory select={"all"}/>
                        <input type="text" name="Search" id="search" placeholder="I'm shoppinng for..." value={searchInput} onChange={handleSearch} />
                        <button type="submit">
                           <i className="fi fi-bs-search"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {
                            searchInput && filteredProducts.map((product, i) => <li key={i}>
                                <Link to={`/superdeals/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner