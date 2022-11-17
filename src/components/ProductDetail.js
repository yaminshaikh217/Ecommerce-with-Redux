import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { useState } from "react";
import { addToCart } from "../redux/actions/index.js";


const ProductDetail = ({ slideIn, handleSlide }) => {
  const [slide, setslide] = useState(false);
  const dispatch = useDispatch();
  const singleProd = useSelector((state) => state.prodByID);
  const handleAddToCart = (e) => {
    handleSlide(e);
    setslide((prev) => !prev);
    dispatch(addToCart(singleProd[0]));
  };


  return (
    <>
      <section className={`prodDetail ${slideIn ? "slideIn" : ""}`}>
        <div className="d-flex">
          <h2>Details</h2>
          <div className="cross">
            {singleProd[0] ? (
              <i
                className="fa-solid fa-xmark"
                onClick={handleSlide}
                id={singleProd[0]?.item_id}
              ></i>
            ) : (
              ""
            )}
          </div>
        </div>
        {singleProd[0] ? (
          <div className="singleProd">
            <div className="shadow">
              <img src={singleProd[0]?.picture_url} alt="Food" />
            </div>
            <div>
              <div className="d-flex">
                <h3 className="prodName">{singleProd[0]?.name}</h3>
                <h4 className="price">
                  {singleProd[0]?.price.base_unit}.
                  <sup>{singleProd[0]?.price.exponent}</sup>
                  <span>{singleProd[0]?.price.iso_4217}</span>
                </h4>
              </div>
              <p className="description">{singleProd[0]?.description}</p>
              <button
                className="addCart"
                id={singleProd[0]?.item_id}
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ) : (
          "No ProductDetail Available"
        )}
      </section>
      <Cart slideIn={slide} handleSlide={() => setslide((prev) => !prev)} />
    </>
  );
};

export default ProductDetail;
