import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                {/* Cart Items Table */}
                <div className="col-lg-9 col-md-8 col-12 mb-4">
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered mt-2">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">No: Item</th>
                                    <th scope="col">Delete Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Black Myth Wukong</td>
                                    <td>3500</td>
                                    <td>1</td>
                                    <td>
                                        <i className="fa-solid fa-trash text-danger cursor-pointer"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="col-lg-3 col-md-4 col-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-center">Cart Summary</h3>
                            <div className="mt-4">
                                <h5>Total Products: <span>1</span></h5>
                                <h5>Total Price: <span>3500</span></h5>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-success w-75 mt-4 fw-bold">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
