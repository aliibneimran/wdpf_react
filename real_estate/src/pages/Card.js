import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <>
      <div>
        {/* BREADCRUMB AREA START */}
        <div
          className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "
          data-bs-bg="img/bg/14.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner">
                  <h1 className="page-title">Cart</h1>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">
                          <span className="ltn__secondary-color">
                            <i className="fas fa-home" />
                          </span>{" "}
                          Home
                        </Link>
                      </li>
                      <li>Cart</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* SHOPING CART AREA START */}
        <div className="liton__shoping-cart-area mb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping-cart-inner">
                  <div className="shoping-cart-table table-responsive">
                    <table className="table">
                      {/* <thead>
                              <th class="cart-product-remove">Remove</th>
                              <th class="cart-product-image">Image</th>
                              <th class="cart-product-info">Product</th>
                              <th class="cart-product-price">Price</th>
                              <th class="cart-product-quantity">Quantity</th>
                              <th class="cart-product-subtotal">Subtotal</th>
                          </thead> */}
                      <tbody>
                        <tr>
                          <td className="cart-product-remove">x</td>
                          <td className="cart-product-image">
                            <Link to="/product-details">
                              <img src="assets/img/product/1.png" alt="#" />
                            </Link>
                          </td>
                          <td className="cart-product-info">
                            <h4>
                              <Link to="/product-details">
                                3 Rooms Manhattan
                              </Link>
                            </h4>
                          </td>
                          <td className="cart-product-price">$149.00</td>
                          <td className="cart-product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                type="text"
                                defaultValue={"02"}
                                name="qtybutton"
                                className="cart-plus-minus-box"
                              />
                            </div>
                          </td>
                          <td className="cart-product-subtotal">$298.00</td>
                        </tr>
                        <tr>
                          <td className="cart-product-remove">x</td>
                          <td className="cart-product-image">
                            <Link to="/product-details">
                              <img src="assets/img/product/2.png" alt="#" />
                            </Link>
                          </td>
                          <td className="cart-product-info">
                            <h4>
                              <Link to="/product-details">
                                OE Replica Wheels
                              </Link>
                            </h4>
                          </td>
                          <td className="cart-product-price">$85.00</td>
                          <td className="cart-product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                type="text"
                                defaultValue={"02"}
                                name="qtybutton"
                                className="cart-plus-minus-box"
                              />
                            </div>
                          </td>
                          <td className="cart-product-subtotal">$170.00</td>
                        </tr>
                        <tr>
                          <td className="cart-product-remove">x</td>
                          <td className="cart-product-image">
                            <Link to="/product-details">
                              <img src="assets/img/product/3.png" alt="#" />
                            </Link>
                          </td>
                          <td className="cart-product-info">
                            <h4>
                              <Link to="/product-details">
                                Wheel Bearing Retainer
                              </Link>
                            </h4>
                          </td>
                          <td className="cart-product-price">$75.00</td>
                          <td className="cart-product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                type="text"
                                defaultValue={"02"}
                                name="qtybutton"
                                className="cart-plus-minus-box"
                              />
                            </div>
                          </td>
                          <td className="cart-product-subtotal">$150.00</td>
                        </tr>
                        <tr className="cart-coupon-row">
                          <td colSpan={6}>
                            <div className="cart-coupon">
                              <input
                                type="text"
                                name="cart-coupon"
                                placeholder="Coupon code"
                              />
                              <button
                                type="submit"
                                className="btn theme-btn-2 btn-effect-2"
                              >
                                Apply Coupon
                              </button>
                            </div>
                          </td>
                          <td>
                            <button
                              type="submit"
                              className="btn theme-btn-2 btn-effect-2-- disabled"
                            >
                              Update Cart
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="shoping-cart-total mt-50">
                    <h4>Cart Totals</h4>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Cart Subtotal</td>
                          <td>$618.00</td>
                        </tr>
                        <tr>
                          <td>Shipping and Handing</td>
                          <td>$15.00</td>
                        </tr>
                        <tr>
                          <td>Vat</td>
                          <td>$00.00</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Order Total</strong>
                          </td>
                          <td>
                            <strong>$633.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="btn-wrapper text-right">
                      <Link
                        to="/checkout"
                        className="theme-btn-1 btn btn-effect-1"
                      >
                        Proceed to checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SHOPING CART AREA END */}
      </div>
    </>
  );
}
