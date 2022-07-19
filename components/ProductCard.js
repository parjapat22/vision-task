import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Image
          src={product.image}
          alt="Product Image"
          height={250}
          width={220}
        />
      </div>

      <h4 className={styles.name}>{product.name}</h4>
      <p className={styles.price}>£{product.price}</p>

      <div className={styles.button}>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;