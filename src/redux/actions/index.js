const prodList = (products) => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: products,
  };
};

const prodByID = (products) => {
  return {
    type: "GET_BY_ID",
    payload: products,
  };
};
const addToCart = (products) => {
  return {
    type: "ADD_TO_CART",
    payload: products,
  };
};
const increCart = (products) => {
  return {
    type: "INCREASE_QTY",
    payload: products,
  };
};
const decreCart = (products) => {
  return {
    type: "DECREASE_QTY",
    payload: products,
  };
};


export {prodList , prodByID , addToCart,increCart,decreCart}