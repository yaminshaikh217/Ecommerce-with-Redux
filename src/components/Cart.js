import { useSelector, useDispatch } from "react-redux";
import { increCart, decreCart } from "../redux/actions";

const Cart = ({ slideIn, handleSlide }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.addToCart);
  const cartIncre = useSelector((state) => state.increCart);
  const cartDecre = useSelector((state) => state.decreCart);

  const totalAmount = cart.cart
    ?.map((curr, idx) => {
      var prevPrice = +(curr?.amount * curr?.qty);
      return prevPrice;
    })
    .reduce((accum, curr) => {
      return (accum += curr);
    }, 0);

  const handleIncrement = (e) => {
    dispatch(increCart(e.target.id));
  };
  const handleDecrement = (e) => {
    dispatch(decreCart(e.target.id));
  };


  return (
    <>
      <section className={`prodDetail ${slideIn ? "slideIn" : ""}`}>
        <div className="d-flex">
          <h2>Cart</h2>
          <div className="cross">
            <i className="fa-solid fa-xmark" onClick={handleSlide}></i>
          </div>
        </div>

        <div className="cartListing">
          {cart.cart?.map((curr, idx) => {
            return (
              <div className="cartContent" key={curr.item_id}>
                <div className="w-20">
                  <img src={curr.picture_url} alt="Food" />
                </div>

                <div>
                  <h3 className="prodName">{curr.name}</h3>
                  <p className="description">{curr.description}</p>
                </div>

                <div className="increment">
                  <button
                    className="plus"
                    onClick={handleIncrement}
                    id={curr.item_id}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <div className="count">{curr.qty}</div>
                  <button
                    className="plus"
                    onClick={handleDecrement}
                    id={curr.item_id}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>

                <div>
                  <h4 className="price">
                    {curr.amount}
                    <span>{curr.price.iso_4217}</span>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bottom d-flex">
          <div className="total">Total : {totalAmount}</div>
          <div className="addCart">Proceed to Buy</div>
        </div>
      </section>
    </>
  );
};

export default Cart;
