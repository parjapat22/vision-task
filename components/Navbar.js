import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.lists}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>

        <li className={styles.navlink}>
          <Link href="/cart">
            <p>Cart ({getItemsCount()})</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;