import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import styles from "../styles/CartPage.module.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1 className={styles.total}>Your Cart is Empty!</h1>
      ) : (
        <div>
          <table className={styles.table}>
            <tr>
              <th className={styles.imageTd}>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
              <th>Total Price</th>
            </tr>

            {cart.map(({ id, image, name, price, quantity }) => (
              <tr key={id}>
                <td
                  className={styles.imageTd}
                  style={{}}
                >
                  <Image
                    src={image}
                    alt="Product Image"
                    height="80"
                    width="100"
                  />
                </td>
                <td align="center">{name}</td>
                <td align="center">{price}</td>
                <td align="center">{quantity}</td>

                <td>
                  <div className={styles.buttons}>
                    <button
                      className={styles.btn}
                      onClick={() => dispatch(decrementQuantity(id))}
                    >
                      -
                    </button>

                    <button
                      className={styles.btn}
                      onClick={() => dispatch(incrementQuantity(id))}
                    >
                      +
                    </button>

                    <button
                      className={styles.btn}
                      onClick={() => dispatch(removeFromCart(id))}
                    >
                      x
                    </button>
                  </div>
                </td>

                <td align="center">£{quantity * price}</td>
              </tr>
            )
            )}
          </table>
          <h2 className={styles.total}>Grand Total: £{getTotalPrice()}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;