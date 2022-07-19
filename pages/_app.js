import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import store from "../redux/store";
import "../styles/global.css";

const CartApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default CartApp;