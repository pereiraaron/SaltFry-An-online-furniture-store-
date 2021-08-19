import React from "react";

import { useHistory } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import "./CartTotals.css";

const CartTotals = ({ itemsPrice, shippingPrice, totalPrice }) => {
  const history = useHistory();

  const checkoutHandler = () => {
    history.push("/checkout");
  };

  return (
    <section className="cart-totals">
      <div>
        <article>
          <h5>
            subtotal :<span>&nbsp;{formatPrice(itemsPrice)}</span>
          </h5>
          <p>
            shipping fee :<span>&nbsp;{formatPrice(shippingPrice)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>&nbsp;{formatPrice(totalPrice)}</span>
          </h4>
        </article>
        <button className="btn" onClick={checkoutHandler}>
          proceed to checkout
        </button>
      </div>
    </section>
  );
};

export default CartTotals;
