import React from 'react'
import './Wishlist.css'
import wishlistimage from '../assets/cartimg.jpg'
const Wishlist = () => {
    return (
        <div>
            <div className="wishlist-container">
                <h1 className="wishlist-title">My Wishlist</h1>
              
                <div className="wishlist-sort">
                    <label>Sort by:</label>
                    <select>
                        <option value="on-sale">On Sale</option>
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>
                <div className="wishlist-item">
                    <img
                        src={wishlistimage}
                        alt="FROZA Horizon Adventures"
                        className="wishlist-item-image"
                    />
                    <div className="wishlist-item-details">
                        <h2>FROZA Horizon Adventures™</h2>
                        <p className="wishlist-item-type">Base Game</p>
                        <p className="wishlist-item-price">₹3,999</p>
                        <p className="wishlist-item-rewards">Earn 5% back in Epic Rewards</p>
                        <button className="wishlist-add-to-cart">Add To Cart</button>
                        <button className="wishlist-remove">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist