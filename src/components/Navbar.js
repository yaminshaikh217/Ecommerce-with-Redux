import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.addToCart);
  return (
    <>
      <header>
        <nav>
          <div className="logo">SHOP</div>
          <div className="cart">
            {count.data ? <p>{count.data}</p> : <p>0</p>}
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
