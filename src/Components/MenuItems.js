import React, { useState } from 'react';
import "../Styles/Menu.css";

function MenuItems({ title, img, description, rating, onAddToCart, onRemoveToCart }) {
    const [itemCount, setItemCount] = useState(0);

    const handleAdd = () => {
        setItemCount(prev => prev + 1);
        onAddToCart();   // tell parent to increment cart count
    };

    const handleSubtract = () => {
        if (itemCount > 0) {
            setItemCount(prev => prev - 1);
            onRemoveToCart();  // tell parent to decrement cart count
        }
    };

    return (
        <div className="col-12 col-sm-6 col-md-3 mb-4 cont" style={{ paddingTop: "2vw" }}>
            <div className="card h-100">
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description.length > 20 ? description.slice(0, 80) : description}...
                    </p>

                    {/* ⭐ Rating */}
                    <div className="rating mb-2">
                        {[...Array(5)].map((_, i) => {
                            if (rating >= i + 1) {
                                return <i key={i} className="bi bi-star-fill me-1"></i>;
                            } else if (rating >= i + 0.5) {
                                return <i key={i} className="bi bi-star-half me-1"></i>;
                            } else {
                                return <i key={i} className="bi bi-star me-1"></i>;
                            }
                        })}
                    </div>

                    {/* Add to Cart / Counter */}
                    {itemCount === 0 ? (
                        <button
                            className="btn btn-warning mt-3 w-100"
                            onClick={handleAdd}
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="d-flex align-items-center justify-content-between mt-3 bg-light p-2 rounded">
                            <button className="btn btn-outline-danger" onClick={handleSubtract}>-</button>
                            <span className="fw-bold" style={{ width: "50vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {itemCount}
                            </span>
                            <button className="btn btn-outline-success" onClick={handleAdd}>+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MenuItems;
