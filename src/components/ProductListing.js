import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import data from "../data/products.json";
import { prodList, prodByID } from "../redux/actions";
import ProductDetail from "./ProductDetail";

const ProductListing = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.prodList);

  const [slide, setslide] = useState(false);

  const handleProdById = (e) => {
    setslide((prev) => !prev);
    const singleProd = list.products?.filter((curr) => {
      return curr.item_id === e.target.id;
    });
    dispatch(prodByID(singleProd));
  };

  useEffect(() => {
    dispatch(prodList(data));
  }, []);

  return (
    <>
      <section className="listing">
        {list.products?.map((curr, idx) => {
          return (
            <div
              className="cards"
              key={curr.item_id}
              onClick={handleProdById}
              id={curr.item_id}
            >
              <div>
                <img src={curr.picture_url} alt="food" />
              </div>
              <div className="d-flex">
                <h3 className="prodName">{curr.name}</h3>
                <h4 className="price">
                  {curr.price.base_unit}.<sup>{curr.price.exponent}</sup>{" "}
                  <span>{curr.price.iso_4217}</span>
                </h4>
              </div>
            </div>
          );
        })}
      </section>
      <ProductDetail slideIn={slide} handleSlide={handleProdById} />
    </>
  );
};

export default ProductListing;
